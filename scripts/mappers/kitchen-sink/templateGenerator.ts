import path from "path";
import * as fileOps from "../utils/fileOperations";
import { componentPreviewerTemplate, pageContentTemplate, codePreviewerTemplate } from "./templates";
import { CodePreviewer } from '@/docs-components/code-previewer';

interface ImportMap {
  [key: string]: string[];
}

export const generateCodePreviewer = (
  exampleName: string,
  component: string,
  importMap: ImportMap
) => {
  const sourcePath = path.resolve("packages/components/ui");
  const examplePath = path.join(sourcePath, component, "examples", exampleName);
  const codePath = path.join(examplePath, "template.handlebars");
  const argsPath = path.join(examplePath, "meta.json");
  try {
    if (!fileOps.pathExists(codePath) || !fileOps.pathExists(argsPath)) {
      console.error(`Missing files for example ${exampleName} in ${component}`);
      return `<!-- Failed to load CodePreviewer for Example:${exampleName} -->`;
    }
    const code = fileOps.readTextFile(codePath);
    const meta = fileOps.readJsonFile(argsPath);
    const argTypes = JSON.stringify(meta.argTypes || {}, null, 2);
    const reactLiveKeys = meta.reactLive ? Object.keys(meta.reactLive) : [];
    const reactLive = `{ ${reactLiveKeys.join(", ")} }`;
    // Add reactLive imports to importMap
    reactLiveKeys.forEach((key) => {
      const value = meta.reactLive[key];
      if (!importMap[value]) {
        importMap[value] = [];
      }
      if (!importMap[value].includes(key)) {
        importMap[value].push(key);
      }
    });

    // If this is the basic example, copy it to the docs components folder
    if (exampleName === "basic") {
      const websitePath = path.resolve(
        "apps/kitchen-sink/components/page-components/all-components"
      );
      const destPath = path.join(websitePath, component);
      const destFilePath = path.join(destPath, "index.tsx");

      // Create destination directory if it doesn't exist
      fileOps.ensureDirectoryExists(destPath);

      // Generate imports from meta.reactLive
      const imports = reactLiveKeys
        .map((key) => {
          const value = meta.reactLive[key];
          return `import { ${key} } from '${value}';`;
        })
        .join("\n");

      // Generate the component file content with ComponentPreviewer template
      const fileContent = componentPreviewerTemplate(
        imports,
        code.trim(),
        argTypes,
        reactLive
      );

      // Write the file
      fileOps.writeTextFile(destFilePath, fileContent);
    }

    return codePreviewerTemplate(code.trim(), argTypes, reactLive);
  } catch (error) {
    console.error(
      `:x: Error building CodePreviewer for Example:${exampleName} in ${component}:`,
      error
    );
    return `<!-- Failed to load CodePreviewer for Example:${exampleName} -->`;
  }
};

export const generatePageContent = (): string => {
  return pageContentTemplate;
};

export const processFileContent = (content: string): string => {
  const fileContentRegex = /%%--\s*File:\s*([^%]+)\s*--%%/g;
  return content.replace(fileContentRegex, (_, filePath) => {
    try {
      const fileContent = fileOps.readTextFile(filePath.trim());
      return fileContent;
    } catch (error) {
      console.error(`Failed to read file: ${filePath}`, error);
      return `<!-- Failed to load file: ${filePath} -->`;
    }
  });
};

export const processFileForExamples = (
  filePath: string,
  component: string
): boolean => {
  const codePreviewerRegex = /\/\/\/\s*\{Example:([^}]+)\}\s*\/\/\//g;
  const importMap: ImportMap = {
    "@/components/custom/code-previewer": ["CodePreviewer"],
  };
  // Read file content
  const content = fileOps.readTextFile(filePath);

  // Extract existing imports
  const contentWithoutImports = content.trim();

  // Replace example markers and file content markers
  const newContent = contentWithoutImports.replace(
    codePreviewerRegex,
    (_, exampleName) => {
      return generateCodePreviewer(exampleName.trim(), component, importMap);
    }
  );

  // Process file content markers
  const processedContent = processFileContent(newContent);

  // Generate import statements in one go
  const importContent = Object.entries(importMap)
    .map(([path, imports]) => {
      return `import { ${imports.join(", ")} } from '${path}';`;
    })
    .join("\n");

  const totalContent = `${importContent}\n\n${processedContent}`;

  if (content !== totalContent) {
    fileOps.writeTextFile(filePath, totalContent);
    return true;
  }
  return false;
};

export const copyFileContent = (sourcePath: string, destinationPath: string) => {
  try {
    // Read the source file
    const content = fileOps.readTextFile(sourcePath);
    
    // Ensure the destination directory exists
    const destDir = path.dirname(destinationPath);
    fileOps.ensureDirectoryExists(destDir);
    
    // Write to the destination file
    fileOps.writeTextFile(destinationPath, content);
    
    return true;
  } catch (error) {
    console.error(`Error copying file content from ${sourcePath} to ${destinationPath}:`, error);
    return false;
  }
};

export const copyProcessedAnnotations = (
  sourcePath: string,
  destinationPath: string,
  component: string
): boolean => {
  try {
    // Read source file content
    const sourceContent = fileOps.readTextFile(sourcePath);
    
    const codePreviewerRegex = /\/\/\/\s*\{Example:([^}]+)\}\s*\/\/\//g;
    const importMap: ImportMap = {
      "@/components/custom/code-previewer": ["CodePreviewer"],
    };

    // Only collect the processed annotations
    let processedContent = '';
    let match;
    
    // Process each annotation match
    while ((match = codePreviewerRegex.exec(sourceContent)) !== null) {
      const exampleName = match[1].trim();
      const processedAnnotation = generateCodePreviewer(exampleName, component, importMap);
      processedContent += processedAnnotation + '\n\n';
    }

    // If we found and processed any annotations
    if (processedContent) {
      // Generate import statements
      const importContent = Object.entries(importMap)
        .map(([importPath, imports]) => {
          return `import { ${imports.join(", ")} } from '${importPath}';`;
        })
        .join("\n");

      // Wrap the processed content in a component
      const wrappedContent = `
export default function ComponentExamples() {
  return (
    <div>
      ${processedContent.trim()}
    </div>
  );
}`;

      // Combine imports with wrapped content
      const finalContent = `${importContent}\n\n${wrappedContent}`;
      
      // Ensure destination directory exists and write file
      const destDir = path.dirname(destinationPath);
      fileOps.ensureDirectoryExists(destDir);
      fileOps.writeTextFile(destinationPath, finalContent);
      
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing annotations from ${sourcePath} to ${destinationPath}:`, error);
    return false;
  }
};