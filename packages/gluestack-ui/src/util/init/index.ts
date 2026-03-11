import os from 'os';
import { config, setStylingEngine } from '../../config';
import { promisify } from 'util';
import path, { join } from 'path';
import { log, confirm, spinner, select, isCancel, cancel } from '@clack/prompts';
import fs, { existsSync, writeFile } from 'fs-extra';
import { checkIfInitialized, generateMonoRepoConfig } from '../config';
import {
  cloneRepositoryAtRoot,
  findLockFileType,
  installDependencies,
  installNativeDependencies,
  promptVersionManager,
  checkComponentDependencies,
} from '..';
import { getProjectBasedDependencies } from '../../dependencies';
import { generateConfigNextApp } from '../config/next-config-helper';
import { generateConfigExpoApp } from '../config/expo-config-helper';
import { generateConfigRNApp } from '../config/react-native-config-helper';
import { checkNextVersion } from '../check-next-version';
import { readFile } from 'fs-extra';
import { modifyLayoutFilesAutomatically } from './modify-layout';

const _currDir = process.cwd();
const _homeDir = os.homedir();

// NativeWind v5 provider files — inlined to avoid dependency on stale cloned repo cache
const NATIVEWIND_V5_PROVIDER_INDEX = `import React, { useEffect } from 'react';
import { View, ViewProps } from 'react-native';
import { OverlayProvider } from '@gluestack-ui/core/overlay/creator';
import { ToastProvider } from '@gluestack-ui/core/toast/creator';
import { Appearance, ColorSchemeName } from "react-native";

export type ModeType = 'light' | 'dark' | 'system';

export function GluestackUIProvider({
  mode = 'system',
  ...props
}: {
  mode?: ModeType;
  children?: React.ReactNode;
  style?: ViewProps['style'];
}) {
  useEffect(() => {
    Appearance.setColorScheme(mode as ColorSchemeName);
  }, [mode]);

  return (
    <View
      style={[
        { flex: 1, height: '100%', width: '100%' },
        props.style,
      ]}
    >
      <OverlayProvider>
        <ToastProvider>{props.children}</ToastProvider>
      </OverlayProvider>
    </View>
  );
}
`;

const NATIVEWIND_V5_PROVIDER_INDEX_WEB = `'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { OverlayProvider } from '@gluestack-ui/core/overlay/creator';
import { ToastProvider } from '@gluestack-ui/core/toast/creator';
import { script } from './script';

export type ModeType = 'light' | 'dark' | 'system';

export const useSafeLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function GluestackUIProvider({
  mode = 'light',
  ...props
}: {
  mode?: ModeType;
  children?: React.ReactNode;
}) {
  const handleMediaQuery = React.useCallback((e: MediaQueryListEvent) => {
    script(e.matches ? 'dark' : 'light');
  }, []);

  useSafeLayoutEffect(() => {
    if (mode !== 'system') {
      const documentElement = document.documentElement;
      if (documentElement) {
        documentElement.classList.add(mode);
        documentElement.classList.remove(mode === 'light' ? 'dark' : 'light');
        documentElement.style.colorScheme = mode;
      }
    }
  }, [mode]);

  useSafeLayoutEffect(() => {
    if (mode !== 'system') return;
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    media.addListener(handleMediaQuery);

    return () => media.removeListener(handleMediaQuery);
  }, [handleMediaQuery]);

  return (
    <>
      <script
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: \`(\${script.toString()})('\${mode}')\`,
        }}
      />
      <OverlayProvider>
        <ToastProvider>{props.children}</ToastProvider>
      </OverlayProvider>
    </>
  );
}
`;

const NATIVEWIND_V5_PROVIDER_SCRIPT = `export const script = (mode: string) => {
  const documentElement = document.documentElement;

  function getSystemColorMode() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  try {
    const isSystem = mode === 'system';
    const theme = isSystem ? getSystemColorMode() : mode;
    documentElement.classList.remove(theme === 'light' ? 'dark' : 'light');
    documentElement.classList.add(theme);
    documentElement.style.colorScheme = theme;
  } catch (e) {
    console.error(e);
  }
};
`;

