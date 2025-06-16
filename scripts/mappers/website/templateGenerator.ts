import path from 'path';
import * as fileOps from '../utils/fileOperations';
import {
  componentPreviewerTemplate,
  pageContentTemplate,
  codePreviewerTemplate,
  layoutTemplate,
} from './templates';
import { CodePreviewerRegex } from '../utils/regex';
interface ImportMap {
  [key: string]: string[];
}

export const generateCodePreviewer = (
  exampleName: string,
  component: string,
  importMap: ImportMap
) => {
  const sourcePath =
    component === 'use-break-point-value' || component === 'use-media-query'
      ? path.resolve('packages/components/ui/utils')
      : path.resolve('packages/components/ui');
  const examplePath = path.join(sourcePath, component, 'examples', exampleName);
  const codePath = path.join(examplePath, 'template.handlebars');
  const argsPath = path.join(examplePath, 'meta.json');
  try {
    if (!fileOps.pathExists(codePath) || !fileOps.pathExists(argsPath)) {
      console.error(`Missing files for example ${exampleName} in ${component}`);
      return `<!-- Failed to load CodePreviewer for Example:${exampleName} -->`;
    }
    const code = fileOps.readTextFile(codePath);
    const meta = fileOps.readJsonFile(argsPath);
    const title = meta.title || '';
    const description = meta.description || '';
    const argTypes = JSON.stringify(meta.argTypes || {}, null, 2);
    const reactLiveKeys = meta.reactLive ? Object.keys(meta.reactLive) : [];
    const reactLive = `{ ${reactLiveKeys.join(', ')} }`;
    const importExampleMap: ImportMap = {};

    // Add reactLive imports to importExampleMap for this specific example
    reactLiveKeys.forEach((key) => {
      const value = meta.reactLive[key];
      if (!importExampleMap[value]) {
        importExampleMap[value] = [];
      }
      if (!importExampleMap[value].includes(key)) {
        importExampleMap[value].push(key);
      }
    });

    // Merge example imports into the main importMap
    Object.entries(importExampleMap).forEach(([path, imports]) => {
      if (!importMap[path]) {
        importMap[path] = [];
      }
      imports.forEach((imp) => {
        if (!importMap[path].includes(imp)) {
          importMap[path].push(imp);
        }
      });
    });

    // If this is the basic example, copy it to the docs components folder
    if (
      exampleName === 'basic' &&
      component !== 'use-break-point-value' &&
      component !== 'use-media-query'
    ) {
      const websitePath = path.resolve(
        'apps/website/components/page-components/all-components'
      );
      const destPath = path.join(websitePath, component);
      const destFilePath = path.join(destPath, 'index.tsx');

      // Create destination directory if it doesn't exist
      fileOps.ensureDirectoryExists(destPath);

      // Generate imports from meta.reactLive
      const imports = reactLiveKeys
        .map((key) => {
          const value = meta.reactLive[key];
          return `import { ${key} } from '${value}';`;
        })
        .join('\n');

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

    return codePreviewerTemplate(
      code.trim(),
      argTypes,
      reactLive,
      title,
      description,
      importExampleMap
    );
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

export const replaceFrontMatter = (
  content: string,
  destPath: string
): string => {
  const frontMatterRegex = /^---([\s\S]*?)---\n*/;
  const frontMatterObj: Record<string, any> = {};

  // Extract and remove frontmatter
  const contentWithoutFrontMatter = content.replace(
    frontMatterRegex,
    (frontMatter) => {
      const lines = frontMatter.split('\n');

      for (const line of lines) {
        const trimmedLine = line.trim();
        if (trimmedLine && trimmedLine !== '---') {
          if (
            trimmedLine.startsWith('description:') ||
            trimmedLine.startsWith('title:')
          ) {
            const [key, ...valueParts] = trimmedLine.split(':');
            const value = valueParts.join(':').trim();
            if (key.trim() === 'title') {
              // Keep the entire title including any | characters
              frontMatterObj.title = value;
            } else if (key.trim() === 'description') {
              frontMatterObj.description = value;
            }
          }
        }
      }
      return ''; // Remove the frontmatter completely
    }
  );

  // Write layout.tsx with just title and description
  fileOps.writeTextFile(
    path.join(destPath, 'layout.tsx'),
    layoutTemplate(frontMatterObj)
  );

  // Return content without frontmatter
  return contentWithoutFrontMatter.trim();
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
  component: string,
  destPath: string
): boolean => {
  const importMap: ImportMap = {
    '@/components/custom/code-previewer': ['CodePreviewer'],
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

  const frontMatter = replaceFrontMatter(processedContent, destPath);
  // Generate import statements in one go
  const importContent = Object.entries(importMap)
    .map(([path, imports]) => {
      return `import { ${imports.join(', ')} } from '${path}';`;
    })
    .join('\n');

  const totalContent = `${importContent}\n\n${frontMatter}`;

  if (content !== totalContent) {
    fileOps.writeTextFile(filePath, totalContent);
    return true;
  }
  return false;
};
