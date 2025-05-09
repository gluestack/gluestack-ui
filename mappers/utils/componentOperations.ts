import path from "path";
import fs from "fs";
import * as fileOps from "./fileOperations";

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
  const filesToCopy = [
    "index.tsx",
    "index.web.tsx",
    "styles.tsx",
    "config.ts",
    "script.ts",
  ];
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

  console.log(`✅ Component ${component} processed`);
};

/**
 * Delete component docs when a component is deleted
 * @param component Component name
 */
export const deleteComponentDocs = (component: string) => {
  const docsComponentPath = path.resolve("apps/docs/components", component);
  const docsUiPath = path.resolve("apps/docs/app/ui/docs", component);

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

export const processNonComponentFile = (srcPath: string) => {
  const packagesDir = path.resolve("packages/utils");
  const docsDir = path.resolve("apps/docs/utils");

  try {
    fileOps.copyDir(packagesDir, docsDir);
  } catch (error) {
    console.error(`error in copying docs components:${srcPath}`, error);
  }
};

export const copyDocsComponents = (filePath: string) => {
  const packagesDir = path.resolve("packages/src/docs-components");
  const docsDir = path.resolve("apps/docs/components/docs-components");

  try {
    fileOps.copyDir(packagesDir, docsDir);
  } catch (error) {
    console.error(`error in copying docs components:${filePath}`, error);
  }
};