// NativeWind v5 global.css — inlined to avoid dependency on cloned repo having the file
const NATIVEWIND_V5_GLOBAL_CSS = `@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/preflight.css" layer(base);
@import "tailwindcss/utilities.css";
@import "nativewind/theme";

/* ─── Theme: design tokens (light / dark) ─────────────────────────
   1. :root              — light defaults (all platforms)
   2. @media dark :root  — dark defaults; nativewind maps this to
                           Appearance.getColorScheme() on native.
   3. :root.dark / :root.light — higher specificity for web class toggle. */
@layer theme {
  :root {
    --primary: 23 23 23;
    --primary-foreground: 250 250 250;
    --card: 255 255 255;
    --secondary: 245 245 245;
    --secondary-foreground: 23 23 23;
    --background: 255 255 255;
    --popover: 255 255 255;
    --popover-foreground: 10 10 10;
    --muted: 245 245 245;
    --muted-foreground: 115 115 115;
    --destructive: 231 0 11;
    --foreground: 10 10 10;
    --border: 229 229 229;
    --input: 229 229 229;
    --ring: 212 212 212;
    --accent: 247 247 247;
    --accent-foreground: 52 52 52;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --primary: 255 245 245;
      --primary-foreground: 23 23 23;
      --card: 23 23 23;
      --secondary: 38 38 38;
      --secondary-foreground: 250 250 250;
      --background: 10 10 10;
      --popover: 23 23 23;
      --popover-foreground: 250 250 250;
      --muted: 38 38 38;
      --muted-foreground: 161 161 161;
      --destructive: 255 100 103;
      --foreground: 250 250 250;
      --border: 46 46 46;
      --input: 46 46 46;
      --accent: 38 38 38;
      --accent-foreground: 250 250 250;
      --ring: 115 115 115;
    }
  }

  :root.dark {
    --primary: 255 245 245;
    --primary-foreground: 23 23 23;
    --card: 23 23 23;
    --secondary: 38 38 38;
    --secondary-foreground: 250 250 250;
    --background: 10 10 10;
    --popover: 23 23 23;
    --popover-foreground: 250 250 250;
    --muted: 38 38 38;
    --muted-foreground: 161 161 161;
    --destructive: 255 100 103;
    --foreground: 250 250 250;
    --border: 46 46 46;
    --input: 46 46 46;
    --accent: 38 38 38;
    --accent-foreground: 250 250 250;
    --ring: 115 115 115;
  }

  :root.light {
    --primary: 23 23 23;
    --primary-foreground: 250 250 250;
    --card: 255 255 255;
    --secondary: 245 245 245;
    --secondary-foreground: 23 23 23;
    --background: 255 255 255;
    --popover: 255 255 255;
    --popover-foreground: 10 10 10;
    --muted: 245 245 245;
    --muted-foreground: 115 115 115;
    --destructive: 231 0 11;
    --foreground: 10 10 10;
    --border: 229 229 229;
    --input: 229 229 229;
    --ring: 212 212 212;
    --accent: 247 247 247;
    --accent-foreground: 52 52 52;
  }
}

@theme inline {
  --color-primary: rgb(var(--primary));
  --color-primary-foreground: rgb(var(--primary-foreground));
  --color-card: rgb(var(--card));
  --color-secondary: rgb(var(--secondary));
  --color-secondary-foreground: rgb(var(--secondary-foreground));
  --color-background: rgb(var(--background));
  --color-popover: rgb(var(--popover));
  --color-popover-foreground: rgb(var(--popover-foreground));
  --color-muted: rgb(var(--muted));
  --color-muted-foreground: rgb(var(--muted-foreground));
  --color-destructive: rgb(var(--destructive));
  --color-foreground: rgb(var(--foreground));
  --color-border: rgb(var(--border));
  --color-input: rgb(var(--input));
  --color-ring: rgb(var(--ring));
  --color-accent: rgb(var(--accent));
  --color-accent-foreground: rgb(var(--accent-foreground));
}
`;

// Get templates from GitHub repository
const getTemplatesPath = () => {
  return join(_homeDir, config.gluestackDir, config.templatesDir);
};

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

interface TSConfig {
  compilerOptions?: {
    paths?: Record<string, string[]>;
    jsxImportSource?: string;
  };
}

const stylingEngineOptions: Record<string, Array<{ value: string; label: string; hint: string }>> = {
  'nextjs': [
    { value: 'nativewind', label: 'NativeWind v4 (Tailwind v3)', hint: 'Stable, production-ready' },
    // NativeWind v5 / UniWind for Next.js coming soon
  ],
  'expo': [
    { value: 'nativewind-v5', label: 'NativeWind v5 (Tailwind v4)', hint: 'Latest NativeWind — CSS-first, no tailwind.config.js' },
    { value: 'uniwind', label: 'UniWind (Tailwind v4)', hint: 'CSS-first theming with Tailwind v4' },
  ],
  'react-native-cli': [
    { value: 'nativewind', label: 'NativeWind v4 (Tailwind v3)', hint: 'Stable, production-ready' },
    // NativeWind v5 / UniWind for RN CLI coming soon
  ],
};

