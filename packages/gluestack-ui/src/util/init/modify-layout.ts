import * as fs from 'fs-extra';
import * as path from 'path';
import { log } from '@clack/prompts';
import { config } from '../../config';
import { getFilePath } from '../config';
import { ProjectType } from '../../dependencies';

interface LayoutModificationOptions {
  layoutPath: string;
  projectType: string;
  cssPath: string;
  componentsPath: string;
  isNextjs15?: boolean;
}

/**
 * Automatically modifies layout files to add GluestackUIProvider wrapper and CSS imports
 */
export async function modifyLayoutFile(
  options: LayoutModificationOptions
): Promise<void> {
  const { layoutPath, projectType, cssPath, componentsPath, isNextjs15 } =
    options;

  try {
    if (!fs.existsSync(layoutPath)) {
      log.warning(`Layout file not found: ${layoutPath}`);
      return;
    }

    const content = await fs.readFile(layoutPath, 'utf8');
    const isTypeScript =
      layoutPath.endsWith('.tsx') || layoutPath.endsWith('.ts');

    let modifiedContent: string;

    if (projectType === 'nextjs') {
      modifiedContent = await modifyNextJsLayout(
        content,
        cssPath,
        componentsPath,
        isTypeScript,
        isNextjs15
      );
    } else if (projectType === 'expo') {
      modifiedContent = await modifyExpoLayout(
        content,
        cssPath,
        componentsPath,
        isTypeScript
      );
    } else if (projectType === 'react-native-cli') {
      modifiedContent = await modifyReactNativeLayout(
        content,
        cssPath,
        componentsPath,
        isTypeScript
      );
    } else {
      log.warning(
        `Unsupported project type for layout modification: ${projectType}`
      );
      return;
    }

    if (modifiedContent !== content) {
      await fs.writeFile(layoutPath, modifiedContent, 'utf8');
      log.success(`✅ Modified layout file: ${path.basename(layoutPath)}`);
    } else {
      log.info(
        `Layout file already contains GluestackUIProvider setup: ${path.basename(layoutPath)}`
      );
    }
  } catch (error) {
    log.error(`Error modifying layout file: ${(error as Error).message}`);
    throw error;
  }
}

/**
 * Modify Next.js layout files (app router or pages router)
 */
async function modifyNextJsLayout(
  content: string,
  cssPath: string,
  componentsPath: string,
  isTypeScript: boolean,
  isNextjs15?: boolean
): Promise<string> {
  // Check if already modified
  if (
    content.includes('GluestackUIProvider') &&
    content.includes('gluestack-ui-provider')
  ) {
    return content;
  }

  const cssImportPath = getCssImportPath(cssPath);
  const providerImportPath = `@/${componentsPath}/gluestack-ui-provider`;

  // Determine if this is App Router or Pages Router
  const isAppRouter =
    content.includes('export default function RootLayout') ||
    content.includes('export default function Layout');
  const isPagesRouter = content.includes('export default function App');

  // For Next.js 15, only import the registry for App Router
  const registryImport =
    isNextjs15 && isAppRouter
      ? `import StyledJsxRegistry from './registry';\n`
      : '';

  let imports = `import '${cssImportPath}';\nimport { GluestackUIProvider } from '${providerImportPath}';\n${registryImport}`;

  // Add imports at the top (after existing imports)
  let modifiedContent = addImportsToFile(content, imports);

  // Wrap the children with provider
  if (isAppRouter) {
    // App Router layout
    const providerWrapper = isNextjs15
      ? `<StyledJsxRegistry>\n          <GluestackUIProvider mode="light">\n            {children}\n          </GluestackUIProvider>\n        </StyledJsxRegistry>`
      : `<GluestackUIProvider mode="light">\n            {children}\n          </GluestackUIProvider>`;

    modifiedContent = modifiedContent.replace(
      /(\s*{children}\s*)/g,
      `\n        ${providerWrapper}\n        `
    );
  } else if (isPagesRouter) {
    // Pages Router _app.tsx - no StyledJsxRegistry needed here
    // For Pages Router, registry code should be handled in _document.tsx instead
    modifiedContent = modifiedContent.replace(
      /(<Component\s+{\.\.\.pageProps}\s*\/>)/g,
      `<GluestackUIProvider mode="light">\n        $1\n      </GluestackUIProvider>`
    );
  }

  return modifiedContent;
}

/**
 * Modify Expo layout files (_layout.tsx)
 */
async function modifyExpoLayout(
  content: string,
  cssPath: string,
  componentsPath: string,
  isTypeScript: boolean
): Promise<string> {
  // Check if already modified
  if (
    content.includes('GluestackUIProvider') &&
    content.includes('gluestack-ui-provider')
  ) {
    return content;
  }

  const cssImportPath = getCssImportPath(cssPath);
  const providerImportPath = `@/${componentsPath}/gluestack-ui-provider`;

  const imports = `import { GluestackUIProvider } from '${providerImportPath}';\nimport '${cssImportPath}';`;

  // Add imports at the top
  let modifiedContent = addImportsToFile(content, imports);

  // Wrap the return content with provider
  if (content.includes('<Slot />')) {
    modifiedContent = modifiedContent.replace(
      /(\s*<Slot\s*\/>\s*)/g,
      `\n    <GluestackUIProvider mode="light">\n      <Slot />\n    </GluestackUIProvider>\n    `
    );
  } else if (content.includes('return (')) {
    // Find the main return statement and wrap its content
    modifiedContent = modifiedContent.replace(
      /(return\s*\(\s*)([\s\S]*?)(\s*\);?\s*})/,
      (match, returnPart, content, closingPart) => {
        if (content.trim().startsWith('<GluestackUIProvider')) {
          return match; // Already wrapped
        }
        return `${returnPart}\n    <GluestackUIProvider mode="light">\n      ${content.trim()}\n    </GluestackUIProvider>\n  ${closingPart}`;
      }
    );
  }

  return modifiedContent;
}

