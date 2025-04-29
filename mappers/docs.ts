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
  
  // Check if it's a directory
  const isDirectory = fs.statSync(normalizedPath).isDirectory();
  
  // Get destination path
  const destPath = path.join(docsDir, relativePath);
  
  // Create parent directory if it doesn't exist
  const destParentDir = isDirectory ? destPath : path.dirname(destPath);
  if (!fs.existsSync(destParentDir)) {
    fs.mkdirSync(destParentDir, { recursive: true });
  }
  
  if (isDirectory) {
    // Copy entire directory
    copyDir(normalizedPath, destPath);
    console.log(`✓ Copied directory: ${relativePath} to docs`);
  } else {
    // Copy single file
    fs.copyFileSync(normalizedPath, destPath);
    console.log(`✓ Copied file: ${relativePath} to docs`);
  }
};

export default {
  component: function(component: string) {
    // Process a single component
    processComponents([component]);
  },
  
  // Process multiple components at once
  components: function(components: string[]) {
    processComponents(components);
  },
  
  // Process all components
  allComponents: function() {
    processComponents('all');
  },
  
  nonComponent: function(filePath: string) {
    try {
      // Process non-component files like utilities, aria helpers, etc.
      processNonComponentFile(filePath);
    } catch (error) {
      console.error(`Error processing non-component file ${filePath}:`, error);
    }
  },
  
  // Process all non-component directories like react-native-aria, nativewind
  allNonComponents: function() {
    try {
      const packagesDir = path.resolve('packages/src');
      
      // Get all directories in packages/src that are not 'components'
      const nonComponentDirs = fs.readdirSync(packagesDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory() && dirent.name !== 'components')
        .map(dirent => path.join(packagesDir, dirent.name));
      
      // Process each non-component directory
      for (const dirPath of nonComponentDirs) {
        processNonComponentFile(dirPath);
      }
      
      console.log('✅ All non-component directories processed successfully');
    } catch (error) {
      console.error('Error processing all non-component directories:', error);
    }
  }
};