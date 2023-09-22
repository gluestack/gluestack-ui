const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Remove lines starting with import
  content = content.replace(/^import\s+.*?['";]\n/gm, '');

  // Add the new import statement
  content = `import { createStyle } from "@gluestack-ui/themed";\n${content}`;

  // Write the modified content back to the file
  fs.writeFileSync(filePath, content);
}

function traverseDirectory(directoryPath) {
  fs.readdirSync(directoryPath).forEach((file) => {
    const filePath = path.join(directoryPath, file);

    if (fs.statSync(filePath).isDirectory()) {
      traverseDirectory(filePath);
    } else if (file.endsWith('.ts')) {
      processFile(filePath);
    }
  });
}

// Define the directory to traverse
const inputDirectory =
  '/Users/meenu/Documents/projects/new-gluestack/gluestack-ui/packages/themed/src/gluestack-ui-components';

// Call the function to traverse the directory
traverseDirectory(inputDirectory);
