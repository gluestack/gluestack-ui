import { Command } from 'commander';
import { log, spinner, confirm, select, isCancel, cancel, text } from '@clack/prompts';
import fs from 'fs-extra';
import path from 'path';
import { spawnSync } from 'child_process';
import simpleGit from 'simple-git';

// Utility: Is this an old gluestack package?
function isOldGluestackPackage(pkg: string): boolean {
  return (
    !pkg.includes('nightly') &&
    (pkg.startsWith('@gluestack-ui') ||
      pkg.startsWith('gluestack') ||
      pkg.startsWith('@gluestack'))
  );
}

// Extract the major version number from a semver string (e.g. "^3.0.10" → 3)
function getMajorVersion(versionStr: string): number | null {
  const cleaned = versionStr.replace(/^[\^~>=<]+/, '');
  const match = cleaned.match(/^(\d+)/);
  return match ? parseInt(match[1], 10) : null;
}

// Detect current gluestack-ui version from package.json
async function detectCurrentVersion(): Promise<'v2' | 'v3' | 'v4-nativewind' | 'v4-uniwind' | 'unknown'> {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  if (!fs.existsSync(packageJsonPath)) return 'unknown';

  const pkgJson = await fs.readJSON(packageJsonPath);
  const deps = { ...pkgJson.dependencies, ...pkgJson.devDependencies };

  // v2 indicators
  if (deps['@gluestack-ui/themed'] || deps['@gluestack-ui/config']) {
    return 'v2';
  }

  // Check major version of @gluestack-ui/core
  const coreVersion = deps['@gluestack-ui/core'];
  if (coreVersion) {
    const major = getMajorVersion(coreVersion);
    if (major !== null) {
      if (major >= 4) {
        // Distinguish between NativeWind-based v4 and UniWind-based v4
        return deps['uniwind'] ? 'v4-uniwind' : 'v4-nativewind';
      }
      if (major === 3) return 'v3';
    }
  }

  // Fallback v3 indicator: nativewind-utils package (pre-v4 package)
  if (deps['@gluestack-ui/nativewind-utils']) {
    return 'v3';
  }

  return 'unknown';
}

// Detect project type (Next.js, Expo, or React Native CLI)
async function detectProjectType(): Promise<'nextjs' | 'expo' | 'react-native-cli' | 'unknown'> {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  if (!fs.existsSync(packageJsonPath)) return 'unknown';

  const pkgJson = await fs.readJSON(packageJsonPath);
  const deps = { ...pkgJson.dependencies, ...pkgJson.devDependencies };

  if (deps['next']) return 'nextjs';
  if (deps['expo']) return 'expo';
  if (deps['react-native'] && !deps['expo']) return 'react-native-cli';

  return 'unknown';
}

// Detect package manager from lock files
function detectPackageManager(): string {
  if (fs.existsSync(path.join(process.cwd(), 'yarn.lock'))) return 'yarn';
  if (fs.existsSync(path.join(process.cwd(), 'pnpm-lock.yaml'))) return 'pnpm';
  if (fs.existsSync(path.join(process.cwd(), 'bun.lock')) ||
      fs.existsSync(path.join(process.cwd(), 'bun.lockb'))) return 'bun';
  return 'npm';
}

// Install v4 packages based on project type
function installV4Packages(
  packageManager: string,
  projectType: 'nextjs' | 'expo' | 'react-native-cli' | 'unknown'
): void {
  const s = spinner();
  s.start('Installing gluestack-ui v4 packages...');

  // Gluestack packages that are always installed via the regular package manager
  const gluestackPackages = [
    '@gluestack-ui/core@^4.0.0-alpha.0',
    '@gluestack-ui/utils@^4.0.0-alpha.0',
    'tailwind-variants@^0.1.20',
    'nativewind@^4.1.23',
  ];

  if (projectType === 'nextjs') {
    gluestackPackages.push('@gluestack/ui-next-adapter@^4.0.0-alpha.0');
  }

  const cmds: { [key: string]: string } = {
    npm: 'npm install',
    yarn: 'yarn add',
    pnpm: 'pnpm add',
    bun: 'bun add',
  };
  const cmd = cmds[packageManager];
  if (!cmd) throw new Error('Unsupported package manager');

  const gluestackResult = spawnSync(cmd, gluestackPackages, {
    cwd: process.cwd(),
    stdio: 'inherit',
    shell: true,
  });
  if (gluestackResult.error || gluestackResult.status !== 0) {
    s.stop('Failed to install gluestack v4 packages.');
    throw new Error('Failed to install gluestack v4 packages');
  }

  let nativeResult;

  if (projectType === 'expo') {
    // For Expo projects use `npx expo install` so Expo resolves the exact
    // package versions that are compatible with the installed Expo SDK.
    // This is critical for native packages like react-native-reanimated whose
    // native binary is baked into the Expo Go app — installing the wrong JS
    // version causes a "Mismatch between JavaScript part and native part of
    // Worklets" error at runtime.
    //
    // NOTE: react-native-worklets is intentionally omitted here. It is a peer
    // dependency of react-native-reanimated; after `expo install reanimated`
    // resolves the correct reanimated version, running `expo install --fix`
    // ensures peer deps (including worklets) are also resolved at the matching
    // SDK-compatible version instead of defaulting to npm latest.
    const expoNativePackages = [
      'react-native-reanimated',
      '@legendapp/motion',
      'react-native-svg',
      'react-native-safe-area-context',
      '@expo/html-elements',
    ];

    nativeResult = spawnSync('npx expo install', expoNativePackages, {
      cwd: process.cwd(),
      stdio: 'inherit',
      shell: true,
    });

    if (nativeResult.error || nativeResult.status !== 0) {
      s.stop('Failed to install native v4 packages.');
      throw new Error('Failed to install native v4 packages');
    }

    // Resolve peer dependencies (including react-native-worklets) at the
    // SDK-compatible version chosen by expo install above.
    const fixResult = spawnSync('npx expo install --fix', [], {
      cwd: process.cwd(),
      stdio: 'inherit',
      shell: true,
    });

    if (fixResult.error || fixResult.status !== 0) {
      log.warning('⚠ expo install --fix failed. Check your peer dependencies manually.');
    }
  } else {
    // For non-Expo projects use pinned tested versions.
    const versionedNativePackages = [
      'react-native-reanimated@~4.2.1',
      // react-native-worklets must stay in the same minor as reanimated's
      // bundled native worklets binary (4.2.x bundles worklets 0.7.x).
      'react-native-worklets@~0.7.1',
      '@legendapp/motion@^2.4.0',
      'react-native-svg@^15.12.0',
    ];

    if (projectType === 'nextjs') {
      versionedNativePackages.push(
        'react-native-web@^0.20.0',
        'react-native-safe-area-context@^5.6.1',
        'dom-helpers@^5.2.1'
      );
    }

    if (projectType === 'react-native-cli') {
      versionedNativePackages.push(
        'react-native-safe-area-context@^5.6.1',
        '@expo/html-elements@^0.12.5',
      );
    }

    nativeResult = spawnSync(cmd, versionedNativePackages, {
      cwd: process.cwd(),
      stdio: 'inherit',
      shell: true,
    });

    if (nativeResult.error || nativeResult.status !== 0) {
      s.stop('Failed to install native v4 packages.');
      throw new Error('Failed to install native v4 packages');
    }
  }

  s.stop('v4 packages installed.');
}

