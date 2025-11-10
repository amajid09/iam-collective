const fs = require('fs');
const path = require('path');
const cp = require('child_process');

const directory = '.lighthouseci';
const files = fs
  .readdirSync(directory)
  .filter((file) => file.endsWith('.html'))
  .map((file) => ({
    file,
    time: fs.statSync(path.join(directory, file)).mtime.getTime(),
  }))
  .sort((a, b) => b.time - a.time);

if (files.length > 0) {
  const mostRecentFile = files[0].file;
  console.log(`Opening the most recent Lighthouse report: ${mostRecentFile}`);
  cp.execFileSync('npx', ['opener', path.join(directory, mostRecentFile)], { stdio: 'inherit' });
} else {
  console.error('No HTML files found in the .lighthouseci directory.');
  process.exit(1);
}
