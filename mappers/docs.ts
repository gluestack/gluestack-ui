import fs from 'fs';
import path from 'path';

const copyDir = (src: string, dest: string) => {
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // Read all files and directories in the source
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      // Recursively copy subdirectories
      copyDir(srcPath, destPath);
    } else {
      // Copy files
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

const copyFileIfExists = (src: string, dest: string): boolean => {
  if (fs.existsSync(src)) {
    // Ensure directory exists
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    fs.copyFileSync(src, dest);
    return true;
  }
  return false;
};


const processComponents = (componentsToProcess: string[] | 'all') => {
  const componentsDir = path.resolve('packages/src/components');
  const docsDir = path.resolve('apps/docs/components');
  
  // Get all components if 'all' is specified
  let componentsList: string[] = [];
  if (componentsToProcess === 'all') {
    componentsList = fs.readdirSync(componentsDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
  } else {
    componentsList = componentsToProcess;
  }
  
  for (const component of componentsList) {
    try {
      copyComponentFiles(componentsDir, docsDir, component);
    } catch (error) {
      console.error(`Error processing component ${component}:`, error);
    }
  }
};


const copyComponentFiles = (componentsDir: string, docsDir: string, component: string) => {
  // Source paths
  const componentDir = path.join(componentsDir, component);
  
  // Skip if component directory doesn't exist
  if (!fs.existsSync(componentDir)) {
    console.warn(`Component directory not found: ${componentDir}`);
    return;
  }
  
  const creatorDir = path.join(componentDir, 'creator');
  
  // Files to copy - base filenames, will check for their existence
  const filesToCopy = ['index.tsx', 'index.web.tsx'];
  
  // Destination paths
  const destDir = path.join(docsDir, component);
  const destCreatorDir = path.join(destDir, 'creator');
  
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  // Copy the creator directory
  if (fs.existsSync(creatorDir)) {
    copyDir(creatorDir, destCreatorDir);
    console.log(`✓ Copied creator directory for ${component}`);
  } else {
    console.warn(`⚠ Creator directory not found for ${component}`);
  }
  
  // Copy individual files
  for (const file of filesToCopy) {
    const srcFile = path.join(componentDir, file);
    const destFile = path.join(destDir, file);
    
    if (copyFileIfExists(srcFile, destFile)) {
      console.log(`✓ Copied ${file} for ${component}`);
    } else {
      console.warn(`⚠ ${file} not found for ${component}`);
    }
  }
  
  console.log(`✅ Component ${component} processed successfully`);
};

/**
 * Handles copying non-component files such as utilities, aria helpers, etc.
 * @param srcPath Source file path within packages/src
 */
const processNonComponentFile = (srcPath: string) => {
  const packagesDir = path.resolve('packages/src');
  const docsDir = path.resolve('apps/docs');
  
  // Normalize path and make relative to packages/src
  const normalizedPath = path.normalize(srcPath);
  const relativePath = path.relative(packagesDir, normalizedPath);
  
  // Skip processing if not in packages/src
  if (!fs.existsSync(normalizedPath) || relativePath.startsWith('..')) {
    console.warn(`File not in packages/src: ${normalizedPath}`);
    return;
  }
  
  // Skip if it's in the components directory
  if (relativePath.startsWith('components')) {
    return;
  }
  
  // Check if it's a directory
  const isDirectory = fs.statSync(normalizedPath).isDirectory();
  
  // Get destination path directly in the docs directory
  const destPath = path.join(docsDir, relativePath);
  
  // Create parent directory if it doesn't exist
  const destParentDir = isDirectory ? destPath : path.dirname(destPath);
  if (!fs.existsSync(destParentDir)) {
    fs.mkdirSync(destParentDir, { recursive: true });
  }
  
  if (isDirectory) {
    // Copy entire directory
    copyDir(normalizedPath, destPath);
    console.log(`✓ Copied directory: ${relativePath} directly to docs`);
  } else {
    // Copy single file
    fs.copyFileSync(normalizedPath, destPath);
    console.log(`✓ Copied file: ${relativePath} directly to docs`);
  }
};

export default {
  component: function(component: string) {
    // Process a single component
    processComponents([component]);
  },
  
  
  nonComponent: function(filePath: string) {
    try {
      // Process non-component files like utilities, aria helpers, etc.
      processNonComponentFile(filePath);
    } catch (error) {
      console.error(`Error processing non-component file ${filePath}:`, error);
    }
  },
  
  
  // Process utils directory specifically
  utils: function() {
    try {
      const packagesDir = path.resolve('packages/src');
      const utilsDir = path.join(packagesDir, 'utils');
      
      if (fs.existsSync(utilsDir)) {
        processNonComponentFile(utilsDir);
        console.log('✅ Utils directory processed successfully');
      } else {
        console.warn('⚠ Utils directory not found in packages/src');
      }
    } catch (error) {
      console.error('Error processing utils directory:', error);
    }
  }
};