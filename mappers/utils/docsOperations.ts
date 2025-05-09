import path from "path";
import * as fileOps from "./fileOperations";
import * as templateGen from "./templateGenerator";


export const copyComponentsDocs = (component: string) => {
  const sourcePath = path.resolve("packages/src/components/ui");
  const docsPath = path.resolve("apps/docs/app/ui/docs/components");

  try {
    // Find docs files in the component folder
    const componentDocsPath = path.join(sourcePath, component, "docs");
    if (!fileOps.pathExists(componentDocsPath)) {
      console.log(`No docs found for ${component}`);
      return;
    }

    // Get list of docs files
    const docFiles = fileOps.getFilesInDirectory(componentDocsPath);
    if (docFiles.length === 0) {
      console.log(`No doc files found for ${component}`);
      return;
    }

    // Create destination folder (lowercase component name)
    const destPath = path.join(docsPath, component);
    fileOps.ensureDirectoryExists(destPath);

    // Copy docs files
    for (const file of docFiles) {
      const srcFilePath = path.join(componentDocsPath, file);
      const destFilePath = path.join(destPath, file);
      fileOps.writeTextFile(destFilePath, fileOps.readTextFile(srcFilePath));
    }

    // Process code examples in copied files
    const copiedFiles = docFiles.map((file) => ({
      path: path.join(destPath, file),
      name: file,
    }));

    // Process each file for example markers
    for (const fileObj of copiedFiles) {
      const wasModified = templateGen.processFileForExamples(fileObj.path, component);
      if (wasModified) {
        console.log(`✓ Processed examples in ${fileObj.name}`);
      }

      // Create page.tsx file
      const dirPath = path.dirname(fileObj.path);
      const newFilePath = path.join(dirPath, "page.tsx");
      fileOps.writeTextFile(newFilePath, templateGen.generatePageContent());
    }

  } catch (error) {
    console.error(`Error processing docs for ${component}:`, error);
  }
}; 

export const copyNonComponentDocs = (filePath: string) => {
  const sourcePath = path.resolve("packages/src/docs");
  const docsPath = path.resolve("apps/docs/app/ui/docs");
console.log("------------------------------------",sourcePath, docsPath)
  try {
    fileOps.copyDir(sourcePath, docsPath);
  } catch (error) {
    console.error(`Error copying docs for ${filePath}:`, error);
  }
};

