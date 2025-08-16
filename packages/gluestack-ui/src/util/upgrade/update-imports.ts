import { log, spinner } from '@clack/prompts';
import fs from 'fs-extra';
import path from 'path';

// Update import statements in components/ui folder
export async function updateImports(): Promise<void> {
  const s = spinner();
  s.start('Updating import statements...');

  const componentsPath = path.join(process.cwd(), 'components', 'ui');
  if (!fs.existsSync(componentsPath)) {
    s.stop('No components/ui folder found.');
    return;
  }

  let updatedFiles = 0;

  // Recursively find all TypeScript/JavaScript files
  const files = await fs.readdir(componentsPath);
  for (const file of files) {
    const filePath = path.join(componentsPath, file);
    const stat = await fs.stat(filePath);

    if (stat.isDirectory()) {
      // Recursively process subdirectories
      await processDirectory(filePath);
    } else if (
      file.endsWith('.ts') ||
      file.endsWith('.tsx') ||
      file.endsWith('.js') ||
      file.endsWith('.jsx')
    ) {
      const updated = await updateFileImports(filePath);
      if (updated) updatedFiles++;
    }
  }

  s.stop(`Updated ${updatedFiles} files.`);
}

// Update imports in a single file
async function updateFileImports(filePath: string): Promise<boolean> {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    let updated = false;
    let newContent = content;

    // Regex to match imports from @gluestack-ui packages
    const importRegex = /from\s+['"](@gluestack-ui\/[^'"]+)['"]/g;

    newContent = newContent.replace(importRegex, (match, importPath) => {
      // Special case for nativewind-utils imports
      if (importPath.startsWith('@gluestack-ui/nativewind-utils')) {
        updated = true;
        return `from '@gluestack-ui/utils/nativewind-utils'`;
      }

      // Extract component name from import path
      const componentName = importPath.replace('@gluestack-ui/', '');
      const newImportPath = `@gluestack-ui/core/${componentName}/creator`;
      updated = true;
      return `from '${newImportPath}'`;
    });

    if (updated) {
      await fs.writeFile(filePath, newContent, 'utf8');
      log.info(`Updated imports in: ${path.relative(process.cwd(), filePath)}`);
    }

    return updated;
  } catch (error) {
    log.warning(`Failed to update file ${filePath}: ${error}`);
    return false;
  }
}

// Process a directory recursively
async function processDirectory(dirPath: string): Promise<void> {
  const files = await fs.readdir(dirPath);
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = await fs.stat(filePath);

    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else if (
      file.endsWith('.ts') ||
      file.endsWith('.tsx') ||
      file.endsWith('.js') ||
      file.endsWith('.jsx')
    ) {
      await updateFileImports(filePath);
    }
  }
}
