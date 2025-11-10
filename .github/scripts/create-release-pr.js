require('dotenv').config();
const axios = require('axios');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = process.env.REPO_OWNER;
const REPO_NAME = process.env.REPO_NAME;
const BASE_BRANCH = 'main';
const HEAD_BRANCH = 'release';
const PR_TITLE = 'chore: merge release branch into main';
const PR_BODY = ' AB#25993 This pull request merges the release branch into the main branch.';

async function createPullRequest() {
  try {
    // Create a pull request
    const { data: pr } = await axios.post(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/pulls`,
      {
        title: PR_TITLE,
        body: PR_BODY,
        head: HEAD_BRANCH,
        base: BASE_BRANCH,
      },
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );

    console.log('Pull request created:', pr.url);

    // Optionally, merge the pull request if it's ready to be merged
    const mergeResult = await axios.put(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/pulls/${pr.number}/merge`,
      {},
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );

    console.log('Pull request merged:', mergeResult.data);
  } catch (error) {
    console.error(
      'Error handling pull request:',
      error.response ? error.response.data : error.message
    );
  }
}

createPullRequest().then(console.log).catch(console.error);
