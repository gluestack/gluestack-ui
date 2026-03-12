import templatesMap from './data.js';
import { existsSync, rmSync, renameSync, readdirSync } from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import * as readline from 'readline';

const { gitRepo, branch } = templatesMap;

// Helper function to prompt user for input
function promptUser(question: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.toLowerCase().trim());
    });
  });
}

async function cloneProject(projectName: string, templateName: string) {
  const dirPath = path.join(process.cwd(), projectName);
  if (existsSync(dirPath)) {
    console.log(`Folder already exists with name: ${projectName}`);
    
    const userChoice = await promptUser(
      'Do you want to override the existing folder? (yes/no | y/n): '
    );
    
    if (userChoice === 'yes' || userChoice === 'y') {
      console.log('Overriding the existing folder...\n');
      // Delete directory recursively
      rmSync(projectName, { recursive: true, force: true });
    } else {
      console.log('Operation cancelled. Please choose a different project name.');
      process.exit(0);
    }
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

    // Clean up .git directory (apps/ was already removed inside moveAllFiles)
    try {
      rmSync(path.join(dirPath, '.git'), { recursive: true, force: true });
    } catch (cleanupError) {
      console.warn(
        'Warning: Some cleanup operations failed, but project should still be usable'
      );
    }
  } catch (error: any) {
    console.error(
      'Failed to clone project. Ensure git is installed and try again.'
    );
    console.error(error?.message || error);
    process.exit(1);
  }
}

async function installDependencies(
  projectName: string,
  selectedPackageManager: string
) {
  console.log('Installing dependencies...');
  execSync(`${selectedPackageManager} install`, {
    cwd: path.join(process.cwd(), projectName),
  });
  console.log('Dependencies installed!');
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
  const tempPath = path.join(dirPath, '__gluestack_temp__');

  // Move template to a temp location to avoid conflicts with the existing
  // 'apps/' directory (e.g. monorepo templates that contain their own 'apps/' subdir)
  renameSync(sourcePath, tempPath);

  // Remove the now-empty apps directory so items can be moved to the root
  rmSync(path.join(dirPath, 'apps'), { recursive: true, force: true });

  // Read all files/directories in the temp directory
  const items = readdirSync(tempPath);

  // Move each item to the project root
  items.forEach((item) => {
    const sourceItem = path.join(tempPath, item);
    const destItem = path.join(dirPath, item);
    renameSync(sourceItem, destItem);
  });

  // Remove temp directory
  rmSync(tempPath, { recursive: true, force: true });
}

export { cloneProject, installDependencies, gitInit };
