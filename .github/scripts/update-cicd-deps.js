const fs = require('fs');
const path = require('path');

const targetFile = process.argv[2] || path.join('.github', 'workflows', 'ci-cd.yml');
const CICD_FILE = path.resolve(process.cwd(), targetFile);
const userFriendlyFilePath = CICD_FILE.replace(process.cwd() + path.sep, '');

if (!fs.existsSync(CICD_FILE)) {
  console.error(`Error: ${userFriendlyFilePath} not found!`);
  process.exit(1);
}

const DEP_VERSIONS = {
  'actions/checkout': 'v4',
  'actions/setup-node': 'v4',
  'actions/cache': 'v4',
};

function updatePipelineFile() {
  let fileContent = fs.readFileSync(CICD_FILE, 'utf-8');
  let newFileContent = fileContent;

  for (const [dep, version] of Object.entries(DEP_VERSIONS)) {
    const regex = new RegExp(`(${dep}@)v([0-9]+(?:\\.[0-9]+)*)`, 'g');
    newFileContent = newFileContent.replace(regex, (match, prefix, currentVersion) => {
      return currentVersion !== version ? `${prefix}${version}` : match;
    });
  }

  if (fileContent !== newFileContent) {
    fs.writeFileSync(CICD_FILE, newFileContent, 'utf-8');
    console.log(`Updated dependencies in ${userFriendlyFilePath}`);
  } else {
    console.log(`No updates needed in ${userFriendlyFilePath}`);
  }
}

console.log('💡 Updating pipeline dependencies...');
updatePipelineFile();