async function promptStylingEngine(projectType: string): Promise<'nativewind' | 'nativewind-v5' | 'uniwind'> {
  const options = stylingEngineOptions[projectType] || [];
  const defaultStyle = (options[0]?.value ?? 'nativewind') as 'nativewind' | 'nativewind-v5' | 'uniwind';

  // Skip prompt if already set via CLI flag or yesToAll
  if (config.style !== 'nativewind' || config.yesToAll) {
    const validValues = options.map(o => o.value);
    if (!validValues.includes(config.style)) {
      log.warning(
        `\x1b[33m"${config.style}" is not yet supported for ${projectType} projects. ` +
        `Falling back to ${defaultStyle}.\x1b[0m`
      );
      return defaultStyle;
    }
    return config.style;
  }

  // If only one option, auto-select without prompting
  if (options.length <= 1) {
    return defaultStyle;
  }

  // Multiple options: prompt user
  const selection = await select({
    message: 'Which \x1b[36mstyling engine\x1b[0m would you like to use?',
    options: options,
  });

  if (isCancel(selection)) {
    cancel('Operation cancelled.');
    process.exit(0);
  }

  return selection as 'nativewind' | 'nativewind-v5' | 'uniwind';
}

// Add version overrides/resolutions to package.json for all package managers
// yarn uses "resolutions", npm uses "overrides", pnpm uses "pnpm.overrides", bun uses "overrides"
async function addResolutions(resolutions: Record<string, string>): Promise<void> {
  try {
    const pkgJsonPath = join(_currDir, 'package.json');
    const pkgJson = await fs.readJSON(pkgJsonPath);
    const versionManager = findLockFileType();

    if (versionManager === 'yarn') {
      pkgJson.resolutions = { ...(pkgJson.resolutions ?? {}), ...resolutions };
    } else if (versionManager === 'pnpm') {
      pkgJson.pnpm = pkgJson.pnpm ?? {};
      pkgJson.pnpm.overrides = { ...(pkgJson.pnpm.overrides ?? {}), ...resolutions };
    } else {
      // npm and bun both use "overrides"
      pkgJson.overrides = { ...(pkgJson.overrides ?? {}), ...resolutions };
    }

    // Also set resolutions as a fallback for yarn workspaces / legacy support
    if (versionManager !== 'yarn') {
      pkgJson.resolutions = { ...(pkgJson.resolutions ?? {}), ...resolutions };
    }

    await fs.writeJSON(pkgJsonPath, pkgJson, { spaces: 2 });
    const entries = Object.entries(resolutions).map(([k, v]) => `${k}@${v}`).join(', ');
    log.info(`✅ Added version overrides to package.json: ${entries}`);
  } catch (err) {
    log.warning(`⚠ Could not update package.json overrides: ${(err as Error).message}`);
  }
}

