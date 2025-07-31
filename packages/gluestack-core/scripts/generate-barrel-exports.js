const fs = require('fs');
const path = require('path');

// Dynamically get components from src directory
const getComponents = () => {
  const srcPath = path.join(__dirname, '..', 'src');
  if (!fs.existsSync(srcPath)) {
    return [];
  }

  return fs
    .readdirSync(srcPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
};

// Dynamically get subdirectories for a component
const getSubdirs = (componentPath) => {
  if (!fs.existsSync(componentPath)) {
    return [];
  }

  return fs
    .readdirSync(componentPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
};

const components = getComponents();

// Create barrel files for each component and subdir
components.forEach((component) => {
  const componentSrcPath = path.join(__dirname, '..', 'src', component);
  const subdirs = getSubdirs(componentSrcPath);

  subdirs.forEach((subdir) => {
    const srcPath = path.join(componentSrcPath, subdir);
    const barrelPath = path.join(__dirname, '..', component, `${subdir}.ts`);

    // Check if the source directory exists
    if (fs.existsSync(srcPath)) {
      // Ensure the component directory exists
      const componentDir = path.dirname(barrelPath);
      if (!fs.existsSync(componentDir)) {
        fs.mkdirSync(componentDir, { recursive: true });
      }

      // Create barrel file
      const content = `export * from '../lib/esm/${component}/${subdir}';`;
      fs.writeFileSync(barrelPath, content);
    }
  });
});
