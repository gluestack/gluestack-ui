import path from "path";
import * as fileOps from "../utils/fileOperations";
import { componentPreviewerTemplate, pageContentTemplate, codePreviewerTemplate } from "./templates";
import { CodePreviewerRegex } from "../utils/regex";
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
    const title = meta.title || "";
    const description = meta.description || "";
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
        "apps/website/components/page-components/all-components"
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
        reactLive,
      );

      // Write the file
      fileOps.writeTextFile(destFilePath, fileContent);
    }

    return codePreviewerTemplate(code.trim(), argTypes, reactLive, title, description);
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
  const importMap: ImportMap = {
    "@/components/custom/code-previewer": ["CodePreviewer"],
  };
  // Read file content
  const content = fileOps.readTextFile(filePath);

  // Extract existing imports
  const contentWithoutImports = content.trim();

  // Replace example markers and file content markers
  const newContent = contentWithoutImports.replace(
    CodePreviewerRegex,
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
