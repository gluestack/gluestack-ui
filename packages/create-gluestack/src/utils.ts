import templatesMap from './data.js';
import { existsSync, rmSync, renameSync, readdirSync } from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const { gitRepo, branch } = templatesMap;

async function cloneProject(projectName: string, templateName: string) {
  const dirPath = path.join(process.cwd(), projectName);
  if (existsSync(dirPath)) {
    console.log(`Folder already exists with name: ${projectName}`);
    console.log('Overwriding the existing folder...\n');
    // Delete directory recursively
    rmSync(projectName, { recursive: true, force: true });
  }

  try {
    // Single command shallow clone with sparse checkout - much faster!
    execSync(
      `git clone --depth=1 --filter=blob:none --sparse ${gitRepo} ${projectName} --branch ${branch}`
    );

    // Initialize sparse checkout with no cone mode and explicit patterns
    execSync(`git sparse-checkout init --no-cone`, { cwd: dirPath });
    execSync(`git sparse-checkout set "apps/${templateName}/*"`, {
      cwd: dirPath,
    });

    // Move files
    moveAllFiles(dirPath, templateName);

    // Clean up
    try {
      // Remove the apps directory
      rmSync(path.join(dirPath, 'apps'), { recursive: true, force: true });
      // Remove the .git directory
      rmSync(path.join(dirPath, '.git'), { recursive: true, force: true });
    } catch (cleanupError) {
      console.warn(
        'Warning: Some cleanup operations failed, but project should still be usable'
      );
    }
  } catch (error) {
    console.log(
      'Git not installed or error occurred. Please install git and try again...'
    );
    process.exit(1);
  }
}

async function installDependencies(
  projectName: string,
  selectedPackageManager: string
) {
  console.log('Installing Dependencies...');
  execSync(`${selectedPackageManager} install`, {
    cwd: path.join(process.cwd(), projectName),
  });
  console.log('Dependancies Installed!');
}

async function gitInit(projectName: string) {
  const dirPath = path.join(process.cwd(), projectName);
  execSync('git init', { cwd: dirPath });
  execSync('git branch -M main', { cwd: dirPath });
  execSync(`git add --all`, { cwd: dirPath });
  execSync(`git commit -m "Init"`, { cwd: dirPath });
}

function moveAllFiles(dirPath: string, templateName: string) {
  const sourcePath = path.join(dirPath, 'apps', templateName);

  // Read all files/directories in the source directory
  const items = readdirSync(sourcePath);

  // Move each item to the destination
  items.forEach((item) => {
    const sourceItem = path.join(sourcePath, item);
    const destItem = path.join(dirPath, item);

    renameSync(sourceItem, destItem);
  });
}

export { cloneProject, installDependencies, gitInit };