// Update babel.config.js to add react-native-worklets/plugin
async function updateBabelConfig(): Promise<void> {
  const s = spinner();
  s.start('Updating babel config...');

  const babelPath = path.join(process.cwd(), 'babel.config.js');
  if (!fs.existsSync(babelPath)) {
    s.stop('No babel.config.js found. Skipping babel update.');
    return;
  }

  try {
    const content = await fs.readFile(babelPath, 'utf8');

    // Check if worklets plugin already exists
    if (content.includes('react-native-worklets/plugin')) {
      s.stop('Babel config already has worklets plugin.');
      return;
    }

    let newContent = content;
    let updated = false;

    // Try to add worklets plugin to plugins array
    // Look for plugins: [ ... ] pattern
    const pluginsArrayRegex = /(plugins:\s*\[)([\s\S]*?)(\])/;
    const match = newContent.match(pluginsArrayRegex);

    if (match) {
      // Add worklets plugin at the end of plugins array
      const beforePlugins = match[1];
      const pluginsContent = match[2];
      const afterPlugins = match[3];

      // Add comma if plugins array is not empty
      const needsComma = pluginsContent.trim().length > 0;
      const newPlugin = needsComma
        ? `,\n    'react-native-worklets/plugin'`
        : `'react-native-worklets/plugin'`;

      newContent = newContent.replace(
        pluginsArrayRegex,
        `${beforePlugins}${pluginsContent}${newPlugin}\n  ${afterPlugins}`
      );
      updated = true;
    }

    if (updated) {
      await fs.writeFile(babelPath, newContent, 'utf8');
      log.info('✓ Added react-native-worklets/plugin to babel.config.js');
    } else {
      log.warning('⚠ Could not automatically update babel.config.js');
      log.warning('  Please manually add "react-native-worklets/plugin" to your plugins array');
    }

    s.stop('Babel config processed.');
  } catch (error) {
    s.stop('Failed to update babel config.');
    log.warning('⚠ Please manually add "react-native-worklets/plugin" to babel.config.js');
  }
}

// Detect old gluestack packages in package.json
async function detectOldPackages(): Promise<string[]> {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  if (!fs.existsSync(packageJsonPath)) throw new Error('No package.json found');
  const pkgJson = await fs.readJSON(packageJsonPath);
  const allDeps = { ...pkgJson.dependencies, ...pkgJson.devDependencies };
  return Object.keys(allDeps).filter(isOldGluestackPackage);
}

// Check for uncommitted git changes
async function hasUncommittedChanges(): Promise<boolean> {
  try {
    const git = simpleGit(process.cwd());
    const status = await git.status();
    return status.files.length > 0;
  } catch {
    return false;
  }
}

// Remove old packages
function removePackages(packages: string[], packageManager: string): void {
  if (!packages.length) return;
  const s = spinner();
  s.start('Removing old gluestack packages...');
  const cmds: { [key: string]: string } = {
    npm: 'npm uninstall',
    yarn: 'yarn remove',
    pnpm: 'pnpm remove',
    bun: 'bun remove',
  };
  const cmd = cmds[packageManager];
  if (!cmd) throw new Error('Unsupported package manager');
  const result = spawnSync(cmd, packages, {
    cwd: process.cwd(),
    stdio: 'inherit',
    shell: true,
  });
  if (result.error || result.status !== 0)
    throw new Error('Failed to remove packages');
  s.stop('Old packages removed.');
}

// Clean node_modules and reinstall dependencies
function cleanAndReinstall(packageManager: string): void {
  const s = spinner();
  s.start('Cleaning node_modules and reinstalling dependencies...');

  const nodeModulesPath = path.join(process.cwd(), 'node_modules');
  const lockFiles: { [key: string]: string[] } = {
    npm: ['package-lock.json'],
    yarn: ['yarn.lock'],
    pnpm: ['pnpm-lock.yaml'],
    bun: ['bun.lock', 'bun.lockb'],
  };

  try {
    // Remove node_modules
    if (fs.existsSync(nodeModulesPath)) {
      fs.removeSync(nodeModulesPath);
    }

    // Remove lock file(s)
    const lockFilesToRemove = lockFiles[packageManager] ?? [];
    for (const lockFile of lockFilesToRemove) {
      const lockFilePath = path.join(process.cwd(), lockFile);
      if (fs.existsSync(lockFilePath)) {
        fs.removeSync(lockFilePath);
      }
    }

    // Reinstall all dependencies
    const installCmds: { [key: string]: string } = {
      npm: 'npm install',
      yarn: 'yarn install',
      pnpm: 'pnpm install',
      bun: 'bun install',
    };
    const installCmd = installCmds[packageManager];

    const result = spawnSync(installCmd, [], {
      cwd: process.cwd(),
      stdio: 'inherit',
      shell: true,
    });
    if (result.error || result.status !== 0)
      throw new Error('Failed to reinstall dependencies');

    s.stop('Dependencies reinstalled successfully.');
  } catch (error) {
    s.stop('Failed to clean and reinstall.');
    throw error;
  }
}

// Install new packages for v2→v3 upgrade
function installPackages(
  packageManager: string,
  projectType: 'nextjs' | 'expo' | 'react-native-cli' | 'unknown'
): void {
  const s = spinner();
  s.start('Installing @gluestack-ui/core and @gluestack-ui/utils...');
  const cmds: { [key: string]: string } = {
    npm: 'npm install',
    yarn: 'yarn add',
    pnpm: 'pnpm add',
    bun: 'bun add',
  };
  const cmd = cmds[packageManager];
  if (!cmd) throw new Error('Unsupported package manager');
  const pkgs = [
    '@gluestack-ui/core@3.0.10',
    '@gluestack-ui/utils@3.0.11',
    'react-native-svg@15.13.0',
  ];
  // Only install the Next.js adapter for Next.js projects
  if (projectType === 'nextjs') {
    pkgs.push('@gluestack/ui-next-adapter@3.0.3');
  }
  const result = spawnSync(cmd, pkgs, {
    cwd: process.cwd(),
    stdio: 'inherit',
    shell: true,
  });
  if (result.error || result.status !== 0)
    throw new Error('Failed to install new packages');
  s.stop('New packages installed.');
}

