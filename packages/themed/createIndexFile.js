const fs = require('fs');
const path = require('path');

const directoryPath =
  '/Users/meenu/Documents/projects/new-gluestack/gluestack-ui/packages/themed/src/gluestack-ui-theme'; // Replace with your actual directory path

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  const exports = {};

  files.forEach((file) => {
    if (file !== 'index.ts' && file.endsWith('.ts')) {
      const fileName = path.parse(file).name;
      exports[fileName] = `require('./${file}')`;
    }
  });

  const indexContent = `
export default {
${Object.entries(exports)
  .map(([key, value]) => `  ${key}:${value},`)
  .join('\n')}
}
`;

  fs.writeFile(path.join(directoryPath, 'index.ts'), indexContent, (err) => {
    if (err) {
      console.error('Error writing index.ts:', err);
      return;
    }
  });
});
