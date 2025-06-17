import templatesMap from './data.js';
import {
  appendFileSync,
  existsSync,
  mkdirSync,
  rmSync,
  renameSync,
  readdirSync,
} from 'fs';
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
  // Create new directory
  mkdirSync(projectName);
  try {
    // Clone the project-template
    execSync('git init', { cwd: dirPath });
    execSync(`git remote add origin ${gitRepo}`, { cwd: dirPath });
    execSync('git config core.sparseCheckout true', { cwd: dirPath });

    // Create sparse-checkout file
    const sparseCheckoutPath = path.join(
      dirPath,
      '.git',
      'info',
      'sparse-checkout'
    );
    appendFileSync(sparseCheckoutPath, path.join('apps', templateName) + '\n');

    // Pull the template
    execSync(`git pull origin ${branch}`, { cwd: dirPath });

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
