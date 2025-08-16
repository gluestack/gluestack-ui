import { log, spinner } from '@clack/prompts';
import fs from 'fs-extra';
import path from 'path';

// Update registry.tsx file in app folder (Next.js 15)
export async function updateRegistryFile(): Promise<void> {
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
export async function updateTailwindConfig(): Promise<void> {
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
export async function updateNextConfig(): Promise<void> {
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
