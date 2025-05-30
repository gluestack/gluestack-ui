import path from "path";
import * as fileOps from "../utils/fileOperations";
import * as templateGen from "./templateGenerator";

export const copyComponentsDocs = (component: string) => {
  const sourcePath = path.resolve("packages/components/ui");
  const websitePath = path.resolve("apps/website/app/ui/docs/components");

  try {
    // Find docs files in the component folder
    const componentDocsPath = path.join(sourcePath, component, "docs");
    if (!fileOps.pathExists(componentDocsPath)) {
      console.log(`No docs found for ${component}  ${componentDocsPath}`);
      return;
    }

    // Get list of docs files
    const docFiles = fileOps.getFilesInDirectory(componentDocsPath);
    if (docFiles.length === 0) {
      console.log(`No doc files found for ${component}`);
      return;
    }
    // Create destination folder (lowercase component name)
    const destPath = path.join(websitePath, component);
    fileOps.ensureDirectoryExists(destPath);
    // Copy docs files
    fileOps.copyDir(componentDocsPath, destPath);
    // Process code examples in copied files
    templateGen.processFileForExamples(
      path.join(destPath, "index.mdx"),
      component,
      destPath
    );
    // Create page.tsx file for routing
    fileOps.writeTextFile(
      path.join(destPath, "page.tsx"),
      templateGen.generatePageContent()
    );
  } catch (error) {
    console.error(`Error processing docs for ${component}:`, error);
  }
};

export const copyHooksDocs = (hook: string) => {
  const sourcePath = path.resolve("packages/components/ui/utils");
  const websitePath = path.resolve("apps/website/app/ui/docs/hooks");
  const hookPath = path.join(sourcePath, hook, "docs");
  const destPath = path.join(websitePath, hook);
  fileOps.copyDir(hookPath, destPath);
  templateGen.processFileForExamples(
    path.join(destPath, "index.mdx"),
    hook,
    destPath
  );
  fileOps.writeTextFile(
    path.join(destPath, "page.tsx"),
    templateGen.generatePageContent()
  );
};

export const copyNonComponentDocs = (filePath: string) => {
  const sourcePath = path.resolve("packages/docs");
  const websitePath = path.resolve("apps/website/app/ui/docs");
  try {
    // Copy the docs content
    fileOps.copyDir(sourcePath, websitePath);
    const relativePath = path.relative(sourcePath, filePath);
    const destFilePath = path.join(websitePath, relativePath);
    // Process file content markers if it's an MDX file
    if (filePath.endsWith(".mdx")) {
      const content = fileOps.readTextFile(destFilePath);
      const processedContent = templateGen.processFileContent(content);
      const mdxPath = destFilePath.replace("index.mdx", "");
      const layoutContent = templateGen.replaceFrontMatter(
        processedContent,
        mdxPath
      );
      fileOps.writeTextFile(destFilePath, layoutContent);
    }

    // Create page.tsx in the name-specific directory
    fileOps.writeTextFile(
      path.join(websitePath, relativePath.replace("index.mdx", "page.tsx")),
      templateGen.generatePageContent()
    );
  } catch (error) {
    console.error(`Error copying docs for ${filePath}:`, error);
  }
};