const InitializeGlueStack = async ({
  projectType = 'library',
  isTemplate = false,
}: {
  projectType: string;
  isTemplate?: boolean;
}) => {
  try {
    const initializeStatus = await checkIfInitialized(_currDir);
    if (initializeStatus) {
      log.info(
        `\x1b[33mgluestack-ui is already initialized in the project, use 'npx gluestack-ui help' command to continue\x1b[0m`
      );
      process.exit(1);
    }
    const isNextjs15 = await checkNextVersion();

    // Prompt for styling engine if needed
    const stylingEngine = await promptStylingEngine(projectType);
    setStylingEngine(stylingEngine);

    const confirmOverride = isTemplate
      ? true
      : await overrideWarning(filesToOverride(projectType));

    console.log(`\n\x1b[1mInitializing gluestack-ui v5 alpha...\x1b[0m\n`);
    await cloneRepositoryAtRoot(join(_homeDir, config.gluestackDir));
    const inputComponent = [config.providerComponent];

    // Check dependencies for the provider component
    const { components: providerDependencies } =
      await checkComponentDependencies(inputComponent);

    let additionalDependencies = await getProjectBasedDependencies(
      projectType,
      config.style
    );
    let versionManager: string | null = findLockFileType();
    if (!versionManager) {
      versionManager = await promptVersionManager();
    }

    // NativeWind v5 requires a pinned lightningcss version — must be written before install
    // so the package manager picks it up during dependency resolution
    if (stylingEngine === 'nativewind-v5') {
      await addResolutions({ lightningcss: '1.30.1' });
    }

    await installDependencies(
      inputComponent,
      versionManager,
      additionalDependencies
    );

    // Install native dependencies separately with proper version resolution
    await installNativeDependencies(projectType);

    const s = spinner();
    s.start(
      '⏳ Generating project configuration. This might take a couple of minutes...'
    );
    await generateProjectConfigAndInit(
      projectType,
      confirmOverride,
      isNextjs15
    );

    await addProvider(isNextjs15);

    // Add provider dependencies (like toast) as essential components
    await addEssentialComponents(providerDependencies);

    s.stop(`\x1b[32mProject configuration generated.\x1b[0m`);
    log.step(
      'Please refer the above link for more details --> \x1b[33mhttps://gluestack.io/ui/docs/home/overview/introduction \x1b[0m'
    );
    log.success(
      `\x1b[32mDone!\x1b[0m Initialized \x1b[1mgluestack-ui v5 alpha\x1b[0m in the project`
    );
  } catch (err) {
    log.error(`\x1b[31mError occured in init. (${err as Error})\x1b[0m`);
    process.exit(1);
  }
};

async function addProvider(isNextjs15: boolean | undefined) {
  try {
    const targetPath = join(
      _currDir,
      config.writableComponentsPath,
      config.providerComponent
    );

    // Determine source path based on styling engine
    let sourcePath: string;
    if (config.style === 'nativewind-v5') {
      sourcePath = join(_homeDir, config.gluestackDir, config.nativewindV5ComponentsPath, config.providerComponent);
    } else if (config.style === 'uniwind') {
      sourcePath = join(_homeDir, config.gluestackDir, config.uniwindComponentsPath, config.providerComponent);
    } else {
      sourcePath = join(_homeDir, config.gluestackDir, config.componentsResourcePath, config.providerComponent);
    }

    await fs.ensureDir(targetPath);

    // For NativeWind v5, write inlined provider files directly (cache may be stale)
    if (config.style === 'nativewind-v5') {
      await fs.writeFile(join(targetPath, 'index.tsx'), NATIVEWIND_V5_PROVIDER_INDEX, 'utf8');
      await fs.writeFile(join(targetPath, 'index.web.tsx'), NATIVEWIND_V5_PROVIDER_INDEX_WEB, 'utf8');
      await fs.writeFile(join(targetPath, 'script.ts'), NATIVEWIND_V5_PROVIDER_SCRIPT, 'utf8');
    } else {
      // Whitelist of files to copy per styling engine
      const allowedFiles: Record<string, string[]> = {
        'nativewind': ['index.tsx', 'index.web.tsx', 'script.ts'],
        'uniwind':    ['index.tsx', 'index.web.tsx', 'index.uniwind.tsx', 'script.ts'],
      };
      const allowed = allowedFiles[config.style] ?? [];

      const files = await fs.readdir(sourcePath, { withFileTypes: true });

      for (const file of files) {
        if (file.isFile() && allowed.includes(file.name)) {
          await fs.copy(
            join(sourcePath, file.name),
            join(targetPath, file.name),
            { overwrite: true }
          );
        }
      }
    }

    // Special handling for Next.js 15 with NativeWind
    if (isNextjs15 && config.style === 'nativewind') {
      const templatesPath = getTemplatesPath();
      const providerContent = await readFile(
        join(templatesPath, 'nextjs', 'next15', 'index.web.tsx'),
        'utf8'
      );
      await writeFile(
        join(targetPath, 'index.web.tsx'),
        providerContent,
        'utf8'
      );
    }
  } catch (err) {
    log.error(`\x1b[31mError occured while adding the provider.\x1b[0m`);
    throw new Error((err as Error).message);
  }
}

