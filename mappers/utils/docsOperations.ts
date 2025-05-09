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
      templateGen.processFileForExamples(fileObj.path, component);
     

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
  try {
    // Extract the name from the filePath (e.g., "packages/src/docs/name/index.mdx" -> "name")
    const name = path.basename(path.dirname(filePath));
    
    // Create the destination directory path
    const destDirPath = path.join(docsPath, name);
    fileOps.ensureDirectoryExists(destDirPath);
    
    // Copy the docs content
    fileOps.copyDir(sourcePath, docsPath);
    console.log(filePath);
    
    // Create page.tsx in the name-specific directory
    fileOps.writeTextFile(path.join(destDirPath, "page.tsx"), templateGen.generatePageContent());
  } catch (error) {
    console.error(`Error copying docs for ${filePath}:`, error);
  }
};

