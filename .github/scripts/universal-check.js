const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const stripAnsi = require('strip-ansi');
const ora = require('ora');

const args = process.argv.slice(2);
const skipTests = args.includes('--skip-tests');

const defaultConfig = {
  commands: {
    namingConvention: 'npm run naming:convention',
    lintCheck: 'npm run lint:check',
    formatCheck: 'npm run format:check',
    formatFix: 'npm run format',
    test: 'npm run test',
    build: 'npm run build',
    buildAll: 'npm run build-all',
    lighthouse: 'npm run lighthouse:ci',
  },
  thresholds: { coverage: 90 },
  checks: {
    shouldRunLighthouse: (pkgName) => pkgName.startsWith('@mtnkente/ac'),
  },
  messages: {
    success: '✅ No errors found.',
    failure: '❌ Fix errors and try again.',
    formattingFix: '\nFixing formatting errors...\nAdd formatted files and commit again...',
    coverageMessage: (c, t) => `❌ ${c}% test coverage is insufficient (must be at least ${t}%).`,
  },
};

const testHandlers = {
  processFailed: (output) => {
    const clean = stripAnsi(output);
    const [failed, errors] = [
      /FAIL\s+([\w\/.-]+)(\s+›\s+)?(.+)/g,
      /●\s+(.+?)\n([\s\S]*?)(?=\n●|\nFAIL|$)/g,
    ].map((r) =>
      [...clean.matchAll(r)].map((m) => ({
        testName: m[3]?.trim() || m[1],
        file: m[1],
        body: m[2],
      }))
    );

    const summaryMatch = clean.match(
      /Test\s+Suites:\D+(\d+)\D+(\d+)\D+(\d+).*Tests:\D+(\d+)\D+(\d+)\D+(\d+)/is
    );
    const summary = summaryMatch
      ? `\nTest Suites: ${summaryMatch[1]} failed, ${summaryMatch[2]} passed, ${summaryMatch[3]} total\n` +
        `Tests: ${summaryMatch[4]} failed, ${summaryMatch[5]} passed, ${summaryMatch[6]} total\n`
      : '';

    if (failed.length) {
      console.log('\nFAILED TESTS:');
      failed.forEach(({ file, testName }, i) => {
        console.log(`\n❌ ${file} - ${testName}`);
        const exp = errors[i]?.body.match(
          /Expected:\s+(["'][^"']*["']).*?\n\s+Received:\s+(["'][^"']*["'])/
        );
        if (exp)
          console.log(
            `  ● ${errors[i].testName}\n    Expected: ${exp[1]}\n    Received: ${exp[2]}`
          );
      });
      console.log(summary + '\n❌ Fix test failures and try again.');
      process.exit(1);
    }
  },
  checkCoverage: () => {
    const coveragePath = path.join('coverage', 'coverage-summary.json');
    if (fs.existsSync(coveragePath)) {
      const {
        total: {
          lines: { pct },
        },
      } = JSON.parse(fs.readFileSync(coveragePath));
      console.log(
        pct >= defaultConfig.thresholds.coverage
          ? `✅ ${pct}% coverage`
          : defaultConfig.messages.coverageMessage(pct, defaultConfig.thresholds.coverage)
      );
    }
  },
};

const trivyBin = path.resolve(
  __dirname,
  '../../tools/trivy/' + (process.platform === 'win32' ? 'trivy.exe' : 'trivy')
);
const trivyInstallScript = path.resolve(__dirname, 'install-trivy.js');
const trivyScanScript = path.resolve(__dirname, 'trivy-scan.js');

function runTrivyScan() {
  execSync(`node "${trivyScanScript}"`, { stdio: 'inherit' });
}

function setup(userConfig = {}) {
  const config = { ...defaultConfig, ...userConfig };
  const pkg = JSON.parse(fs.readFileSync('package.json'));

  const executeCommand = (cmd, opts = {}) => {
    try {
      execSync(cmd, { stdio: opts.silent ? 'ignore' : opts.inheritOutput ? 'inherit' : 'pipe' });
      if (!opts.silent) console.log(config.messages.success);
    } catch (e) {
      const output = [e.stdout, e.stderr].join('');
      console.log(config.messages.failure + (output.match(/\berrors?\b/i) ? '\n' + output : ''));
      if (cmd.includes(config.commands.formatCheck)) {
        console.log(config.messages.formattingFix);
        executeCommand(config.commands.formatFix);
      }
      process.exit(1);
    }
  };

  const steps = [
    ['\n💡 Checking naming conventions...', 'namingConvention'],
    ['\n💡 Linting...', 'lintCheck', { inheritOutput: false }],
    !skipTests && [
      '\n💡 Testing...',
      'test',
      {
        handler: () => {
          if (!pkg.scripts.test) return;
          const spinner = ora('Running tests...').start();
          try {
            execSync(config.commands.test, { stdio: 'pipe' }).toString();
            spinner.succeed('Tests completed successfully!');
            testHandlers.checkCoverage();
          } catch (e) {
            spinner.fail('Tests failed');
            testHandlers.processFailed(e.stdout.toString() + e.stderr.toString());
          }
        },
      },
    ],
    ['\n💡 Building...', pkg.scripts?.build ? 'build' : 'buildAll'],
    [
      '\n💡 Lighthouse...',
      'lighthouse',
      {
        handler: () => {
          if (!config.checks.shouldRunLighthouse(pkg.name)) {
            console.log('⏭  Not an ac- repo, skipping lighthouse checks.');
            return;
          }
          executeCommand(config.commands.lighthouse, { inheritOutput: true });
        },
      },
    ],
    [
      '\n💡 Checking Trivy installation and scanning...',
      'trivy',
      {
        handler: () => {
          try {
            runTrivyScan();
          } catch {
            console.log('🔒 Security check failed. Please remediate issues above.');
            process.exit(1);
          }
        },
      },
    ],
    ['\n💡 Formatting...', 'formatCheck'],
  ].filter(Boolean);

  return {
    executePipeline: () =>
      steps.forEach(([msg, cmd, opts]) => {
        console.log(msg);
        if (opts?.handler) {
          opts.handler();
        } else {
          executeCommand(config.commands[cmd], opts);
        }
      }),
  };
}

module.exports = { setup, defaultConfig };

if (require.main === module) setup().executePipeline();
