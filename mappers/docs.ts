import fs from "fs";
import path from "path";

// Simple directory copy function
const copyDir = (src: string, dest: string) => {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

// Simple function to copy component files (index, index.web.tsx and creator directory)
const copyComponent = (component: string) => {
  const componentsDir = path.resolve("packages/src/components");
  const docsDir = path.resolve("apps/docs/components");

  const componentDir = path.join(componentsDir, component);
  const destDir = path.join(docsDir, component);
  const creatorDir = path.join(componentDir, "creator");
  const destCreatorDir = path.join(destDir, "creator");
  const ariaDir = path.join(componentDir, "aria");
  const destAriaDir = path.join(destDir, "aria");

  // Check if component exists
  if (!fs.existsSync(componentDir)) {
    console.warn(`Component not found: ${component}`);
    return;
  }

  // Create destination dir
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  // Copy specific files
  const filesToCopy = ["index.tsx", "index.web.tsx"];
  for (const file of filesToCopy) {
    const srcFile = path.join(componentDir, file);
    if (fs.existsSync(srcFile)) {
      fs.copyFileSync(srcFile, path.join(destDir, file));
      console.log(`✓ Copied ${file} for ${component}`);
    }
  }

  // Copy creator dir if exists
  if (fs.existsSync(creatorDir)) {
    copyDir(creatorDir, destCreatorDir);
    console.log(`✓ Copied creator directory for ${component}`);
  }

  // Copy aria dir if exists
  if (fs.existsSync(ariaDir)) {
    copyDir(ariaDir, destAriaDir);
    console.log(`✓ Copied aria directory for ${component}`);
  }

  console.log(`✅ Component ${component} processed`);
};

// Function to delete component docs when component is deleted
const deleteComponentDocs = (component: string) => {
  const docsComponentPath = path.resolve("apps/docs/components", component);
  const docsUiPath = path.resolve(
    "apps/docs/app/ui/docs",
    component.toLowerCase()
  );

  try {
    // Delete from docs/components
    if (fs.existsSync(docsComponentPath)) {
      fs.rmSync(docsComponentPath, { recursive: true, force: true });
      console.log(`✓ Deleted component docs from: ${docsComponentPath}`);
    }

    // Delete from docs/app/ui/docs
    if (fs.existsSync(docsUiPath)) {
      fs.rmSync(docsUiPath, { recursive: true, force: true });
      console.log(`✓ Deleted component UI docs from: ${docsUiPath}`);
    }

    console.log(`✅ Docs for ${component} deleted successfully`);
  } catch (error) {
    console.error(`Error deleting docs for ${component}:`, error);
  }
};

// Function to copy and process docs files from component/docs to web UI docs
const copyDocs = (component: string) => {
  const sourcePath = path.resolve("packages/src/components");
  const docsPath = path.resolve("apps/docs/app/ui/docs");
  const codePreviewerRegex = /\/\/\/\s*\{Example:(\d+)\}\s*\/\/\//g;

  try {
    // Find docs files in the component folder
    const componentDocsPath = path.join(sourcePath, component, "docs");
    if (!fs.existsSync(componentDocsPath)) {
      console.log(`No docs found for ${component}`);
      return;
    }

    // Get list of docs files
    const docFiles = fs.readdirSync(componentDocsPath);
    if (docFiles.length === 0) {
      console.log(`No doc files found for ${component}`);
      return;
    }

    // Create destination folder (lowercase component name)
    const destPath = path.join(docsPath, component.toLowerCase());
    if (!fs.existsSync(destPath)) {
      fs.mkdirSync(destPath, { recursive: true });
    }

    // Copy docs files
    for (const file of docFiles) {
      const srcFilePath = path.join(componentDocsPath, file);
      const destFilePath = path.join(destPath, file);
      fs.copyFileSync(srcFilePath, destFilePath);
      console.log(`✓ Copied docs file: ${file} for ${component}`);
    }

    // Process code examples in copied files
    const copiedFiles = docFiles.map((file) => ({
      path: path.join(destPath, file),
      name: file,
    }));

    // Process each file for example markers
    for (const fileObj of copiedFiles) {
      const uniqueImports = new Map();
      uniqueImports.set("CodePreviewer", "../../../CodePreviewer");

      // Read file content
      const content = fs.readFileSync(fileObj.path, "utf-8");

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
          return `import CodePreviewer from '../../CodePreviewer';`;
        }
        return `import {${key}} from '../../../../components/${value}';`;
      });

      const totalContent = `${importContent.join("\n")}\n\n${newContent}`;

      if (content !== totalContent) {
        fs.writeFileSync(fileObj.path, totalContent, "utf-8");
        console.log(`✓ Processed examples in ${fileObj.name}`);
      }

      // Create page.tsx file
      const dirPath = path.dirname(fileObj.path);
      const newFilePath = path.join(dirPath, "page.tsx");
      const pageContent = `
"use client";
import Docs from './index.mdx';
export default function Page() {
  return (
    <div>
      <Docs />
    </div>
  );
}`;
      fs.writeFileSync(newFilePath, pageContent);
      console.log(`✓ Created page.tsx for ${fileObj.name}`);
    }

    console.log(`✅ Docs for ${component} processed successfully`);
  } catch (error) {
    console.error(`Error processing docs for ${component}:`, error);
  }
};

