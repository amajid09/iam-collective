const https = require('https');

const token = process.env.GITHUB_TOKEN;
const repo = process.env.REPO_NAME;

https.get(
  `https://api.github.com/repos/${repo}/pulls?state=open`,
  {
    headers: {
      Authorization: `token ${token}`,
      'User-Agent': 'Dependabot-Checker',
      Accept: 'application/vnd.github.v3+json',
    },
  },
  (res) => {
    let data = '';
    res.on('data', (chunk) => (data += chunk));
    res.on('end', () => {
      const response = JSON.parse(data);

      const dependabotPRs = response.filter((pr) => pr.user.login.includes('dependabot'));
      const openPRs = dependabotPRs.length;
      console.log(`::set-output name=dependabot_pr_count::${openPRs}`);
      console.log(openPRs);
    });
  }
);
