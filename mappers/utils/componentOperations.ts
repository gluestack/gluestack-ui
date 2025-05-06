import path from "path";
import fs from "fs";
import * as fileOps from "./fileOperations";

// Get paths for component directories from the source and destination directories
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
    }
  }
  // Copy creator dir if exists
  if (fileOps.pathExists(paths.creatorDir)) {
    fileOps.copyDir(paths.creatorDir, paths.destCreatorDir);
  }
  // Copy aria dir if exists
  if (fileOps.pathExists(paths.ariaDir)) {
    fileOps.copyDir(paths.ariaDir, paths.destAriaDir);
  }
};


export const deleteComponentDocs = (component: string) => {
  const docsComponentPath = path.resolve("apps/docs/components/ui", component);
  const docsUiPath = path.resolve(
    "apps/docs/app/ui/docs/components",
    component
  );

  try {
    if (fileOps.pathExists(docsComponentPath)) {
      fileOps.deletePath(docsComponentPath);
      console.log(`✓ Deleted component docs from: ${docsComponentPath}`);
    }

    if (fileOps.pathExists(docsUiPath)) {
      fileOps.deletePath(docsUiPath);
      console.log(`✓ Deleted component UI docs from: ${docsUiPath}`);
    }
  } catch (error) {
    console.error(`Error deleting docs for ${component}:`, error);
  }
};


export const processNonComponentFile = (srcPath: string) => {
  const packagesDir = path.resolve("packages");
  const docsDir = path.resolve("apps/docs");

  const normalizedPath = path.normalize(srcPath);
  const relativePath = path.relative(packagesDir, normalizedPath);

  if (!fileOps.pathExists(normalizedPath) || relativePath.startsWith("..")) {
    console.warn(`File not in packages/src: ${normalizedPath}`);
    return;
  }

  if (relativePath.startsWith("components")) {
    return;
  }

  const isDirectory = fs.statSync(normalizedPath).isDirectory();

  const destPath = path.join(docsDir, relativePath);

  const destParentDir = isDirectory ? destPath : path.dirname(destPath);
  fileOps.ensureDirectoryExists(destParentDir);

  if (isDirectory) {
    fileOps.copyDir(normalizedPath, destPath);
  } else {
    fileOps.writeTextFile(destPath, fileOps.readTextFile(normalizedPath));
  }
};

export const processUtilsDirectory = () => {
  try {
    const packagesDir = path.resolve("packages");
    const utilsDir = path.join(packagesDir, "utils");

    if (fileOps.pathExists(utilsDir)) {
      processNonComponentFile(utilsDir);
    } else {
      console.warn("⚠ Utils directory not found in packages");
    }
  } catch (error) {
    console.error("Error processing utils directory:", error);
  }
}; 