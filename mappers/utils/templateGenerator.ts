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
  exampleNumber: string,
  component: string,
  uniqueImports: Map<string, string>
) => {
  const sourcePath = path.resolve("packages/src/components/ui");
  const examplePath = path.join(
    sourcePath,
    component,
    "examples",
    `example${exampleNumber}`
  );
  const codePath = path.join(examplePath, "template.handlebars");
  const argsPath = path.join(examplePath, "meta.json");

  try {
    if (!fileOps.pathExists(codePath) || !fileOps.pathExists(argsPath)) {
      console.error(`Missing files for example ${exampleNumber} in ${component}`);
      return `<!-- Failed to load CodePreviewer for Example:${exampleNumber} -->`;
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
      `❌ Error building CodePreviewer for Example:${exampleNumber} in ${component}:`,
      error
    );
    return `<!-- Failed to load CodePreviewer for Example:${exampleNumber} -->`;
  }
};

/**
 * Generate page.tsx content
 * @returns Page.tsx file content
 */
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


export const processFileForExamples = (
  filePath: string,
  component: string
): boolean => {
  const codePreviewerRegex = /\/\/\/\s*\{Example:(\d+)\}\s*\/\/\//g;
  const uniqueImports = new Map();
  uniqueImports.set("CodePreviewer", "@/components/code-previewer");

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

  // Replace example markers
  const newContent = contentWithoutImports.replace(
    codePreviewerRegex,
    (_, number) => {
      return generateCodePreviewer(number, component, uniqueImports);
    }
  );

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
    if (key === "CodePreviewer") {
      return `import CodePreviewer from '@/components/code-previewer';`;
    }
    return `import {${key}} from '@/components/ui/${value}';`;
  });

  const totalContent = `${importContent.join("\n")}\n\n${newContent}`;

  if (content !== totalContent) {
    fileOps.writeTextFile(filePath, totalContent);
    return true;
  }
  
  return false;
}; 