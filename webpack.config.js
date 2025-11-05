const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const getPkgVersion = (pkgName) => {
  const pkgJsonPath = require.resolve(`${pkgName}/package.json`);
  return require(pkgJsonPath).version;
};

// common webpack utils
const common = {
  devtool: false,
  entry: path.resolve(__dirname, './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/transform-class-properties', 'babel-plugin-styled-components'],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        oneOf: [
          {
            test: /\.m?js$/,
            resolve: {
              fullySpecified: false,
            },
          },
        ],
      },
      { test: /\.txt$/, use: 'raw-loader' },
    ],
  },
  resolveLoader: {
    modules: [path.join(__dirname, './node_modules'), 'node_modules'],
  },
  plugins: [
    new CompressionPlugin({
      filename: '[path][base].br',
      algorithm: 'brotliCompress',
      test: /\.(js|css|html|svg)$/,
      compressionOptions: {
        level: 11,
      },
      threshold: 10240,
      minRatio: 0.8,
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      '@feature-hub/react': '@feature-hub/react',
      'styled-components': 'styled-components',
    }),
  ],
  stats: 'errors-only',
};

//   dev mode for development/demo
const devConfig = () => {
  return {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      hot: true,
      open: true,
      port: 3000,
      historyApiFallback: true,
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, `./dist/dev`),
      sourceMapFilename: '[name].[fullhash:8].map',
      chunkFilename: '[id].[fullhash:8].js',
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './public/index.html'),
      }),
      new ReactRefreshWebpackPlugin(),
      new webpack.DefinePlugin({
        'process.env.name': JSON.stringify('Vishwas'),
      }),
      new Dotenv({
        path: './.env.dev',
      }),
    ],
  };
};

//   build modern feature app to be integrated into featureHub container moduleType AMD
const buildToHostAsFeatureApp = (env) => ({
  mode: 'production',
  entry: path.join(__dirname, './src/app/AppDefinition.tsx'),
  externals: {
    react: 'react',
    '@feature-hub/react': '@feature-hub/react',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, `./dist/fa-main`),
    sourceMapFilename: '[name].[fullhash:8].map',
    chunkFilename: '[id].[fullhash:8].js',
    libraryTarget: 'umd',
    clean: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.container.ModuleFederationPlugin({
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
      },
    }),
    new webpack.DefinePlugin({
      'process.env.REACT_VERSION': JSON.stringify(getPkgVersion('react')),
      'process.env.FEATURE_HUB_REACT_VERSION': JSON.stringify(getPkgVersion('@feature-hub/react')),
    }),
    new Dotenv({
      path: `./.env.${env}`,
    }),
  ],
});

//   Build modern feature app entry index to be hosted as an application
const buildToHostAsStaticWebApp = (env) => {
  return {
    mode: 'production',
    entry: {
      main: path.join(__dirname, './src/index.tsx'),
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, `./dist`),
      sourceMapFilename: '[name].[fullhash:8].map',
      chunkFilename: '[id].[fullhash:8].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './public/index.html'),
      }),
      new Dotenv({
        path: `./.env.${env}`,
      }),
    ],
  };
};

const optimiseForStaticWebApp = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    runtimeChunk: 'single',
  },
};

module.exports = (envVars) => {
  const { env } = envVars;
  //   switch method to switch between builds
  switch (env) {
    case 'dev':
      return [
        merge(common, buildToHostAsFeatureApp('dev')),
        merge(common, optimiseForStaticWebApp, buildToHostAsStaticWebApp('dev')),
      ];
    case 'test':
      return [
        merge(common, buildToHostAsFeatureApp('test')),
        merge(common, optimiseForStaticWebApp, buildToHostAsStaticWebApp('test')),
      ];
    case 'uat':
      return [
        merge(common, buildToHostAsFeatureApp('uat')),
        merge(common, optimiseForStaticWebApp, buildToHostAsStaticWebApp('uat')),
      ];
    case 'prod':
      return [
        merge(common, buildToHostAsFeatureApp('prod')),
        merge(common, optimiseForStaticWebApp, buildToHostAsStaticWebApp('prod')),
      ];
    case 'all':
      return [
        merge(common, buildToHostAsFeatureApp('test')),
        merge(common, optimiseForStaticWebApp, buildToHostAsStaticWebApp('test')),
        merge(common, buildToHostAsFeatureApp('uat')),
        merge(common, optimiseForStaticWebApp, buildToHostAsStaticWebApp('uat')),
        merge(common, buildToHostAsFeatureApp('prod')),
        merge(common, optimiseForStaticWebApp, buildToHostAsStaticWebApp('prod')),
      ];
    default:
      return merge(common, optimiseForStaticWebApp, devConfig());
  }
};