async function addEssentialComponents(components: string[]) {
  try {
    if (components.length === 0) {
      return;
    }

    for (const component of components) {
      const targetPath = join(
        _currDir,
        config.writableComponentsPath,
        component
      );

      // Determine source path based on styling engine
      let sourcePath: string;
      if (config.style === 'nativewind-v5') {
        sourcePath = join(_homeDir, config.gluestackDir, config.nativewindV5ComponentsPath, component);
      } else if (config.style === 'uniwind') {
        sourcePath = join(_homeDir, config.gluestackDir, config.uniwindComponentsPath, component);
      } else {
        sourcePath = join(_homeDir, config.gluestackDir, config.componentsResourcePath, component);
      }

      await fs.ensureDir(targetPath);

      // Copy only files from the root directory, excluding subdirectories and dependencies.json
      const files = await fs.readdir(sourcePath, { withFileTypes: true });

      for (const file of files) {
        if (file.isFile() && file.name !== 'dependencies.json') {
          await fs.copy(
            join(sourcePath, file.name),
            join(targetPath, file.name),
            { overwrite: true }
          );
        }
      }
    }
    log.step(`✅ Added provider dependencies: ${components.join(', ')}`);
  } catch (err) {
    log.error(
      `\x1b[31mError occurred while adding provider dependencies.\x1b[0m`
    );
    throw new Error((err as Error).message);
  }
}

//update tailwind.config.js
async function updateTailwindConfig(resolvedConfig: any, projectType: string) {
  try {
    // Skip tailwind.config.js for UniWind and NativeWind v5 (both use CSS-based config)
    if (config.style === 'uniwind' || config.style === 'nativewind-v5') {
      return;
    }
    const templatesPath = getTemplatesPath();
    const tailwindConfigRootPath = join(templatesPath, 'tailwind.config.js');
    const tailwindConfigPath = resolvedConfig.tailwind.config;
    await fs.copy(tailwindConfigRootPath, tailwindConfigPath);
  } catch (err) {
    log.error(`\x1b[31mError: ${err as Error}\x1b[0m`);
  }
}

//updateConfig helper, create default tsconfig.json
function createDefaultTSConfig() {
  return {
    compilerOptions: {
      paths: {
        '@/*': ['./*'],
      },
    },
    exclude: ['node_modules'],
  };
}
// updateConfig helper, read tsconfig.json
async function readTSConfig(configPath: string): Promise<TSConfig> {
  try {
    return JSON.parse(await readFileAsync(configPath, 'utf8'));
  } catch {
    return createDefaultTSConfig();
  }
}
// updateConfig helper, update paths in tsconfig.json
function updatePaths(
  paths: Record<string, string[]>,
  key: string,
  newValues: string[]
): void {
  paths[key] = Array.from(new Set([...(paths[key] || []), ...newValues]));
}
//update tsconfig.json
async function updateTSConfig(
  projectType: string,
  resolvedConfig: any
): Promise<void> {
  try {
    const configPath = resolvedConfig.config.tsConfig;
    let tsConfig: TSConfig = await readTSConfig(configPath);

    tsConfig.compilerOptions = tsConfig.compilerOptions || {};
    tsConfig.compilerOptions.paths = tsConfig.compilerOptions.paths || {};

    // Next.js project specific configuration
    if (projectType === config.nextJsProject) {
      if (config.style === 'nativewind') {
        tsConfig.compilerOptions.jsxImportSource = 'nativewind';
      } else {
        // For uniwind, remove jsxImportSource
        delete tsConfig.compilerOptions.jsxImportSource;
      }
    }
    updatePaths(tsConfig.compilerOptions.paths, '@/*', ['./*']);

    // Only add tailwind.config path for NativeWind (v4 doesn't use it)
    if (config.style === 'nativewind') {
      let tailwindConfig = resolvedConfig.tailwind.config;
      const tailwindConfigFileName = path.basename(tailwindConfig);
      updatePaths(tsConfig.compilerOptions.paths, 'tailwind.config', [
        `./${tailwindConfigFileName}`,
      ]);
    }

    await writeFileAsync(configPath, JSON.stringify(tsConfig, null, 2), 'utf8');
  } catch (err) {
    log.error(
      `\x1b[31mError occurred while updating tsconfig.json: ${
        (err as Error).message
      }\x1b[0m`
    );
  }
}

