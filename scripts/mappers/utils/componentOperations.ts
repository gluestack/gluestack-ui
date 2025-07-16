import path from 'path';
import fs from 'fs';
import * as fileOps from './fileOperations';

export interface MapperConfig {
  sourcePath: string;
  destPath: string;
  ignoreFiles?: string[];
}

export const isValidComponent = (component: string): boolean => {
  // Skip certain files that shouldn't be treated as components
  const skipFiles = ['index.ts', 'index.js', 'package.json', '.DS_Store'];
  return !skipFiles.includes(component);
};

export const copyComponent = (component: string, config: MapperConfig) => {
  if (!isValidComponent(component)) {
    return; // Skip silently for non-component files
  }

  const componentPath = path.join(config.sourcePath, component);
  const destComponentPath = path.join(config.destPath, component);

  try {
    // Check if component path exists
    if (!fs.existsSync(componentPath)) {
      return; // Skip silently if component doesn't exist
    }

    const ignoreFiles = config.ignoreFiles || ['docs', 'examples'];
    fileOps.copyDir(componentPath, destComponentPath, ignoreFiles);
    console.log(`✅ Copied component: ${component}`);
  } catch (error) {
    console.error(`❌ Error copying component ${component}:`, error);
  }
};

// Track last copy times for special files to prevent infinite loops
const specialFileCopyTimes = new Map<string, number>();
const SPECIAL_FILE_DEBOUNCE = 10000; // 10 seconds for special files

export const copySpecialFile = (sourcePath: string, destPath: string) => {
  const fileKey = `${sourcePath}->${destPath}`;
  const now = Date.now();

  // Check if this file was copied recently
  if (specialFileCopyTimes.has(fileKey)) {
    const lastCopyTime = specialFileCopyTimes.get(fileKey)!;
    if (now - lastCopyTime < SPECIAL_FILE_DEBOUNCE) {
      return; // Skip if copied recently
    }
  }

  try {
    if (fs.existsSync(sourcePath)) {
      fileOps.copyFile(sourcePath, destPath);
      console.log(`✅ Copied special file: ${path.basename(sourcePath)}`);
      specialFileCopyTimes.set(fileKey, now);
    }
  } catch (error) {
    console.error(`❌ Error copying special file ${sourcePath}:`, error);
  }
};

export const processComponentChange = (
  component: string,
  event: string,
  config: MapperConfig
) => {
  if (!isValidComponent(component)) {
    return; // Skip silently for non-component files
  }

  console.log(`📝 Processing ${event} event for component: ${component}`);

  if (event === 'removed') {
    // Handle component deletion
    const destComponentPath = path.join(config.destPath, component);
    if (fs.existsSync(destComponentPath)) {
      fileOps.deletePath(destComponentPath);
      console.log(`🗑️ Removed component: ${component}`);
    }
  } else {
    // Handle component addition or change
    copyComponent(component, config);
  }
};
