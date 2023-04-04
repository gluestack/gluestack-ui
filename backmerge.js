/* eslint-disable no-console */
require('dotenv').config();
const { Octokit } = require('@octokit/rest');
const octokit = new Octokit({ auth: process.env.GITHUB_PERSONAL_TOKEN });

function createPRforGithub() {
  octokit.rest.pulls.create({
    owner: 'gluestack',
    repo: 'gluestack-ui',
    title: 'backmerge: main to patch',
    base: 'patch',
    head: 'main',
  });
  console.log('Created PR!');
}

createPRforGithub();
