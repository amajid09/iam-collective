const { merge } = require('webpack-merge');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const deps = require('./package.json').dependencies;

const getPkgVersion = (pkgName) => {
  const pkgJsonPath = require.resolve(`${pkgName}/package.json`);
  return require(pkgJsonPath).version;
};

// Common configuration
const common = {
  devtool: false,
  entry: path.resolve(__dirname, './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      stream: require.resolve('stream-browserify'),
      crypto: require.resolve('crypto-browserify'),
      path: require.resolve('path-browserify'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'swc-loader',
          options: {
            jsc: {
              parser: { syntax: 'typescript', tsx: true },
              transform: { react: { runtime: 'automatic' } },
            },
          },
        },
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: { maxSize: 10 * 1024 },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
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
      {
        test: /\.txt$/,
        use: 'raw-loader',
      },
    ],
  },
  resolveLoader: {
    modules: [path.join(__dirname, './node_modules'), 'node_modules'],
  },
  plugins: [
    new webpack.ProgressPlugin({
      activeModules: false,
      entries: true,
      handler(percentage, message, ...args) {
        const pct = Math.floor(percentage * 100);
        console.log(`${pct}% : ${message}`, ...args);
      },
      modules: false,
      modulesCount: 100,
      profile: false,
      dependencies: false,
      dependenciesCount: 100,
    }),
    // new CompressionPlugin({
    //   filename: '[path][base].br',
    //   algorithm: 'brotliCompress',
    //   test: /\.(js|css|html|svg)$/,
    //   compressionOptions: { level: 11 },
    //   threshold: 10240,
    //   minRatio: 0.8,
    // }),
    // new CompressionPlugin({
    //   filename: '[path][base].gz',
    //   algorithm: 'gzip',
    //   test: /\.(js|css|html|svg)$/,
    //   threshold: 10240,
    //   minRatio: 0.8,
    // }),

    new webpack.ProvidePlugin({
      React: 'react',
      process: 'process/browser',
    }),
    new Dotenv({
      path: './.env',
    }),
  ],
  stats: 'errors-only',
};

// Configuration for development
const devConfig = {
  mode: 'development',
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
    publicPath: '/',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      publicPath: '/',
    }),

    new ReactRefreshWebpackPlugin(),
  ],
};

// Common production settings
const createProdConfig = (env) => ({
  mode: 'production',
  entry: {
    main: path.join(__dirname, './src/index.tsx'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, `./dist`),
    sourceMapFilename: '[name].[fullhash:8].map',
    chunkFilename: '[id].[fullhash:8].js',
    clean: true,
  },
  cache: {
    type: 'filesystem',
    compression: 'gzip',
    buildDependencies: {
      config: [__filename],
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      publicPath: '/',
      template: path.resolve(__dirname, './public/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          to: path.resolve(__dirname, 'dist'),
          globOptions: {
            ignore: ['**/index.html'], // since HtmlWebpackPlugin already handles it
          },
        },
      ],
    }),
    new webpack.container.ModuleFederationPlugin({
      shared: {
        react: { singleton: true, eager: true, requiredVersion: deps['react'] },
      },
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      '@feature-hub/react': '@feature-hub/react',
      'styled-components': 'styled-components',
    }),
    new webpack.DefinePlugin({
      'process.env.REACT_VERSION': JSON.stringify(getPkgVersion('react')),
      'process.env.FEATURE_HUB_REACT_VERSION': JSON.stringify(getPkgVersion('@feature-hub/react')),
    }),
    new Dotenv({
      path: `./.env.${env}`,
    }),
    new Dotenv({
      path: `./.env`,
    }),
  ],
});

// Common optimization settings
const optimizationConfigs = {
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        minify: TerserPlugin.swcMinify,
        parallel: true,
        terserOptions: { compress: true },
      }),
    ],
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 10,
      minSize: 20000,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
};

// Export configuration based on environment
module.exports = (envVars) => {
  const { env } = envVars;

  switch (env) {
    case 'dev':
      return merge(common, optimizationConfigs, createProdConfig('dev'));
    default:
      return merge(common, devConfig);
  }
};