/**
 * Modify React Native CLI layout files (App.tsx)
 */
async function modifyReactNativeLayout(
  content: string,
  cssPath: string,
  componentsPath: string,
  isTypeScript: boolean
): Promise<string> {
  // Check if already modified
  if (
    content.includes('GluestackUIProvider') &&
    content.includes('gluestack-ui-provider')
  ) {
    return content;
  }

  const cssImportPath = getCssImportPath(cssPath);
  const providerImportPath = `@/${componentsPath}/gluestack-ui-provider`;

  const imports = `import { GluestackUIProvider } from '${providerImportPath}';\nimport '${cssImportPath}';`;

  // Add imports at the top
  let modifiedContent = addImportsToFile(content, imports);

  // Wrap the main App component return
  if (content.includes('function App') || content.includes('const App')) {
    modifiedContent = modifiedContent.replace(
      /(return\s*\(\s*)([\s\S]*?)(\s*\);?\s*})/,
      (match, returnPart, content, closingPart) => {
        if (content.trim().startsWith('<GluestackUIProvider')) {
          return match; // Already wrapped
        }
        return `${returnPart}\n    <GluestackUIProvider mode="light">\n      ${content.trim()}\n    </GluestackUIProvider>\n  ${closingPart}`;
      }
    );
  }

  return modifiedContent;
}

/**
 * Add imports to the top of the file after existing imports
 */
function addImportsToFile(content: string, newImports: string): string {
  // Find the last import statement
  const importRegex = /^import\s+.*?;?\s*$/gm;
  const imports = content.match(importRegex);

  if (imports) {
    // Find the position after the last import
    const lastImport = imports[imports.length - 1];
    const lastImportIndex = content.indexOf(lastImport) + lastImport.length;

    // Insert new imports after the last existing import
    return (
      content.slice(0, lastImportIndex) +
      '\n' +
      newImports +
      '\n' +
      content.slice(lastImportIndex)
    );
  } else {
    // No existing imports, add at the top
    return newImports + '\n' + content;
  }
}

/**
 * Get the correct CSS import path based on the CSS file location
 */
function getCssImportPath(cssPath: string): string {
  if (cssPath.includes('global')) {
    return '@/' + cssPath;
  } else if (cssPath.startsWith('src/')) {
    return '@/' + cssPath;
  } else {
    return '@/' + cssPath;
  }
}

/**
 * Automatically modifies layout files during init process
 */
export async function modifyLayoutFilesAutomatically(
  projectType: string,
  resolvedConfig: any,
  permission: boolean
): Promise<void> {
  if (!permission) {
    log.info('Skipping layout file modification due to user preference.');
    return;
  }

  try {
    // Use the resolved config to get the actual entry path
    const entryPath = resolvedConfig?.app?.entry;
    const componentsPath =
      resolvedConfig?.app?.componentsPath ||
      resolvedConfig?.app?.components ||
      'components/ui';

    if (!entryPath) {
      log.warning(
        'No entry path found in resolved config. Skipping layout modification.'
      );
      return;
    }

    // Determine CSS path based on project type
    const cssPath = await getCSSPathForProject(projectType, resolvedConfig);

    // Check if this is Next.js 15
    const isNextjs15 = projectType === 'nextjs' && (await checkForNextjs15());

    const options: LayoutModificationOptions = {
      layoutPath: entryPath,
      projectType,
      cssPath,
      componentsPath,
      isNextjs15,
    };

    log.info(
      `🔄 Automatically modifying layout file: ${path.basename(entryPath)}`
    );
    await modifyLayoutFile(options);
  } catch (error) {
    log.error(
      `Failed to automatically modify layout files: ${(error as Error).message}`
    );
    log.info(
      'You can manually add the GluestackUIProvider wrapper to your layout file.'
    );
  }
}

/**
 * Get CSS path based on project type and resolved config
 */
async function getCSSPathForProject(
  projectType: string,
  resolvedConfig: any
): Promise<string> {
  if (resolvedConfig?.app?.globalCssPath) {
    return resolvedConfig.app.globalCssPath;
  }

  // Try to detect existing CSS files in the project
  const detectedCssPath = await getFilePath([
    '**/*globals.css',
    '**/*global.css',
  ]);

  if (detectedCssPath) {
    return detectedCssPath;
  }

  // Fallback to default CSS paths for different project types
  switch (projectType) {
    case ProjectType.nextjs:
      return 'app/globals.css';
    case ProjectType.expo:
      return 'global.css';
    case ProjectType.reactNative:
      return 'global.css';
    default:
      return 'global.css';
  }
}

/**
 * Check if the project is using Next.js 15
 */
async function checkForNextjs15(): Promise<boolean> {
  try {
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    if (!fs.existsSync(packageJsonPath)) {
      return false;
    }

    const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf8'));
    const nextVersion =
      packageJson.dependencies?.next || packageJson.devDependencies?.next;

    if (nextVersion) {
      // Check if version starts with 15 or ^15 or ~15
      return /^[\^~]?15\./.test(nextVersion);
    }

    return false;
  } catch (error) {
    return false;
  }
}