//update global.css
async function updateGlobalCss(resolvedConfig: any): Promise<void> {
  try {
    const globalCSSPath = resolvedConfig.tailwind.css;
    const templatesPath = getTemplatesPath();
    const cssFileName = path.basename(globalCSSPath);

    // For NativeWind v5, inline the CSS content directly (template not yet in cloned repo)
    if (config.style === 'nativewind-v5') {
      await fs.writeFile(globalCSSPath, NATIVEWIND_V5_GLOBAL_CSS, 'utf8');
      log.info(`✅ Updated ${cssFileName} with NativeWind v5 (Tailwind v4) directives`);
      return;
    }

    // Determine template file based on styling engine
    let templateCSSFile: string;
    if (config.style === 'uniwind') {
      templateCSSFile = 'global-uniwind.css';
    } else {
      // NativeWind v4 supports both globals.css (Next.js) and global.css (Expo/RN CLI)
      const isGlobalsCss = cssFileName === 'globals.css';
      templateCSSFile = isGlobalsCss ? 'globals.css' : 'global.css';
    }

    const templateContent = await fs.readFile(
      join(templatesPath, 'common', templateCSSFile),
      'utf8'
    );

    // For UniWind, replace entire content
    if (config.style === 'uniwind') {
      await fs.writeFile(globalCSSPath, templateContent, 'utf8');
      log.info(`✅ Updated ${cssFileName} with UniWind (Tailwind v4) directives`);
      return;
    }

    // For NativeWind, use existing merge logic
    // Read existing content
    let existingContent = '';
    try {
      existingContent = await fs.readFile(globalCSSPath, 'utf8');
    } catch (error) {
      // File doesn't exist, create it with template content
      await fs.writeFile(globalCSSPath, templateContent, 'utf8');
      return;
    }

    // Clean and normalize the existing content
    let updatedContent = cleanAndNormalizeCss(existingContent, templateContent);

    // Only write if content has changed
    if (updatedContent !== existingContent) {
      await fs.writeFile(globalCSSPath, updatedContent, 'utf8');
      log.info(`✅ Updated ${cssFileName} with Tailwind directives`);
    } else {
      log.info(`${cssFileName} already contains proper Tailwind directives`);
    }
  } catch (err) {
    log.error(`\x1b[31mError updating global CSS: ${(err as Error).message}\x1b[0m`);
  }
}

function cleanAndNormalizeCss(existingContent: string, templateContent: string): string {
  // Split content into lines for easier processing
  let lines = existingContent.split('\n');
  
  // Remove old tailwindcss import if it exists
  lines = lines.filter(line => 
    !line.trim().match(/^@import\s+["']tailwindcss["'];?\s*$/i)
  );

  // Check if any of the required tailwind directives exist
  const requiredDirectives = [
    '@tailwind base;',
    '@tailwind components;', 
    '@tailwind utilities;'
  ];

  const existingDirectives = new Set<string>();
  
  // Find existing tailwind directives and their positions
  const directiveLines: number[] = [];
  
  lines.forEach((line, index) => {
    const trimmedLine = line.trim();
    requiredDirectives.forEach(directive => {
      const directiveWithoutSemicolon = directive.replace(';', '');
      if (
        trimmedLine === directive ||
        trimmedLine === directiveWithoutSemicolon ||
        trimmedLine === directive.replace(';', '') + ' '
      ) {
        existingDirectives.add(directive);
        directiveLines.push(index);
      }
    });
  });

  // If all directives already exist, return original content
  if (existingDirectives.size === requiredDirectives.length) {
    return lines.join('\n');
  }

  // Remove existing tailwind directive lines to avoid duplicates
  lines = lines.filter((_, index) => !directiveLines.includes(index));

  // Find the best position to insert tailwind directives
  let insertPosition = 0;
  
  // Look for existing imports to insert after them
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('@import') || line.startsWith('@charset')) {
      insertPosition = i + 1;
    } else if (line.length > 0 && !line.startsWith('/*') && !line.startsWith('*')) {
      // Found first non-comment, non-import line
      break;
    }
  }

  // Insert the template content (tailwind directives) at the appropriate position
  const templateLines = templateContent.split('\n').filter(line => line.trim());
  
  // Insert template lines
  lines.splice(insertPosition, 0, ...templateLines);

  // Clean up multiple consecutive empty lines
  const cleanedLines: string[] = [];
  let consecutiveEmptyLines = 0;
  
  for (const line of lines) {
    if (line.trim() === '') {
      consecutiveEmptyLines++;
      if (consecutiveEmptyLines <= 1) { // Allow max 1 consecutive empty line
        cleanedLines.push(line);
      }
    } else {
      consecutiveEmptyLines = 0;
      cleanedLines.push(line);
    }
  }

  // Ensure there's a newline at the end
  let result = cleanedLines.join('\n');
  if (!result.endsWith('\n') && result.length > 0) {
    result += '\n';
  }

  return result;
}

