import path from "path";
import fs from "fs";
import * as fileOps from "./fileOperations";

/**
 * Get paths for component directories
 * @param component Component name
 * @returns Object containing relevant paths
 */
export const getComponentPaths = (component: string) => {
  const componentsDir = path.resolve("packages/src/components/ui");
  const docsDir = path.resolve("apps/docs/components/ui");

  return {
    componentDir: path.join(componentsDir, component),
    destDir: path.join(docsDir, component),
    creatorDir: path.join(componentsDir, component, "creator"),
    destCreatorDir: path.join(docsDir, component, "creator"),
    ariaDir: path.join(componentsDir, component, "aria"),
    destAriaDir: path.join(docsDir, component, "aria"),
  };
};

/**
 * Copy a component's files to the docs directory
 * @param component Component name
 */
export const copyComponent = (component: string) => {
  const paths = getComponentPaths(component);
  
  // Check if component exists
  if (!fileOps.pathExists(paths.componentDir)) {
    console.warn(`Component not found: ${component}`);
    return;
  }

  // Create destination dir
  fileOps.ensureDirectoryExists(paths.destDir);

  // Copy specific files
  const filesToCopy = ["index.tsx", "index.web.tsx","config.ts","script.ts"];
  for (const file of filesToCopy) {
    const srcFile = path.join(paths.componentDir, file);
    if (fileOps.pathExists(srcFile)) {
      fileOps.writeTextFile(
        path.join(paths.destDir, file),
        fileOps.readTextFile(srcFile)
      );
      console.log(`✓ Copied ${file} for ${component}`);
    }
  }

  // Copy creator dir if exists
  if (fileOps.pathExists(paths.creatorDir)) {
    fileOps.copyDir(paths.creatorDir, paths.destCreatorDir);
    console.log(`✓ Copied creator directory for ${component}`);
  }

  // Copy aria dir if exists
  if (fileOps.pathExists(paths.ariaDir)) {
    fileOps.copyDir(paths.ariaDir, paths.destAriaDir);
    console.log(`✓ Copied aria directory for ${component}`);
  }

  console.log(`✅ Component ${component} processed`);
};

/**
 * Delete component docs when a component is deleted
 * @param component Component name
 */
export const deleteComponentDocs = (component: string) => {
  const docsComponentPath = path.resolve("apps/docs/components", component);
  const docsUiPath = path.resolve(
    "apps/docs/app/ui/docs",
    component
  );

  try {
    // Delete from docs/components
    if (fileOps.pathExists(docsComponentPath)) {
      fileOps.deletePath(docsComponentPath);
      console.log(`✓ Deleted component docs from: ${docsComponentPath}`);
    }

    // Delete from docs/app/ui/docs
    if (fileOps.pathExists(docsUiPath)) {
      fileOps.deletePath(docsUiPath);
      console.log(`✓ Deleted component UI docs from: ${docsUiPath}`);
    }

    console.log(`✅ Docs for ${component} deleted successfully`);
  } catch (error) {
    console.error(`Error deleting docs for ${component}:`, error);
  }
};

/**
 * Process non-component files like utilities, aria helpers, etc.
 * @param srcPath Source file path within packages/src
 */
export const processNonComponentFile = (srcPath: string) => {
  const packagesDir = path.resolve("packages");
  const docsDir = path.resolve("apps/docs");

  // Normalize path and make relative to packages/src
  const normalizedPath = path.normalize(srcPath);
  const relativePath = path.relative(packagesDir, normalizedPath);

  // Skip processing if not in packages/src
  if (!fileOps.pathExists(normalizedPath) || relativePath.startsWith("..")) {
    console.warn(`File not in packages/src: ${normalizedPath}`);
    return;
  }

  // Skip if it's in the components directory
  if (relativePath.startsWith("components")) {
    return;
  }
  // Skip if it's a package file or config file
  const excludedFiles = ["tsconfig.json", "package.json", "package-lock.json"];
  if (excludedFiles.includes(path.basename(srcPath))) {
    return;
  }


  // Check if it's a directory
  const isDirectory = fs.statSync(normalizedPath).isDirectory();

  // Get destination path directly in the docs directory
  const destPath = path.join(docsDir, relativePath);

  // Create parent directory if it doesn't exist
  const destParentDir = isDirectory ? destPath : path.dirname(destPath);
  fileOps.ensureDirectoryExists(destParentDir);

  if (isDirectory) {
    // Copy entire directory
    fileOps.copyDir(normalizedPath, destPath);
    console.log(`✓ Copied directory: ${relativePath} directly to docs`);
  } else {
    // Copy single file
    fileOps.writeTextFile(destPath, fileOps.readTextFile(normalizedPath));
    console.log(`✓ Copied file: ${relativePath} directly to docs`);
  }
};

/**
 * Process utils directory specifically
 */
export const processUtilsDirectory = () => {
  try {
    const packagesDir = path.resolve("packages");
    const utilsDir = path.join(packagesDir, "utils");

    if (fileOps.pathExists(utilsDir)) {
      processNonComponentFile(utilsDir);
      console.log("✅ Utils directory processed successfully");
    } else {
      console.warn("⚠ Utils directory not found in packages");
    }
  } catch (error) {
    console.error("Error processing utils directory:", error);
  }
}; 