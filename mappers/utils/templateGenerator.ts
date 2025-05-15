import path from "path";
import * as fileOps from "./fileOperations";

export const extractImports = (
  code: string,
  uniqueImports: Map<string, string>
) => {
  const importRegex = /^import .+ from '.+';$/gm;
  const matches = [...code.matchAll(importRegex)];
  for (const match of matches) {
    const importStatement = match[0];
    const importMatch = importStatement.match(/import (.+) from '(.+)';/);
    if (importMatch && importMatch.length === 3) {
      const [_, key, value] = importMatch;
      uniqueImports.set(key.trim(), value);
    }
  }
};

export const generateCodePreviewer = (
  exampleName: string,
  component: string,
  uniqueImports: Map<string, string>
) => {
  const sourcePath = path.resolve("packages/src/components/ui");
  const examplePath = path.join(
    sourcePath,
    component,
    "examples",
    exampleName
  );
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
    // Add reactLive imports to uniqueImports
    reactLiveKeys.forEach((key) => {
      if (!uniqueImports.has(key)) {
        uniqueImports.set(key, meta.reactLive[key]);
      }
    });
    return `<CodePreviewer
  code={\`${code.trim()}\`}
  argTypes={${argTypes}}
  reactLive={${reactLive}}
/>`;
  } catch (error) {
    console.error(
      `:x: Error building CodePreviewer for Example:${exampleName} in ${component}:`,
      error
    );
    return `<!-- Failed to load CodePreviewer for Example:${exampleName} -->`;
  }
};

export const generatePageContent = (): string => {
  return `
"use client";
import Docs from './index.mdx';
export default function Page() {
  return (
    <div>
      <Docs />
    </div>
  );
}`;
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
  const uniqueImports = new Map();
  uniqueImports.set("CodePreviewer", "@/components/code-previewer");
  // Read file content
  const content = fileOps.readTextFile(filePath);
  // Extract existing imports
  const importRegex = /^import .+ from '.+';$/gm;
  const existingImports = new Set();
  const contentWithoutImports = content
    .replace(importRegex, (match) => {
      existingImports.add(match);
      return "";
    })
    .trim();
  // Replace example markers and file content markers
  const newContent = contentWithoutImports
    .replace(codePreviewerRegex, (_, exampleName) => {
      return generateCodePreviewer(exampleName.trim(), component, uniqueImports);
    });
  
  // Process file content markers
  const processedContent = processFileContent(newContent);
  // Add existing imports to uniqueImports to avoid duplicates
  existingImports.forEach((importStatement: any) => {
    const matches = importStatement.match(/import (.+) from '(.+)';/);
    if (matches && matches.length === 3) {
      const [_, key, value] = matches;
      uniqueImports.set(key.trim(), value);
    }
  });
  // Generate import statements
  const importContent = Array.from(uniqueImports).map(([key, value]) => {
    return `import {${key}} from '${value}';`;
  });
  const totalContent = `${importContent.join("\n")}\n\n${processedContent}`;
  if (content !== totalContent) {
    fileOps.writeTextFile(filePath, totalContent);
    return true;
  }
  return false;
};





