// Helper function to generate CodePreviewer content
const generateCodePreviewer = (
  exampleNumber: string,
  component: string,
  uniqueImports: Map<string, string>
) => {
  const sourcePath = path.resolve("packages/src/components");
  const examplePath = path.join(
    sourcePath,
    component,
    "examples",
    `example${exampleNumber}`
  );
  const codePath = path.join(examplePath, "template.handlebars");
  const argsPath = path.join(examplePath, "meta.json");

  try {
    const code = fs.readFileSync(codePath, "utf8");
    const meta = JSON.parse(fs.readFileSync(argsPath, "utf8"));
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
 * Handles copying non-component files such as utilities, aria helpers, etc.
 * @param srcPath Source file path within packages/src
 */
const processNonComponentFile = (srcPath: string) => {
  const packagesDir = path.resolve("packages/src");
  const docsDir = path.resolve("apps/docs");

  // Normalize path and make relative to packages/src
  const normalizedPath = path.normalize(srcPath);
  const relativePath = path.relative(packagesDir, normalizedPath);

  // Skip processing if not in packages/src
  if (!fs.existsSync(normalizedPath) || relativePath.startsWith("..")) {
    console.warn(`File not in packages/src: ${normalizedPath}`);
    return;
  }

  // Skip if it's in the components directory
  if (relativePath.startsWith("components")) {
    return;
  }

  // Check if it's a directory
  const isDirectory = fs.statSync(normalizedPath).isDirectory();

  // Get destination path directly in the docs directory
  const destPath = path.join(docsDir, relativePath);

  // Create parent directory if it doesn't exist
  const destParentDir = isDirectory ? destPath : path.dirname(destPath);
  if (!fs.existsSync(destParentDir)) {
    fs.mkdirSync(destParentDir, { recursive: true });
  }

  if (isDirectory) {
    // Copy entire directory
    copyDir(normalizedPath, destPath);
    console.log(`✓ Copied directory: ${relativePath} directly to docs`);
  } else {
    // Copy single file
    fs.copyFileSync(normalizedPath, destPath);
    console.log(`✓ Copied file: ${relativePath} directly to docs`);
  }
};

export default {
  component: function (component: string, event = "added") {
    if (event === "removed") {
      deleteComponentDocs(component);
    } else {
      copyComponent(component);
      copyDocs(component);
    }
  },

  nonComponent: function (filePath: string) {
    try {
      // Process non-component files like utilities, aria helpers, etc.
      processNonComponentFile(filePath);
    } catch (error) {
      console.error(`Error processing non-component file ${filePath}:`, error);
    }
  },

  // Process utils directory specifically
  utils: function () {
    try {
      const packagesDir = path.resolve("packages/src");
      const utilsDir = path.join(packagesDir, "utils");

      if (fs.existsSync(utilsDir)) {
        processNonComponentFile(utilsDir);
        console.log("✅ Utils directory processed successfully");
      } else {
        console.warn("⚠ Utils directory not found in packages/src");
      }
    } catch (error) {
      console.error("Error processing utils directory:", error);
    }
  },
};
