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
    // First read the source file content
    const sourceContent = fileOps.readTextFile(filePath);
    const relativePath = path.relative(sourcePath, filePath);
    const destFilePath = path.join(websitePath, relativePath);
    const mdxPath = destFilePath.replace("index.mdx", "");

    // Ensure the destination directory exists
    fileOps.ensureDirectoryExists(path.dirname(destFilePath));

    // Process file content markers and frontmatter if it's an MDX file
    if (filePath.endsWith(".mdx")) {
      // First process any file content markers
      const processedContent = templateGen.processFileContent(sourceContent);
      // Then handle frontmatter - this will also create the layout.tsx
      const contentWithoutFrontmatter = templateGen.replaceFrontMatter(
        processedContent,
        mdxPath
      );
      // Write the processed content without frontmatter
      fileOps.writeTextFile(destFilePath, contentWithoutFrontmatter);
    } else {
      // For non-MDX files, just copy them as is
      fileOps.writeTextFile(destFilePath, sourceContent);
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
