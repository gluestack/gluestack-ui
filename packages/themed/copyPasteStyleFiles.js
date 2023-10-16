const fs = require('fs');
const path = require('path');

function processFile(filePath, outputDirectory) {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Extract componentName from the file
  const match = content.match(/componentName:\s+'([^']+)'/);
  if (!match) {
    return;
  }
  const componentName = match[1];

  // Write the content to a new TypeScript file
  const newFilePath = path.join(outputDirectory, `${componentName}.ts`);
  fs.writeFileSync(newFilePath, content);
}

function traverseDirectory(directoryPath, outputDirectory) {
  fs.readdirSync(directoryPath).forEach((file) => {
    const filePath = path.join(directoryPath, file);

    if (fs.statSync(filePath).isDirectory()) {
      traverseDirectory(filePath, outputDirectory);
    } else if (file.endsWith('.tsx') && file !== 'index.tsx') {
      processFile(filePath, outputDirectory);
    }
  });
}

// Define the directory to traverse and the output directory
const inputDirectory =
  '/Users/meenu/Documents/projects/new-gluestack/gluestack-ui/packages/themed/src/components';
const outputDirectory =
  '/Users/meenu/Documents/projects/new-gluestack/gluestack-ui/packages/themed/src/gluestack-ui-components';

// Create the output directory if it doesn't exist
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory, { recursive: true });
}

// Call the function to traverse the directory
traverseDirectory(inputDirectory, outputDirectory);
