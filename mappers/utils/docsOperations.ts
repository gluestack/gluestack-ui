import path from "path";
import * as fileOps from "./fileOperations";
import * as templateGen from "./templateGenerator";


// Copy documentation files for a component

export const copyDocs = (component: string) => {
  const sourcePath = path.resolve("packages/src/components/ui");
  const docsPath = path.resolve("apps/docs/app/ui/docs/components");

  try {
    const componentDocsPath = path.join(sourcePath, component, "docs");
    console.log(componentDocsPath);
    if (!fileOps.pathExists(componentDocsPath)) {
      console.log(`No doc files found for ${component}`);
      return;
    }
    const docFiles = fileOps.getFilesInDirectory(componentDocsPath);
    if (docFiles.length === 0) {
      console.log(`No doc files found for ${component}`);
      return;
    }

    const destPath = path.join(docsPath,component);
    fileOps.ensureDirectoryExists(destPath);
    for (const file of docFiles) {
      const srcFilePath = path.join(componentDocsPath, file);
      const destFilePath = path.join(destPath, file);
      fileOps.writeTextFile(destFilePath, fileOps.readTextFile(srcFilePath));
    }
    const copiedFiles = docFiles.map((file) => ({
      path: path.join(destPath, file),
      name: file,
    }));
    for (const fileObj of copiedFiles) {
      const wasModified = templateGen.processFileForExamples(fileObj.path, component);
      if (wasModified) {
        console.log(`✓ Processed examples in ${fileObj.name}`);
      }

   
      const dirPath = path.dirname(fileObj.path);
      const newFilePath = path.join(dirPath, "page.tsx");
      fileOps.writeTextFile(newFilePath, templateGen.generatePageContent());
    }
  } catch (error) {
    console.error(`Error processing docs for ${component}:`, error);
  }
}; 