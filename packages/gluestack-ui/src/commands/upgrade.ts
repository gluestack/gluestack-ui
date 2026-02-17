import { Command } from 'commander';
import { log, spinner, confirm, isCancel, cancel, text } from '@clack/prompts';
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
async function detectCurrentVersion(): Promise<'v2' | 'v3' | 'v4' | 'unknown'> {
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
      if (major >= 4) return 'v4';
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
  if (fs.existsSync(path.join(process.cwd(), 'bun.lockb'))) return 'bun';
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
    pnpm: 'pnpm i',
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
  const lockFiles: { [key: string]: string } = {
    npm: 'package-lock.json',
    yarn: 'yarn.lock',
    pnpm: 'pnpm-lock.yaml',
    bun: 'bun.lockb',
  };

  try {
    // Remove node_modules
    if (fs.existsSync(nodeModulesPath)) {
      fs.removeSync(nodeModulesPath);
    }

    // Remove lock file
    const lockFile = lockFiles[packageManager];
    if (lockFile && fs.existsSync(path.join(process.cwd(), lockFile))) {
      fs.removeSync(path.join(process.cwd(), lockFile));
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
    pnpm: 'pnpm i',
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

      if (currentVersion === 'v4') {
        log.success('✓ Already on v4! No upgrade needed.');
        return;
      }

      log.info(`Current version: ${currentVersion}`);
      log.info(`Target version: v4\n`);

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

        // Ask if user wants to continue to v4
        const continueToV4 = await confirm({
          message: 'Continue upgrading to v4?',
        });

        if (isCancel(continueToV4) || !continueToV4) {
          log.success('✓ Upgrade complete! You are now on v3.');
          log.info('\nRun "npx gluestack-ui upgrade" again to upgrade to v4.');
          return;
        }

        log.info('\n📦 Continuing to v4...\n');
      }

      // Upgrade to v4 (from v3 or after v2→v3)
      log.info('📦 Upgrading to v4...\n');
      await upgradeV3ToV4(packageManager);

      log.success('\n✅ \x1b[32mUpgrade to v4 complete!\x1b[0m\n');
      log.info('Next steps:');
      log.info('1. Review the changes made to your project');
      log.info('2. Test your application thoroughly');
      log.info('3. Check the v4 migration guide for any manual steps');

    } catch (err: any) {
      log.error(`\n❌ Upgrade failed: ${(err && err.message) || String(err)}`);
      process.exit(1);
    }
  });
