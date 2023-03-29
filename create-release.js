/* eslint-disable no-console */
const readline = require('readline');
const { edit } = require('external-editor');
const { spawnSync, execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const { Octokit } = require('@octokit/rest');
const octokit = new Octokit({ auth: process.env.GITHUB_PERSONAL_TOKEN });
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const packageNames = [
  'actionsheet',
  'alert-dialog',
  'avatar',
  'button',
  'checkbox',
  'divider',
  'fab',
  'form-control',
  'hooks',
  'hstack',
  'icon',
  'icon-button',
  'input',
  'link',
  'menu',
  'modal',
  'popover',
  'pressable',
  'progress',
  'provider',
  'radio',
  'select',
  'slider',
  'spinner',
  'switch',
  'tabs',
  'textarea',
  'toast',
  'tooltip',
  'utils',
  'vstack',
  'overlay',
  'stack',
  'transitions',
  'react-native-aria',
];
let response;
let releaseBranchName;

function createBranch(branchName) {
  console.log(`Creating Branch ${branchName}`);
  execSync(`git checkout -b ${branchName}`);
  console.log(`Created branch ${branchName}`);
}

function createChangesetFile(packageName, versionUpgradeType, summary) {
  const changesetDir = path.join(process.cwd(), '.changeset');
  if (!fs.existsSync(changesetDir)) {
    fs.mkdirSync(changesetDir);
  }
  const fileName = `changeset-file.md`;
  const filePath = path.join(changesetDir, fileName);
  const content = `---
'${packageName}': ${versionUpgradeType}
---

${summary}
`;
  fs.writeFileSync(filePath, content);
  console.log(`Changeset file ${fileName} created at ${changesetDir}`);
}

function pushToGithub(packageName, version) {
  console.log('Pushing Branch');
  const prTitle = `release: ${packageName} version ${version}`;
  execSync(`git push origin ${releaseBranchName}`);
  console.log('Creating PR');
  createPRforGithub(prTitle);
}

function createPRforGithub(title) {
  octokit.rest.pulls.create({
    owner: 'gluestack',
    repo: 'gluestack-ui',
    title: title,
    base: 'main',
    head: releaseBranchName,
  });
  console.log('Created PR!');
}

function runChangesetCommands(summary, bumpVersion, packageName) {
  console.log('Creating Changeset file');
  createChangesetFile(packageName, bumpVersion.type, summary);

  console.log('Running Changeset version');
  const changesetVersionResult = spawnSync('yarn', ['changeset', 'version'], {
    stdio: 'inherit',
  });

  console.log('Commit Changes');
  const commitMessage = `chore: ${packageName} version bump to ${bumpVersion.version}`;
  if (changesetVersionResult.status === 0) {
    const gitAdd = spawnSync('git', ['add', '-A'], {
      stdio: 'inherit',
    });
    if (gitAdd.status === 0) {
      const gitCommit = spawnSync('git', ['commit', '-m', `${commitMessage}`], {
        stdio: 'inherit',
      });
      if (gitCommit.status === 0) {
        pushToGithub(packageName, bumpVersion.version);
      } else {
        console.error('Failed to commit changes', gitCommit.stderr.toString());
      }
    } else {
      console.error('Failed to commit changes', gitAdd.stderr.toString());
    }
  } else {
    console.error(
      'Failed to run yarn changeset version',
      changesetVersionResult.stderr.toString()
    );
  }
  return;
}

function resolveVersion(currentVersion) {
  const versionParts = currentVersion.split('.');
  const major = parseInt(versionParts[0], 10);
  const minor = parseInt(versionParts[1], 10);
  const patch = parseInt(versionParts[2], 10);

  return new Promise((resolve, reject) => {
    rl.question('Is this a patch version change? (y/n) ', (answer) => {
      if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
        const bumpVersionPatch = {
          version: `${major}.${minor}.${patch + 1}`,
          type: 'patch',
        };
        resolve(bumpVersionPatch);
        return;
      } else {
        rl.question('Is this a minor version change? (y/n) ', (answer) => {
          if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
            const bumpVersionMinor = {
              version: `${major}.${minor + 1}.0`,
              type: 'minor',
            };
            resolve(bumpVersionMinor);
            return;
          } else {
            rl.question('Is this a major version change? (y/n) ', (answer) => {
              if (
                answer.toLowerCase() === 'y' ||
                answer.toLowerCase() === 'yes'
              ) {
                const bumpVersionMajor = {
                  version: `${major + 1}.0.0`,
                  type: 'major',
                };
                resolve(bumpVersionMajor);
                return;
              } else {
                reject(new Error('Invalid input'));
                rl.close();
              }
            });
          }
        });
      }
    });
  });
}

function getPackageVersion(packageName) {
  const command = `yarn list --depth=0 --pattern ${packageName} | grep ${packageName} | awk -F@ '{print $NF}'`;
  const output = execSync(command, { encoding: 'utf-8' });
  return output.trim();
}

rl.question('Enter package name: ', (packageName) => {
  packageName = packageName.trim();
  if (packageName) {
    if (packageNames.includes(packageName)) {
      const currentVersion = getPackageVersion(`@gluestack-ui/${packageName}`);

      resolveVersion(currentVersion)
        .then((bumpVersion) => {
          console.log(bumpVersion, 'bumpVersion');
          rl.question('Enter summary of fixes: ', (summary) => {
            if (summary === '') {
              response = edit(
                '\n\n# Please enter a summary for your changes.',
                {
                  postfix: '.md',
                }
              );
            }
            console.log(`Package name: ${packageName}`);
            console.log(`Summary of fixes: ${summary}`);
            const branchName = `release/@gluestack-ui/${packageName}@${bumpVersion.version}`;
            releaseBranchName = branchName;
            createBranch(branchName);
            runChangesetCommands(
              summary,
              bumpVersion,
              `@gluestack-ui/${packageName}`
            );
            rl.close();
          });
        })
        .catch((error) => {
          console.error(`Error: ${error.message}`);
        });
    } else {
      console.log('Package name not found!');
      rl.close();
    }
  } else {
    console.log('Invalid package name format!');
    rl.close();
  }
});
