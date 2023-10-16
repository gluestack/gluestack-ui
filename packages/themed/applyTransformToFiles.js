const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const directoryPath =
  '/Users/meenu/Documents/projects/new-gluestack/gluestack-ui/packages/themed/src/components'; // Change this to your desired directory

function processFile(filePath) {
  if (path.basename(filePath) !== 'index.tsx') {
    const cmd = `npx jscodeshift -t customTransform.js ${filePath}`;
    execSync(cmd, { stdio: 'inherit' });
  }
}

function traverseDirectory(currentPath) {
  const files = fs.readdirSync(currentPath);

  files.forEach((file) => {
    const filePath = path.join(currentPath, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      traverseDirectory(filePath);
    } else if (filePath.endsWith('.tsx')) {
      processFile(filePath);
    }
  });
}

traverseDirectory(directoryPath);