async function commonInitialization(
  projectType: string,
  resolvedConfig: any,
  permission: boolean | symbol
) {
  try {
    //get resolvedFileNames from the resolvedConfig
    const resolvedConfigValues = Object.values(resolvedConfig).flat(Infinity);
    const flattenedConfigValues = resolvedConfigValues.flatMap((value) =>
      typeof value === 'string' ? value : Object.values(value as object)
    );
    const resolvedConfigFileNames = flattenedConfigValues
      .map((filePath: any) =>
        typeof filePath === 'string' ? path.parse(filePath).base : null
      )
      .filter((fileName): fileName is string => fileName !== null);

    const templatesPath = getTemplatesPath();
    const resourcePath = join(templatesPath, projectType);

    //if any filepath
    if (existsSync(resourcePath)) {
      const filesAndFolders = fs.readdirSync(resourcePath);

      //if any fileName in resourcePath matches with the resolvedConfigFileNames, copy the file
      await Promise.all(
        filesAndFolders.map(async (file) => {
          let templateFileName = path.parse(file).name;
          const templateFileExt = path.parse(file).ext;

          // Strip styling-engine suffix for template matching
          const isUniwindTemplate = templateFileName.endsWith('.uniwind');
          const isNativewindTemplate = templateFileName.endsWith('.nativewind');
          const isNativewindV5Template = templateFileName.endsWith('.nativewindv5');

          // Skip templates that don't match the current styling engine
          if (config.style === 'nativewind-v5' && (isNativewindTemplate || isUniwindTemplate)) return;
          if (config.style === 'uniwind' && (isNativewindTemplate || isNativewindV5Template)) return;
          if (config.style === 'nativewind' && (isUniwindTemplate || isNativewindV5Template)) return;

          // Remove styling-specific suffix for matching
          if (isUniwindTemplate) {
            templateFileName = templateFileName.replace('.uniwind', '');
          } else if (isNativewindV5Template) {
            templateFileName = templateFileName.replace('.nativewindv5', '');
          } else if (isNativewindTemplate) {
            templateFileName = templateFileName.replace('.nativewind', '');
          }

          // Check if any resolved config file matches this template file
          const matchingConfigFile = resolvedConfigFileNames.find(
            (configFileName: string) => {
              const configName = path.parse(configFileName).name;
              const configExt = path.parse(configFileName).ext;

              // For config files that can have multiple extensions, prioritize exact matches
              if (
                configName === templateFileName &&
                (templateFileName === 'next.config' ||
                  templateFileName === 'postcss.config' ||
                  templateFileName === 'tailwind.config')
              ) {
                // If extensions match exactly, this is the preferred match
                if (configExt === templateFileExt) {
                  return true;
                }

                // Only allow extension mismatch if no template with matching extension exists
                const hasMatchingExtensionTemplate = filesAndFolders.some(
                  (otherFile) => {
                    const otherTemplateName = path.parse(otherFile).name;
                    const otherTemplateExt = path.parse(otherFile).ext;
                    return (
                      otherTemplateName === templateFileName &&
                      otherTemplateExt === configExt
                    );
                  }
                );

                return !hasMatchingExtensionTemplate;
              }

              // For other files, require exact match
              return (
                configName === templateFileName && configExt === templateFileExt
              );
            }
          );

          if (matchingConfigFile) {
            const targetFileName = matchingConfigFile;
            const targetPath = join(_currDir, targetFileName);

            // Ensure the directory exists
            await fs.ensureDir(path.dirname(targetPath));

            // Copy the file with error handling
            try {
              await fs.copy(join(resourcePath, file), targetPath, {
                overwrite: true,
                errorOnExist: false,
              });
            } catch (err) {
              // If the file doesn't exist, create it
              if ((err as NodeJS.ErrnoException).code === 'ENOENT') {
                await fs.writeFile(
                  targetPath,
                  await fs.readFile(join(resourcePath, file))
                );
              } else {
                throw err;
              }
            }
          }
        })
      );
    }

    // Add styling-specific type definitions and extra config files
    if (config.style === 'nativewind-v5') {
      const nativewindEnvPath = join(templatesPath, 'common', 'nativewind-env.d.ts');
      await fs.copy(nativewindEnvPath, join(_currDir, 'nativewind-env.d.ts'));
      // Inline content for files not yet in the cloned repo
      await fs.writeFile(
        join(_currDir, 'react-native-css-env.d.ts'),
        `/// <reference types="react-native-css/types" />\n\n// NOTE: This file should not be edited and should be committed with your source code. It is generated by react-native-css.\n`,
        'utf8'
      );
      await fs.writeFile(
        join(_currDir, 'postcss.config.mjs'),
        `export default {\n  plugins: {\n    '@tailwindcss/postcss': {},\n  },\n};\n`,
        'utf8'
      );
    } else if (config.style === 'uniwind') {
      const uniwindTypesPath = join(templatesPath, 'common', 'uniwind-types.d.ts');
      await fs.copy(uniwindTypesPath, join(_currDir, 'uniwind-types.d.ts'));
    } else {
      const nativewindEnvPath = join(templatesPath, 'common', 'nativewind-env.d.ts');
      await fs.copy(nativewindEnvPath, join(_currDir, 'nativewind-env.d.ts'));
    }

    permission && (await updateTSConfig(projectType, resolvedConfig));
    permission && (await updateGlobalCss(resolvedConfig));
    await updateTailwindConfig(resolvedConfig, projectType);

    // Automatically modify layout files to add GluestackUIProvider wrapper
    await modifyLayoutFilesAutomatically(
      projectType,
      resolvedConfig,
      permission === true
    );
  } catch (err) {
    throw new Error((err as Error).message);
  }
}

