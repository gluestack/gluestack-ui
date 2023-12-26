/* eslint-disable no-console */
const fs = require('fs-extra');
const { exec } = require('child_process');
const path = require('path');
const NewFS = require('fs');
// Define source and destination paths
const sourcePath = path.join(process.cwd(), '../themed/src/components');

const destinationPath = path.join(process.cwd(), '/src/components');
const IconsPath = path.join(process.cwd(), '/src/components/Icons');

function removeLinesFromFile(filePath, linesToRemove) {
  // Read the content of the file
  console.log('Removing lines...');
  NewFS.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    // Remove the specified lines
    linesToRemove.forEach((lineToRemove) => {
      const pattern = new RegExp(
        lineToRemove.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + '\n',
        'g'
      );
      data = data.replace(pattern, '');
    });

    // Write the modified content back to the file
    NewFS.writeFile(filePath, data, 'utf8', (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Lines removed successfully.');
    });
  });
}

// Function to copy folder
const copyFolder = async () => {
  try {
    fs.copySync(sourcePath, destinationPath);
    console.log('Folder copied successfully.');

    await fs.removeSync(IconsPath);

    console.log('Deleted Icon folder.');
    removeLinesFromFile('./src/components/index.tsx', [
      "export * from './Icons';",
      "export * from './Icons/Icons';",
    ]);
    // Run code shift
    // Run build command
    replaceLinesInFile(
      'src/components/FormControl/styled-components/ErrorIcon.tsx',
      replacements
    );
    findFiles(directoryToSearch, fileNameToFind, (filePath) => {
      console.log('Found file:', filePath);
      replaceLinesInFile(filePath, replacements);
    });
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

//// File Changes

function findFiles(directory, fileName, callback) {
  NewFS.readdir(directory, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(directory, file);

      NewFS.stat(filePath, (err, stats) => {
        if (err) {
          console.error(err);
          return;
        }

        if (stats.isDirectory()) {
          // Recursively search in subdirectories
          findFiles(filePath, fileName, callback);
        } else if (file === fileName) {
          // Found a matching file
          callback(filePath);
        }
      });
    });
  });
}

function replaceLinesInFile(filePath, replacements) {
  // Read the content of the file
  NewFS.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    // Perform the specified replacements
    replacements.forEach(({ search, replace }) => {
      const pattern = new RegExp(
        search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'),
        'g'
      );
      data = data.replace(pattern, replace);
    });

    // Write the modified content back to the file
    NewFS.writeFile(filePath, data, 'utf8', (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Replacements made successfully for file:', filePath);
    });
  });
}

// Example usage
const directoryToSearch = './src/components'; // Replace with the directory path
const fileNameToFind = 'Icon.tsx';
const replacements = [
  {
    search: "import { StyledIcon } from '../../Icons/styled-components';",
    replace: "import { View as StyledIcon } from 'react-native';",
  },
  // Add more replacements if needed
];
