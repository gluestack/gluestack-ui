import path from 'path';
import * as fileOps from '../utils/fileOperations';
import * as regex from '../utils/regex';
import {
  componentPreviewerTemplate,
  importTemplate,
  wrappedComponentTemplate,
} from './templates';

interface ImportMap {
  [key: string]: string[];
}

export const generateCodePreviewer = (
  exampleName: string,
  component: string,
  importMap: ImportMap
) => {
  const sourcePath = path.resolve('packages/components/ui');
  const examplePath = path.join(sourcePath, component, 'examples', exampleName);
  const codePath = path.join(examplePath, 'template.handlebars');
  const argsPath = path.join(examplePath, 'meta.json');
  try {
    if (!fileOps.pathExists(codePath) || !fileOps.pathExists(argsPath)) {
      console.error(`Missing files for example ${exampleName} in ${component}`);
      return `<!-- Failed to load CodePreviewer for Example:${exampleName} -->`;
    }
    let code = fileOps.readTextFile(codePath);
    const meta = fileOps.readJsonFile(argsPath);
    const argTypes = JSON.stringify(meta.argTypes || {}, null, 2);
    const title = JSON.stringify(meta.title);
    // Add reactLive imports to importMap
    if (meta.reactLive) {
      Object.entries(meta.reactLive).forEach(([key, value]) => {
        if (!importMap[value as string]) {
          importMap[value as string] = [];
        }
        if (!importMap[value as string].includes(key)) {
          importMap[value as string].push(key);
        }
      });
    }
    return componentPreviewerTemplate(code.trim(), argTypes, title);
  } catch (error) {
    console.error(
      `:x: Error building CodePreviewer for Example:${exampleName} in ${component}:`,
      error
    );
    return `<!-- Failed to load CodePreviewer for Example:${exampleName} -->`;
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
    const importMap: ImportMap = {
      '@/components/custom/component-previewer': ['ComponentPreviewer'],
    };

    // Only collect the processed annotations
    let processedContent = '';
    let match;

    // Process each annotation match
    while ((match = regex.CodePreviewerRegex.exec(sourceContent)) !== null) {
      const exampleName = match[1].trim();
      const processedAnnotation = generateCodePreviewer(
        exampleName,
        component,
        importMap
      );
      processedContent += processedAnnotation + '\n\n';
    }

    // If we found and processed any annotations
    if (processedContent) {
      // Generate import statements
      const importContent = Object.entries(importMap)
        .map(([importPath, imports]) => {
          return importTemplate(imports, importPath);
        })
        .join('\n');

      // Wrap the processed content in a component
      const wrappedContent = wrappedComponentTemplate(processedContent);

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
    console.error(
      `Error processing annotations from ${sourcePath} to ${destinationPath}:`,
      error
    );
    return false;
  }
};