// Update registry.tsx file in app folder (Next.js 15)
async function updateRegistryFile(): Promise<void> {
  const s = spinner();
  s.start('Updating registry.tsx...');

  const registryPath = path.join(process.cwd(), 'app', 'registry.tsx');
  if (!fs.existsSync(registryPath)) {
    s.stop('No app/registry.tsx found.');
    return;
  }

  try {
    const content = await fs.readFile(registryPath, 'utf8');
    let updated = false;
    let newContent = content;

    // Replace the flush import
    const flushImportRegex =
      /import\s+\{\s*flush\s*\}\s+from\s+['"]@gluestack-ui\/nativewind-utils\/flush['"];?\s*/g;
    if (flushImportRegex.test(newContent)) {
      newContent = newContent.replace(
        flushImportRegex,
        `import { flush } from "@gluestack-ui/utils/nativewind-utils";\n`
      );
      updated = true;
    }

    if (updated) {
      await fs.writeFile(registryPath, newContent, 'utf8');
      log.info(`Updated app/registry.tsx`);
    }

    s.stop('Registry file updated.');
  } catch (error) {
    s.stop('Failed to update registry file.');
    log.warning(`Failed to update app/registry.tsx: ${error}`);
  }
}

// Update tailwind config files to remove old gluestack plugin
async function updateTailwindConfig(): Promise<void> {
  const s = spinner();
  s.start('Updating tailwind config files...');

  const tailwindConfigPaths = [
    path.join(process.cwd(), 'tailwind.config.ts'),
    path.join(process.cwd(), 'tailwind.config.js'),
  ];

  let updatedAny = false;

  for (const tailwindConfigPath of tailwindConfigPaths) {
    if (!fs.existsSync(tailwindConfigPath)) {
      continue;
    }

    try {
      const content = await fs.readFile(tailwindConfigPath, 'utf8');
      let updated = false;
      let newContent = content;

      // Remove the import statement
      const importRegex =
        /import\s+gluestackPlugin\s+from\s+['"]@gluestack-ui\/nativewind-utils\/tailwind-plugin['"];?\s*/g;
      if (importRegex.test(newContent)) {
        newContent = newContent.replace(importRegex, '');
        updated = true;
      }

      // Remove the plugin from the plugins array
      const pluginRegex = /plugins:\s*\[([^\]]*gluestackPlugin[^\]]*)\]/g;
      newContent = newContent.replace(pluginRegex, (_match, pluginsContent) => {
        // Remove gluestackPlugin from the plugins array
        const updatedPlugins = pluginsContent
          .split(',')
          .map((plugin: string) => plugin.trim())
          .filter((plugin: string) => !plugin.includes('gluestackPlugin'))
          .join(', ');

        updated = true;
        return `plugins: [${updatedPlugins}]`;
      });

      // Clean up empty plugins array
      newContent = newContent.replace(/plugins:\s*\[\s*\]/g, 'plugins: []');

      if (updated) {
        await fs.writeFile(tailwindConfigPath, newContent, 'utf8');
        const fileName = path.basename(tailwindConfigPath);
        log.info(`Updated ${fileName}`);
        updatedAny = true;
      }
    } catch (error) {
      const fileName = path.basename(tailwindConfigPath);
      log.warning(`Failed to update ${fileName}: ${error}`);
    }
  }

  if (updatedAny) {
    s.stop('Tailwind config files updated.');
  } else {
    s.stop('No tailwind config files found or updated.');
  }
}

