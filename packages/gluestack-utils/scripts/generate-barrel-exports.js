const fs = require('fs');
const path = require('path');

const modules = [
  'hooks',
  'aria', 
  'common',
  'nativewind-utils'
];

// Create barrel files for each module
modules.forEach(module => {
  const srcPath = path.join(__dirname, '..', 'src', module);
  const barrelPath = path.join(__dirname, '..', `${module}.ts`);
  
  // Check if the source directory exists
  if (fs.existsSync(srcPath)) {
    // Create barrel file pointing to source
    const content = `export * from './lib/esm/${module}';`;
    fs.writeFileSync(barrelPath, content);
  }
});
