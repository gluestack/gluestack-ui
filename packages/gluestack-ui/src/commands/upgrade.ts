import { Command } from 'commander';
import { log, spinner, confirm, isCancel, cancel } from '@clack/prompts';
import fs from 'fs-extra';
import path from 'path';
import { spawnSync } from 'child_process';
import simpleGit from 'simple-git';

// Utility: Is this an old gluestack package?
function isOldGluestackPackage(pkg: string): boolean {
  return (
    !pkg.includes('nightly') &&
    (pkg.startsWith('@gluestack-ui') || pkg.startsWith('gluestack') || pkg.startsWith('@gluestack'))
  );
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
  const cmds: { [key: string]: string } = { npm: 'npm uninstall', yarn: 'yarn remove', pnpm: 'pnpm remove', bun: 'bun remove' };
  const cmd = cmds[packageManager];
  if (!cmd) throw new Error('Unsupported package manager');
  const result = spawnSync(cmd, packages, { cwd: process.cwd(), stdio: 'inherit', shell: true });
  if (result.error || result.status !== 0) throw new Error('Failed to remove packages');
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
    bun: 'bun.lockb'
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
      bun: 'bun install' 
    };
    const installCmd = installCmds[packageManager];
    
    const result = spawnSync(installCmd, [], { cwd: process.cwd(), stdio: 'inherit', shell: true });
    if (result.error || result.status !== 0) throw new Error('Failed to reinstall dependencies');
    
    s.stop('Dependencies reinstalled successfully.');
  } catch (error) {
    s.stop('Failed to clean and reinstall.');
    throw error;
  }
}

// Install new packages
function installPackages(packageManager: string): void {
  const s = spinner();
  s.start('Installing @gluestack-ui-nightly/core and @gluestack-ui-nightly/utils...');
  const cmds: { [key: string]: string } = { npm: 'npm install', yarn: 'yarn add', pnpm: 'pnpm i', bun: 'bun add' };
  const cmd = cmds[packageManager];
  if (!cmd) throw new Error('Unsupported package manager');
  const pkgs = ['@gluestack-ui-nightly/core@*', '@gluestack-ui-nightly/utils@*', 'react-native-svg@15.12.0','@gluestack-nightly/ui-next-adapter@*'];
  const result = spawnSync(cmd, pkgs, { cwd: process.cwd(), stdio: 'inherit', shell: true });
  if (result.error || result.status !== 0) throw new Error('Failed to install new packages');
  s.stop('New packages installed.');
}

// Update tailwind.config.ts file to remove old gluestack plugin
async function updateTailwindConfig(): Promise<void> {
  const s = spinner();
  s.start('Updating tailwind.config.ts...');
  
  const tailwindConfigPath = path.join(process.cwd(), 'tailwind.config.ts');
  if (!fs.existsSync(tailwindConfigPath)) {
    s.stop('No tailwind.config.ts found.');
    return;
  }

  try {
    const content = await fs.readFile(tailwindConfigPath, 'utf8');
    let updated = false;
    let newContent = content;
    
    // Remove the import statement
    const importRegex = /import\s+gluestackPlugin\s+from\s+['"]@gluestack-ui\/nativewind-utils\/tailwind-plugin['"];?\s*/g;
    if (importRegex.test(newContent)) {
      newContent = newContent.replace(importRegex, '');
      updated = true;
    }
    
          // Remove the plugin from the plugins array
      const pluginRegex = /plugins:\s*\[([^\]]*gluestackPlugin[^\]]*)\]/g;
      newContent = newContent.replace(pluginRegex, (match, pluginsContent) => {
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
      log.info(`Updated tailwind.config.ts`);
    }
    
    s.stop('Tailwind config updated.');
  } catch (error) {
    s.stop('Failed to update tailwind config.');
    log.warning(`Failed to update tailwind.config.ts: ${error}`);
  }
}

// Update import statements in components/ui folder
async function updateImports(): Promise<void> {
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
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
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
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
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
        return `from '@gluestack-ui-nightly/utils/nativewind-utils'`;
      }
      
      // Extract component name from import path
      const componentName = importPath.replace('@gluestack-ui/', '');
      const newImportPath = `@gluestack-ui-nightly/core/${componentName}/creator`;
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

export const upgrade = new Command()
  .name('upgrade')
  .description('Upgrade from old gluestack packages to gluestack-ui-nightly')
  .action(async () => {
    try {
      log.info('\n\x1b[1mGluestack UI Upgrade\x1b[0m');
      const oldPackages = await detectOldPackages();
      if (!oldPackages.length) {
        log.info('No old gluestack packages found.');
        return;
      }
      log.info('Found old packages:');
      oldPackages.forEach((pkg: string) => log.info('  - ' + pkg));
      if (await hasUncommittedChanges()) {
        log.warning('You have uncommitted git changes. Please commit before upgrading.');
        const proceed = await confirm({ message: 'Continue anyway?' });
        if (isCancel(proceed) || !proceed) {
          cancel('Upgrade cancelled.');
          process.exit(0);
        }
      }
      // Detect package manager
      let packageManager: string = 'npm';
      if (fs.existsSync('yarn.lock')) packageManager = 'yarn';
      else if (fs.existsSync('pnpm-lock.yaml')) packageManager = 'pnpm';
      else if (fs.existsSync('bun.lockb')) packageManager = 'bun';
      await updateTailwindConfig();
      installPackages(packageManager);
      removePackages(oldPackages, packageManager);
      cleanAndReinstall(packageManager);

      await updateImports();
      log.success('\x1b[32mUpgrade complete!\x1b[0m');
      log.info('All imports have been updated to use @gluestack-ui-nightly/*');
    } catch (err: any) {
      log.error((err && err.message) || String(err));
      process.exit(1);
    }
  }); 