// Update Next.js config files
async function updateNextConfig(): Promise<void> {
  const s = spinner();
  s.start('Updating Next.js config files...');

  const nextConfigPaths = [
    path.join(process.cwd(), 'next.config.ts'),
    path.join(process.cwd(), 'next.config.js'),
    path.join(process.cwd(), 'next.config.mjs'),
  ];

  let updatedFiles = 0;

  for (const configPath of nextConfigPaths) {
    if (!fs.existsSync(configPath)) {
      continue;
    }

    try {
      const content = await fs.readFile(configPath, 'utf8');
      let updated = false;
      let newContent = content;

      // Replace the old import statement
      const importRegex =
        /import\s+\{\s*withGluestackUI\s*\}\s+from\s+['"]@gluestack\/ui-next-adapter['"];?\s*/g;
      if (importRegex.test(newContent)) {
        newContent = newContent.replace(
          importRegex,
          `import { withGluestackUI } from "@gluestack/ui-next-adapter";\n`
        );
        updated = true;
      }

      if (updated) {
        await fs.writeFile(configPath, newContent, 'utf8');
        const fileName = path.basename(configPath);
        log.info(`Updated ${fileName}`);
        updatedFiles++;
      }
    } catch (error) {
      const fileName = path.basename(configPath);
      log.warning(`Failed to update ${fileName}: ${error}`);
    }
  }

  if (updatedFiles > 0) {
    s.stop('Next.js config files updated.');
  } else {
    s.stop('No Next.js config files found or updated.');
  }
}

// Update import statements in components/ui folder
async function updateImports(): Promise<void> {
  const s = spinner();
  s.start('Updating import statements...');

  let componentsPath = path.join(process.cwd(), 'components', 'ui');
  if (!fs.existsSync(componentsPath)) {
    s.stop('No components/ui folder found.');
    const customPath = await text({
      message:
        'Please provide the path to your components folder (relative to project root):',
      placeholder: 'e.g., src/components, lib/components, app/components',
      validate: (value) => {
        if (!value) return 'Path is required';
        const fullPath = path.join(process.cwd(), value);
        if (!fs.existsSync(fullPath)) {
          return `Path "${value}" does not exist`;
        }
        return;
      },
    });

    if (isCancel(customPath)) {
      cancel('Upgrade cancelled.');
      process.exit(0);
    }

    componentsPath = path.join(process.cwd(), customPath);
    s.start('Updating import statements...');
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

      // Check if it's a utils import (already in correct format)
      if (importPath.startsWith('@gluestack-ui/utils/')) {
        // Already in the correct format, don't modify
        return match;
      }

      // Check if already upgraded (contains /core/ and ends with /creator)
      if (importPath.includes('/core/') && importPath.endsWith('/creator')) {
        // Already in the new format, don't modify
        return match;
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

// Upgrade from v2 to v3
async function upgradeV2ToV3(packageManager: string): Promise<void> {
  const projectType = await detectProjectType();
  log.info(`Detected project type: ${projectType}`);

  const oldPackages = await detectOldPackages();
  if (oldPackages.length) {
    log.info('Found old packages:');
    oldPackages.forEach((pkg: string) => log.info('  - ' + pkg));
  }

  await updateTailwindConfig();

  // Do not remove packages that we want to keep/install
  const retainSet = new Set(['@gluestack-ui/core', '@gluestack-ui/utils']);
  const packagesToRemove = oldPackages.filter(
    (pkg: string) => !retainSet.has(pkg)
  );

  // Remove old packages first, then install required ones
  removePackages(packagesToRemove, packageManager);
  installPackages(packageManager, projectType);
  cleanAndReinstall(packageManager);
  await updateRegistryFile();
  await updateNextConfig();
  await updateImports();
}

// Upgrade from v3 to v4
async function upgradeV3ToV4(packageManager: string): Promise<void> {
  // Detect project type
  const projectType = await detectProjectType();
  log.info(`Detected project type: ${projectType}`);

  if (projectType === 'unknown') {
    log.warning('Could not auto-detect project type.');
    const proceed = await confirm({
      message: 'Continue with default configuration?',
    });
    if (isCancel(proceed) || !proceed) {
      cancel('Upgrade cancelled.');
      process.exit(0);
    }
  }

  // Step 1: Detect and remove old v3 packages (excluding ones being replaced by v4)
  const oldPackages = await detectOldPackages();
  if (oldPackages.length > 0) {
    log.info('Found old gluestack packages to remove:');
    oldPackages.forEach((pkg: string) => log.info('  - ' + pkg));
    removePackages(oldPackages, packageManager);
  }

  // Step 2: Install v4 packages
  installV4Packages(packageManager, projectType);

  // Step 3: Update babel config for worklets (Expo/RN CLI only)
  if (projectType === 'expo' || projectType === 'react-native-cli') {
    await updateBabelConfig();
  }

  // Step 4: Clean and reinstall all dependencies
  cleanAndReinstall(packageManager);

  // Step 5: Update Next.js specific files if applicable
  if (projectType === 'nextjs') {
    await updateRegistryFile();
    await updateNextConfig();
  }

  // Step 6: No import updates needed (v3 and v4 use same format)
  log.info('✓ Import statements are already compatible with v4!');

  // Step 7: Remind about native rebuild. For Expo Go (managed workflow) the
  // native runtime is baked into the Expo Go app itself — expo install already
  // resolved the correct compatible versions so no rebuild is needed.
  // For bare Expo / React Native CLI projects a native rebuild IS required.
  if (projectType === 'expo') {
    const hasBareNative =
      fs.existsSync(path.join(process.cwd(), 'ios')) ||
      fs.existsSync(path.join(process.cwd(), 'android'));

    if (hasBareNative) {
      log.warning(
        '⚠ Bare workflow detected. Rebuild your native app to pick up the new native binaries:'
      );
      log.info('  iOS:     cd ios && pod install && npx expo run:ios');
      log.info('  Android: npx expo run:android');
    }
    // Managed workflow (Expo Go): expo install already ensured correct versions — nothing more to do.
  } else if (projectType === 'react-native-cli') {
    log.warning('⚠ Rebuild your native app to apply the new native binaries:');
    log.info('  iOS:     cd ios && pod install && npx react-native run-ios');
    log.info('  Android: npx react-native run-android');
  }

  log.success('✓ v3 to v4 upgrade complete!');
}

// UniWind global.css content (Tailwind v4 + :where() selectors)
const UNIWIND_GLOBAL_CSS = `@import 'tailwindcss';
@import 'uniwind';
/* ─── UniWind theme variants ─────────────────────────────────────
   Switched at runtime via Uniwind.setTheme('light' | 'dark' | 'system').
   Uses :where(.dark, .dark *) selectors so that:
     • Web:    selector matches html.dark directly, no nesting issues
     • Native: ProcessorBuilder recognises :where(.dark) → theme-scoped vars  */
@layer theme {
  :where(.light, .light *) {
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

  @media (prefers-color-scheme: light) {
    :root:not(:where(.light, .light *, .dark, .dark *)) {
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

  :where(.dark, .dark *) {
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

  @media (prefers-color-scheme: dark) {
    :root:not(:where(.light, .light *, .dark, .dark *)) {
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
}

/* ─── Tailwind v4 color mappings ─────────────────────────────────
   Maps the theme CSS variables above to Tailwind color utilities.
   bg-primary → rgb(var(--primary)), text-foreground → rgb(var(--foreground)), etc. */
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

// UniWind types declaration file content
const UNIWIND_TYPES_DTS = `// NOTE: This file is generated by uniwind and it should not be edited manually.
/// <reference types="uniwind/types" />

declare module 'uniwind' {
    export interface UniwindConfig {
        themes: readonly ['light', 'dark']
    }
}

export {}
`;

// Install/remove packages for NativeWind → UniWind migration
function migratePackagesToUniwind(packageManager: string): void {
  const s = spinner();
  s.start('Migrating packages from NativeWind to UniWind...');

  const cmds: { [key: string]: string } = {
    npm: 'npm install',
    yarn: 'yarn add',
    pnpm: 'pnpm add',
    bun: 'bun add',
  };
  const removeCmds: { [key: string]: string } = {
    npm: 'npm uninstall',
    yarn: 'yarn remove',
    pnpm: 'pnpm remove',
    bun: 'bun remove',
  };

  const installCmd = cmds[packageManager];
  const removeCmd = removeCmds[packageManager];
  if (!installCmd || !removeCmd) throw new Error('Unsupported package manager');

  // Remove NativeWind packages
  const packagesToRemove = ['nativewind'];
  const removeResult = spawnSync(removeCmd, packagesToRemove, {
    cwd: process.cwd(),
    stdio: 'inherit',
    shell: true,
  });
  if (removeResult.error || removeResult.status !== 0) {
    s.stop('Warning: Failed to remove nativewind package.');
    log.warning('⚠ Could not remove nativewind automatically. Remove it manually.');
  }

  // Install UniWind packages
  const packagesToInstall = [
    'uniwind@^1.3.0',
    '@gluestack-ui/core@^4.1.0-alpha.0',
    '@gluestack-ui/utils@^4.1.0-alpha.0',
  ];
  const installResult = spawnSync(installCmd, packagesToInstall, {
    cwd: process.cwd(),
    stdio: 'inherit',
    shell: true,
  });
  if (installResult.error || installResult.status !== 0) {
    s.stop('Failed to install UniWind packages.');
    throw new Error('Failed to install UniWind packages');
  }

  // Upgrade tailwindcss to v4 (dev dependency)
  const devCmds: { [key: string]: string } = {
    npm: 'npm install --save-dev',
    yarn: 'yarn add --dev',
    pnpm: 'pnpm add -D',
    bun: 'bun add --dev',
  };
  const devCmd = devCmds[packageManager];
  const devResult = spawnSync(devCmd, ['tailwindcss@^4.1.18'], {
    cwd: process.cwd(),
    stdio: 'inherit',
    shell: true,
  });
  if (devResult.error || devResult.status !== 0) {
    log.warning('⚠ Could not upgrade tailwindcss to v4. Run manually: ' + devCmd + ' tailwindcss@^4.1.18');
  }

  s.stop('Packages migrated to UniWind.');
}

// Update metro.config.js from NativeWind to UniWind
async function updateMetroConfigForUniwind(): Promise<void> {
  const s = spinner();
  s.start('Updating metro.config.js for UniWind...');

  const metroConfigPath = path.join(process.cwd(), 'metro.config.js');
  if (!fs.existsSync(metroConfigPath)) {
    s.stop('No metro.config.js found. Skipping.');
    return;
  }

  try {
    let content = await fs.readFile(metroConfigPath, 'utf8');

    // Replace nativewind/metro import with uniwind/metro
    content = content.replace(
      /require\(['"]nativewind\/metro['"]\)/g,
      "require('uniwind/metro')"
    );

    // Replace withNativeWind with withUniwindConfig
    content = content.replace(/\bwithNativeWind\b/g, 'withUniwindConfig');

    // Replace NativeWind-specific options with UniWind options
    // Matches: withUniwindConfig(config, { input: './global.css', inlineRem: 16 })
    // or any variation with those keys
    content = content.replace(
      /withUniwindConfig\s*\(\s*(\w+)\s*,\s*\{[^}]*\}\s*\)/g,
      (match, configVar) => {
        return `withUniwindConfig(${configVar}, {\n  cssEntryFile: './global.css',\n  dtsFile: './uniwind-types.d.ts',\n  extraThemes: ['dark'],\n})`;
      }
    );

    await fs.writeFile(metroConfigPath, content, 'utf8');
    log.info('✓ Updated metro.config.js');
    s.stop('metro.config.js updated.');
  } catch (error) {
    s.stop('Failed to update metro.config.js.');
    log.warning('⚠ Please manually update metro.config.js:');
    log.warning("  Replace: require('nativewind/metro') → require('uniwind/metro')");
    log.warning("  Replace: withNativeWind → withUniwindConfig");
    log.warning("  Update options: { cssEntryFile: './global.css', dtsFile: './uniwind-types.d.ts', extraThemes: ['dark'] }");
  }
}

// Replace global.css content with UniWind CSS
async function replaceGlobalCssForUniwind(): Promise<void> {
  const s = spinner();
  s.start('Updating global.css for UniWind (Tailwind v4)...');

  const cssPath = path.join(process.cwd(), 'global.css');
  if (!fs.existsSync(cssPath)) {
    // Try globals.css (Next.js)
    const globalsCssPath = path.join(process.cwd(), 'globals.css');
    if (fs.existsSync(globalsCssPath)) {
      await fs.writeFile(globalsCssPath, UNIWIND_GLOBAL_CSS, 'utf8');
      log.info('✓ Updated globals.css with UniWind (Tailwind v4) theme');
      s.stop('CSS updated.');
      return;
    }
    // Create global.css if neither exists
    await fs.writeFile(cssPath, UNIWIND_GLOBAL_CSS, 'utf8');
    log.info('✓ Created global.css with UniWind (Tailwind v4) theme');
  } else {
    await fs.writeFile(cssPath, UNIWIND_GLOBAL_CSS, 'utf8');
    log.info('✓ Replaced global.css with UniWind (Tailwind v4) theme');
  }

  s.stop('CSS updated.');
}

// Remove tailwind.config.js (not needed in Tailwind v4 / UniWind)
async function removeTailwindConfig(): Promise<void> {
  const tailwindConfigPaths = [
    path.join(process.cwd(), 'tailwind.config.js'),
    path.join(process.cwd(), 'tailwind.config.ts'),
  ];

  for (const configPath of tailwindConfigPaths) {
    if (fs.existsSync(configPath)) {
      const fileName = path.basename(configPath);
      await fs.remove(configPath);
      log.info(`✓ Removed ${fileName} (color tokens are now in global.css)`);
    }
  }
}

// Replace nativewind-env.d.ts with uniwind-types.d.ts
async function migrateTypeDefinitions(): Promise<void> {
  const s = spinner();
  s.start('Migrating type definitions...');

  const nativewindEnvPath = path.join(process.cwd(), 'nativewind-env.d.ts');
  if (fs.existsSync(nativewindEnvPath)) {
    await fs.remove(nativewindEnvPath);
    log.info('✓ Removed nativewind-env.d.ts');
  }

  const uniwindTypesPath = path.join(process.cwd(), 'uniwind-types.d.ts');
  await fs.writeFile(uniwindTypesPath, UNIWIND_TYPES_DTS, 'utf8');
  log.info('✓ Created uniwind-types.d.ts');

  s.stop('Type definitions updated.');
}

// ─── NativeWind v5 global.css template ────────────────────────────────────────
const NATIVEWIND_V5_GLOBAL_CSS = `@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/preflight.css" layer(base);
@import "tailwindcss/utilities.css";
@import "nativewind/theme";

/* ─── Theme: design tokens (light / dark) ─────────────────────────
   Three selectors, two purposes:
   1. :root              — light defaults (all platforms)
   2. @media dark :root  — dark defaults; nativewind converts this to
                           Appearance.getColorScheme() on native.
                           On web it still fires based on OS preference.
   3. :root.dark / :root.light — specificity (0,2,0), beats the media
                           query (0,1,0) within the same layer, so the
                           GluestackUIProvider class-based toggle always
                           wins on web. Ignored on native (no DOM). */
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

  /* Web-only: higher specificity (0,2,0) overrides the media query (0,1,0).
     GluestackUIProvider adds .dark or .light to <html> on every toggle. */
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

/* ─── Tailwind v4 color utilities ─────────────────────────────────
   bg-primary, text-foreground, border-border, etc. */
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

// NativeWind v5 react-native-css types declaration file
const REACT_NATIVE_CSS_ENV_DTS = `/// <reference types="react-native-css/types" />

// NOTE: This file is generated by react-native-css and it should not be edited manually.
// If you need to move or disable this file, please see the documentation.
`;

// Pin lightningcss to a known-good version in package.json
async function pinLightningcss(): Promise<void> {
  const s = spinner();
  s.start('Pinning lightningcss version in package.json...');

  const packageJsonPath = path.join(process.cwd(), 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    s.stop('No package.json found. Skipping lightningcss pin.');
    return;
  }

  try {
    const pkg = await fs.readJSON(packageJsonPath);
    // Use overrides for npm/bun, resolutions for yarn/pnpm
    if (!pkg.overrides) pkg.overrides = {};
    if (!pkg.resolutions) pkg.resolutions = {};
    pkg.overrides['lightningcss'] = '1.30.1';
    pkg.resolutions['lightningcss'] = '1.30.1';
    await fs.writeJSON(packageJsonPath, pkg, { spaces: 2 });
    log.info('✓ Pinned lightningcss@1.30.1 in package.json overrides and resolutions');
    s.stop('lightningcss pinned.');
  } catch (error) {
    s.stop('Failed to pin lightningcss.');
    log.warning('⚠ Manually add to package.json: "overrides": { "lightningcss": "1.30.1" }');
  }
}

// Upgrade nativewind v4 → v5, add react-native-css, upgrade tailwindcss to v4
function migratePackagesToNativewindV5(packageManager: string): void {
  const s = spinner();
  s.start('Upgrading packages to NativeWind v5...');

  const cmds: { [key: string]: string } = {
    npm: 'npm install',
    yarn: 'yarn add',
    pnpm: 'pnpm add',
    bun: 'bun add',
  };
  const devCmds: { [key: string]: string } = {
    npm: 'npm install --save-dev',
    yarn: 'yarn add --dev',
    pnpm: 'pnpm add -D',
    bun: 'bun add --dev',
  };
  const removeCmds: { [key: string]: string } = {
    npm: 'npm uninstall',
    yarn: 'yarn remove',
    pnpm: 'pnpm remove',
    bun: 'bun remove',
  };

  const installCmd = cmds[packageManager];
  const devCmd = devCmds[packageManager];
  const removeCmd = removeCmds[packageManager];
  if (!installCmd || !devCmd || !removeCmd) throw new Error('Unsupported package manager');

  // Step 1: Remove old nativewind v4
  const removeResult = spawnSync(removeCmd, ['nativewind'], {
    cwd: process.cwd(),
    stdio: 'inherit',
    shell: true,
  });
  if (removeResult.error || removeResult.status !== 0) {
    log.warning('⚠ Could not remove nativewind v4 automatically. Remove it manually.');
  }

  // Step 2: Install nativewind v5 + react-native-css
  const installResult = spawnSync(installCmd, [
    'nativewind@^5.0.0-preview.2',
    'react-native-css@^3.0.4',
  ], {
    cwd: process.cwd(),
    stdio: 'inherit',
    shell: true,
  });
  if (installResult.error || installResult.status !== 0) {
    s.stop('Failed to install NativeWind v5 packages.');
    throw new Error('Failed to install NativeWind v5 packages');
  }

  // Step 3: Upgrade tailwindcss to v4 + add @tailwindcss/postcss + postcss
  const devResult = spawnSync(devCmd, [
    'tailwindcss@^4.2.0',
    '@tailwindcss/postcss@^4.2.0',
    'postcss@^8.5.0',
  ], {
    cwd: process.cwd(),
    stdio: 'inherit',
    shell: true,
  });
  if (devResult.error || devResult.status !== 0) {
    log.warning('⚠ Could not upgrade tailwindcss. Run manually: ' + devCmd + ' tailwindcss@^4.2.0 @tailwindcss/postcss@^4.2.0');
  }

  s.stop('NativeWind v5 packages installed.');
}

// Replace global.css with NativeWind v5 format
// If the existing file has custom @layer theme content, it is preserved.
// Otherwise the default gluestack token values are written.
async function updateGlobalCssForNativewindV5(): Promise<void> {
  const s = spinner();
  s.start('Updating global.css for NativeWind v5...');

  const cssPath = path.join(process.cwd(), 'global.css');
  const globalsCssPath = path.join(process.cwd(), 'globals.css');
  const targetPath = fs.existsSync(cssPath) ? cssPath : globalsCssPath;

  let existingThemeBlock = '';

  if (fs.existsSync(targetPath)) {
    const existing = await fs.readFile(targetPath, 'utf8');

    // Preserve any custom @layer theme block the user may have written
    const themeMatch = existing.match(/@layer\s+theme\s*\{[\s\S]*?\n\}/);
    if (themeMatch) {
      existingThemeBlock = themeMatch[0];
    }

    // Check if already on NativeWind v5 format
    if (existing.includes('@import "tailwindcss/theme.css"') || existing.includes("@import 'tailwindcss/theme.css'")) {
      s.stop('global.css already in NativeWind v5 format. Skipping.');
      return;
    }
  }

  let newContent = NATIVEWIND_V5_GLOBAL_CSS;

  // If the user had a custom @layer theme block, swap in theirs
  if (existingThemeBlock) {
    newContent = newContent.replace(
      /@layer\s+theme\s*\{[\s\S]*?\n\}/,
      existingThemeBlock
    );
    log.info('✓ Preserved existing @layer theme tokens');
  }

  await fs.writeFile(targetPath, newContent, 'utf8');
  log.info(`✓ Updated ${path.basename(targetPath)} with NativeWind v5 imports and theme tokens`);
  s.stop('global.css updated.');
}

// Warn about tailwind.config.js migration and optionally delete it.
// Tailwind v4 is CSS-first — color tokens go in global.css, but users may
// have custom fontFamily, boxShadow, safelist, etc. that need manual migration.
async function handleTailwindConfigForNativewindV5(): Promise<void> {
  const configPaths = [
    path.join(process.cwd(), 'tailwind.config.js'),
    path.join(process.cwd(), 'tailwind.config.ts'),
  ];

  const existingConfig = configPaths.find((p) => fs.existsSync(p));

  if (!existingConfig) {
    // Remove tailwind.config alias from babel.config.js if present
    await removeTailwindConfigBabelAlias();
    return;
  }

  const fileName = path.basename(existingConfig);
  const content = await fs.readFile(existingConfig, 'utf8');

  const customKeys = ['fontFamily', 'boxShadow', 'safelist', 'fontSize', 'borderRadius', 'spacing'];
  const foundCustom = customKeys.filter((k) => content.includes(k));

  log.warning(`\n⚠ ${fileName} may contain custom tokens that need to be migrated to global.css.`);
  if (foundCustom.length > 0) {
    log.warning(`  Detected: ${foundCustom.join(', ')}`);
  }
  log.warning('  In Tailwind v4, theme config moves to global.css using @theme { } blocks.');
  log.warning('  Migration guide: https://tailwindcss.com/docs/upgrade-guide\n');

  const shouldDelete = await confirm({
    message: `Delete ${fileName} now? (only do this after migrating custom tokens to global.css)`,
  });

  if (!isCancel(shouldDelete) && shouldDelete) {
    await fs.remove(existingConfig);
    log.info(`✓ Deleted ${fileName}`);
  } else {
    log.info(`Kept ${fileName}. Remember to migrate your custom tokens and delete it manually.`);
  }

  await removeTailwindConfigBabelAlias();
}

async function removeTailwindConfigBabelAlias(): Promise<void> {
  const babelConfigPath = path.join(process.cwd(), 'babel.config.js');
  if (!fs.existsSync(babelConfigPath)) return;
  try {
    let babelContent = await fs.readFile(babelConfigPath, 'utf8');
    if (babelContent.includes("'tailwind.config'") || babelContent.includes('"tailwind.config"')) {
      babelContent = babelContent.replace(
        /\s*['"]tailwind\.config['"]\s*:\s*['"]\.\/tailwind\.config\.(?:js|ts)['"]\s*,?/g,
        ''
      );
      await fs.writeFile(babelConfigPath, babelContent, 'utf8');
      log.info('✓ Removed tailwind.config alias from babel.config.js');
    }
  } catch {
    log.warning('⚠ Could not update babel.config.js. Remove the tailwind.config alias manually.');
  }
}

// Create postcss.config.js with @tailwindcss/postcss plugin
async function createPostcssConfig(): Promise<void> {
  const s = spinner();
  s.start('Creating postcss.config.js...');

  const postcssPaths = [
    path.join(process.cwd(), 'postcss.config.js'),
    path.join(process.cwd(), 'postcss.config.mjs'),
    path.join(process.cwd(), 'postcss.config.cjs'),
  ];

  if (postcssPaths.some((p) => fs.existsSync(p))) {
    s.stop('postcss.config already exists. Skipping.');
    return;
  }

  const content = `export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
`;

  await fs.writeFile(path.join(process.cwd(), 'postcss.config.js'), content, 'utf8');
  log.info('✓ Created postcss.config.js');
  s.stop('postcss.config.js created.');
}

// Update metro.config.js for NativeWind v5.
// Only ensures the nativewind/metro import and withNativewind call are present.
// Existing options (e.g. inlineRem: 16) are left untouched.
async function updateMetroConfigForNativewindV5(): Promise<void> {
  const s = spinner();
  s.start('Updating metro.config.js for NativeWind v5...');

  const metroConfigPath = path.join(process.cwd(), 'metro.config.js');
  if (!fs.existsSync(metroConfigPath)) {
    s.stop('No metro.config.js found. Creating one...');
    const content = `const { getDefaultConfig } = require("expo/metro-config");
const { withNativewind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = withNativewind(config);
`;
    await fs.writeFile(metroConfigPath, content, 'utf8');
    log.info('✓ Created metro.config.js');
    return;
  }

  try {
    let content = await fs.readFile(metroConfigPath, 'utf8');
    let changed = false;

    // Ensure nativewind/metro import is present — add it if missing
    if (!content.includes('nativewind/metro')) {
      content = content.replace(
        /(const\s*\{\s*getDefaultConfig\s*\})/,
        `const { withNativewind } = require("nativewind/metro");\n$1`
      );
      changed = true;
    }

    // Ensure withNativewind wraps the exported config — add it if missing entirely
    if (!content.includes('withNativewind')) {
      content = content.replace(
        /module\.exports\s*=\s*(\w+)\s*;/,
        'module.exports = withNativewind($1);'
      );
      changed = true;
    }

    // Note: we intentionally do NOT strip existing options like { inlineRem: 16 }
    // as those are user-configured values that should be preserved.

    if (changed) {
      await fs.writeFile(metroConfigPath, content, 'utf8');
      log.info('✓ Updated metro.config.js for NativeWind v5');
    } else {
      log.info('✓ metro.config.js already configured for NativeWind v5');
    }
    s.stop('metro.config.js updated.');
  } catch {
    s.stop('Failed to update metro.config.js.');
    log.warning('⚠ Manually verify metro.config.js has:');
    log.warning('  const { withNativewind } = require("nativewind/metro");');
    log.warning('  module.exports = withNativewind(config);');
  }
}

// Create react-native-css-env.d.ts for NativeWind v5 type support
async function createReactNativeCssEnvDts(): Promise<void> {
  const s = spinner();
  s.start('Creating react-native-css-env.d.ts...');

  const dtsPath = path.join(process.cwd(), 'react-native-css-env.d.ts');
  if (fs.existsSync(dtsPath)) {
    s.stop('react-native-css-env.d.ts already exists. Skipping.');
    return;
  }

  await fs.writeFile(dtsPath, REACT_NATIVE_CSS_ENV_DTS, 'utf8');
  log.info('✓ Created react-native-css-env.d.ts');
  s.stop('Type declarations created.');
}

// Full NativeWind v4 → v5 upgrade orchestrator
async function upgradeV4NativewindToNativewindV5(packageManager: string): Promise<void> {
  // Step 1: Pin lightningcss BEFORE installing packages (avoids version conflicts)
  await pinLightningcss();

  // Step 2: Install / upgrade packages
  migratePackagesToNativewindV5(packageManager);

  // Step 3: Replace global.css with NativeWind v5 format
  await updateGlobalCssForNativewindV5();

  // Step 4: Create postcss.config.js
  await createPostcssConfig();

  // Step 5: Update metro.config.js for NativeWind v5
  await updateMetroConfigForNativewindV5();

  // Step 6: Prompt user about tailwind.config.js migration (never auto-delete)
  await handleTailwindConfigForNativewindV5();

  // Step 7: Create react-native-css-env.d.ts
  await createReactNativeCssEnvDts();

  log.success('✓ NativeWind v4 → v5 migration complete!');

  log.warning('\n⚠ Your existing component files in components/ui/ are still on NativeWind v4.');
  log.warning('  Re-adding them will OVERRIDE your current code with NativeWind v5 versions.');
  log.warning('  Commit or stash your changes before running the add commands below.\n');

  log.info('Next steps:');
  log.info('  1. Commit your current changes first:');
  log.info('       git add -A && git commit -m "chore: upgrade to NativeWind v5"');
  log.info('  2. Re-add your gluestack components to get NativeWind v5 versions:');
  log.info('       npx gluestack-ui add gluestack-ui-provider');
  log.info('       npx gluestack-ui add --all   (or add components individually)');
  log.info('  3. If you have a bare Expo / RN CLI project, rebuild native:');
  log.info('       iOS:     cd ios && pod install && npx expo run:ios');
  log.info('       Android: npx expo run:android');
  log.info('  4. If tailwind.config.js had custom fontFamily / boxShadow / safelist,');
  log.info('     move them to global.css @theme { } / @layer utilities { } blocks.');
  log.info('     See: https://tailwindcss.com/docs/upgrade-guide');
}

// Ask user which styling engine to upgrade to after reaching v4-NativeWind
async function promptStylingEngineChoice(): Promise<'nativewind-v5' | 'uniwind' | 'stay'> {
  const choice = await select({
    message: 'Choose your styling engine for the next upgrade:',
    options: [
      {
        value: 'nativewind-v5',
        label: 'NativeWind v5',
        hint: 'Stay on NativeWind, upgrade from Tailwind v3 to v5',
      },
      {
        value: 'uniwind',
        label: 'UniWind (Tailwind v4)',
        hint: 'Switch to UniWind — Expo only, replaces NativeWind entirely',
      },
      {
        value: 'stay',
        label: 'Stay on v4 (NativeWind) for now',
        hint: 'Run "npx gluestack-ui upgrade" again later to continue',
      },
    ],
  });

  if (isCancel(choice)) {
    cancel('Upgrade cancelled.');
    process.exit(0);
  }

  return choice as 'nativewind-v5' | 'uniwind' | 'stay';
}

// Upgrade from v4-NativeWind to UniWind
async function upgradeV4NativewindToUniwind(packageManager: string): Promise<void> {
  const projectType = await detectProjectType();
  log.info(`Detected project type: ${projectType}`);

  if (projectType !== 'expo') {
    log.warning('⚠ UniWind currently only supports Expo projects.');
    log.info('  Support for Next.js and React Native CLI is coming soon.');
    const proceed = await confirm({
      message: 'Continue anyway? (configuration files will still be updated)',
    });
    if (isCancel(proceed) || !proceed) {
      cancel('Upgrade cancelled.');
      process.exit(0);
    }
  }

  // Step 1: Migrate packages (remove nativewind, install uniwind)
  migratePackagesToUniwind(packageManager);

  // Step 2: Update metro.config.js
  await updateMetroConfigForUniwind();

  // Step 3: Replace global.css with UniWind CSS (Tailwind v4 + :where() selectors)
  await replaceGlobalCssForUniwind();

  // Step 4: Remove tailwind.config.js (Tailwind v4 is CSS-first, no JS config needed)
  await removeTailwindConfig();

  // Step 5: Migrate type definitions
  await migrateTypeDefinitions();

  // Step 6: Add worklets plugin to babel.config.js if not already present
  await updateBabelConfig();

  // Step 7: Inform about GluestackUIProvider changes
  log.info('\n📋 Manual step required — update GluestackUIProvider:');
  log.info('  Run: npx gluestack-ui add gluestack-ui-provider');
  log.info('  Or update components/ui/gluestack-ui-provider/ manually:');
  log.info('  • Native: use Uniwind.setTheme() instead of Appearance.setColorScheme()');
  log.info('  • Web:    add script.ts for DOM class management and call Uniwind.setTheme()');
  log.info('  • Docs:   https://gluestack.io/ui/docs/home/getting-started/installation');

  log.success('✓ NativeWind → UniWind migration complete!');
}

export const upgrade = new Command()
  .name('upgrade')
  .description('Upgrade gluestack-ui to the latest version')
  .action(async () => {
    try {
      log.info('\n\x1b[1m🚀 Gluestack UI Upgrade\x1b[0m\n');

      // Step 1: Detect current version
      const currentVersion = await detectCurrentVersion();

      if (currentVersion === 'unknown') {
        log.error('❌ Could not detect gluestack-ui installation.');
        log.info('Please ensure gluestack-ui is installed in your project.');
        process.exit(1);
      }

      if (currentVersion === 'v4-uniwind') {
        log.success('✓ Already on the latest version (UniWind / Tailwind v4)! No upgrade needed.');
        return;
      }

      const versionLabels: Record<string, string> = {
        'v2': 'v2',
        'v3': 'v3',
        'v4-nativewind': 'v4 (NativeWind / Tailwind v3)',
      };
      log.info(`Current version: ${versionLabels[currentVersion] ?? currentVersion}`);

      // Step 2: Git safety check
      if (await hasUncommittedChanges()) {
        log.warning('⚠ You have uncommitted git changes.');
        log.warning('It is recommended to commit your changes before upgrading.\n');
        const proceed = await confirm({ message: 'Continue anyway?' });
        if (isCancel(proceed) || !proceed) {
          cancel('Upgrade cancelled.');
          process.exit(0);
        }
      }

      // Step 3: Detect package manager
      const packageManager = detectPackageManager();
      log.info(`Package manager: ${packageManager}\n`);

      // Step 4: Route to appropriate upgrade path
      if (currentVersion === 'v2') {
        log.info('📦 Upgrading from v2 to v3...\n');
        await upgradeV2ToV3(packageManager);
        log.success('✓ Successfully upgraded to v3!\n');

        // Ask if user wants to continue to v4-nativewind
        const continueToV4 = await confirm({
          message: 'Continue upgrading to v4 (NativeWind)?',
        });

        if (isCancel(continueToV4) || !continueToV4) {
          log.success('✓ Upgrade complete! You are now on v3.');
          log.info('\nRun "npx gluestack-ui upgrade" again to continue upgrading.');
          return;
        }

        log.info('\n📦 Continuing to v4 (NativeWind)...\n');
        await upgradeV3ToV4(packageManager);
        log.success('\n✅ \x1b[32mUpgrade to v4 (NativeWind) complete!\x1b[0m\n');

        const engineChoiceFromV2 = await promptStylingEngineChoice();
        if (engineChoiceFromV2 === 'stay') {
          log.success('✓ You are now on v4 (NativeWind).');
          log.info('\nRun "npx gluestack-ui upgrade" again to continue upgrading.');
          return;
        } else if (engineChoiceFromV2 === 'nativewind-v5') {
          log.info('\n📦 Upgrading NativeWind to v5...\n');
          await upgradeV4NativewindToNativewindV5(packageManager);
          return;
        } else {
          log.info('\n📦 Migrating to UniWind...\n');
          await upgradeV4NativewindToUniwind(packageManager);
        }
      } else if (currentVersion === 'v3') {
        log.info('📦 Upgrading from v3 to v4 (NativeWind)...\n');
        await upgradeV3ToV4(packageManager);
        log.success('\n✅ \x1b[32mUpgrade to v4 (NativeWind) complete!\x1b[0m\n');

        const engineChoiceFromV3 = await promptStylingEngineChoice();
        if (engineChoiceFromV3 === 'stay') {
          log.success('✓ You are now on v4 (NativeWind).');
          log.info('\nRun "npx gluestack-ui upgrade" again to continue upgrading.');
          return;
        } else if (engineChoiceFromV3 === 'nativewind-v5') {
          log.info('\n📦 Upgrading NativeWind to v5...\n');
          await upgradeV4NativewindToNativewindV5(packageManager);
          return;
        } else {
          log.info('\n📦 Migrating to UniWind...\n');
          await upgradeV4NativewindToUniwind(packageManager);
        }
      } else if (currentVersion === 'v4-nativewind') {
        const engineChoiceFromV4 = await promptStylingEngineChoice();
        if (engineChoiceFromV4 === 'stay') {
          log.success('✓ Staying on v4 (NativeWind). No changes made.');
          log.info('\nRun "npx gluestack-ui upgrade" again when you are ready to upgrade.');
          return;
        } else if (engineChoiceFromV4 === 'nativewind-v5') {
          log.info('\n📦 Upgrading NativeWind to v5...\n');
          await upgradeV4NativewindToNativewindV5(packageManager);
          return;
        } else {
          log.info('\nKey changes:');
          log.info('  • tailwind.config.js → color tokens moved to global.css @layer theme');
          log.info('  • nativewind → uniwind package');
          log.info('  • metro.config.js: withNativeWind → withUniwindConfig');
          log.info('  • GluestackUIProvider: Appearance.setColorScheme → Uniwind.setTheme\n');
          await upgradeV4NativewindToUniwind(packageManager);
        }
      }

      log.success('\n✅ \x1b[32mUpgrade complete!\x1b[0m\n');
      log.info('Next steps:');
      log.info('1. Review the changes made to your project');
      log.info('2. Update GluestackUIProvider: npx gluestack-ui add gluestack-ui-provider');
      log.info('3. Test your application thoroughly');
      log.info('4. Check the migration guide for any additional manual steps');

    } catch (err: any) {
      log.error(`\n❌ Upgrade failed: ${(err && err.message) || String(err)}`);
      process.exit(1);
    }
  });