//generate project config and initialize
async function generateProjectConfigAndInit(
  projectType: string,
  confirmOverride: boolean | symbol,
  isNextjs15: boolean | undefined
) {
  let permission;
  if (confirmOverride === false || typeof confirmOverride === 'symbol') {
    permission = false;
  } else permission = true;
  let resolvedConfig; // Initialize with a default value
  if (projectType !== 'library') {
    switch (projectType) {
      case config.nextJsProject:
        await generateConfigNextApp(permission, isNextjs15);
        break;
      case config.expoProject:
        await generateConfigExpoApp(permission);
        break;
      case config.reactNativeCLIProject:
        await generateConfigRNApp(permission);
        break;
      default:
        break;
    }
  } else {
    //write function to generate config for monorepo or library
    await generateMonoRepoConfig();
  }
  return resolvedConfig;
}

//files to override in the project directory data
const filesToOverride = (projectType: string) => {
  let files: string[] = [];

  switch (projectType) {
    case config.nextJsProject:
      files = ['next.config.*', 'globals.css', 'tsconfig.json'];
      if (config.style === 'nativewind') {
        files.push('tailwind.config.*', 'postcss.config.*');
      }
      break;
    case config.expoProject:
      files = ['babel.config.js', 'metro.config.js', 'global.css', 'tsconfig.json'];
      if (config.style === 'nativewind') {
        files.push('tailwind.config.*');
      } else if (config.style === 'nativewind-v5') {
        files.push('postcss.config.*');
      }
      break;
    case config.reactNativeCLIProject:
      files = ['babel.config.js', 'metro.config.js', 'global.css', 'tsconfig.json'];
      if (config.style === 'nativewind') {
        files.push('tailwind.config.*');
      }
      break;
    default:
      break;
  }

  return files;
};

// Helper function to calculate the length of the string without ANSI escape codes
function getStringLengthWithoutAnsi(string: string) {
  return string.replace(/\x1b\[[0-9;]*m/g, '').length;
}
//overriding warning message
async function overrideWarning(files: string[]) {
  if (files.length === 0) {
    return true;
  }
  if (config.yesToAll) {
    return true;
  }
  const boxLength = 90;
  console.log(`\x1b[33m
  ┌${'─'.repeat(boxLength)}┐
  │                                                                                          │
  │  NOTE: Files to get modified                                                             │
  │                                                                                          │
  │  The command you've run is attempting to modify certain files in your project,           │
  │  if already exist. Here's what's happening:                                              │
  │                                                                                          │
${files
  .map(
    (file) =>
      `  │  - ${file}${' '.repeat(
        boxLength - getStringLengthWithoutAnsi(`  │  - ${file}`) + 3
      )}│`
  )
  .join('\n')}
  │                                                                                          │
  └${'─'.repeat(boxLength)}┘
  \x1b[0m`);

  const confirmInput = await confirm({
    message: `\x1b[33mProceed with caution. Make sure to commit your changes before proceeding. Continue?
    \x1b[0m`,
  });
  if (confirmInput === false) {
    log.info(
      'Skipping making changes in files. Please refer docs for making the changes manually --> \x1b[33mhttps://gluestack.io/ui/docs/home/getting-started/installation\x1b[0m'
    );
  }
  return confirmInput;
}

export { InitializeGlueStack, commonInitialization };
