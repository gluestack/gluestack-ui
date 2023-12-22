/* eslint-disable no-console */
const fs = require('fs-extra');
const { exec } = require('child_process');
const path = require('path');
// Define source and destination paths
const sourcePath = path.join(process.cwd(), '../themed/src/components');

const destinationPath = path.join(process.cwd(), '/src/components');

// Function to copy folder
const copyFolder = async () => {
  try {
    await fs.copy(sourcePath, destinationPath);
    console.log('Folder copied successfully.');

    // Run build command
    runBuild();
  } catch (err) {
    console.error('Error copying folder:', err);
  }
};

// Function to run build
const runBuild = () => {
  console.log('Running build...');
  const buildProcess = exec('bob build', {});

  buildProcess.stdout.on('data', (data) => {
    console.log(data);
  });

  buildProcess.stderr.on('data', (data) => {
    console.error(data);
  });

  buildProcess.on('close', (code) => {
    if (code === 0) {
      console.log('Build completed successfully.');
    } else {
      console.error(`Build process exited with code ${code}.`);
    }
  });
};

// Function to delete copied files
const deleteCopiedFiles = () => {
  try {
    fs.removeSync(destinationPath);
    console.log('Copied files deleted successfully.');
  } catch (err) {
    console.error('Error deleting copied files:', err);
  }
};

// Start the process
deleteCopiedFiles();
copyFolder();
