import path from 'path';
import fs from 'fs';
import { isValidComponent } from '../utils/componentOperations';

interface StarterKitConfig {
  name: string;
  sourcePath: string;
  destPath: string;
}

const starterKitConfigs: StarterKitConfig[] = [
  {
    name: 'starter-kit-expo',
    sourcePath: path.resolve('src/components/ui'),
    destPath: path.resolve('apps/starter-kit-expo/components/ui'),
  },
  {
    name: 'starter-kit-next',
    sourcePath: path.resolve('src/components/ui'),
    destPath: path.resolve('apps/starter-kit-next/components/ui'),
  },
];

/**
 * Copies only the immediate files from a component directory,
 * excluding subdirectories and dependencies.json
 */
const copyComponentShallow = (component: string, config: StarterKitConfig) => {
  if (!isValidComponent(component)) {
    return;
  }

  const componentPath = path.join(config.sourcePath, component);
  const destComponentPath = path.join(config.destPath, component);

  try {
    // Check if component path exists
    if (!fs.existsSync(componentPath)) {
      return;
    }

    // Get stats to determine if it's a directory
    const srcStats = fs.statSync(componentPath);
    if (!srcStats.isDirectory()) {
      return; // Skip if not a directory
    }

    // Read directory contents
    const entries = fs.readdirSync(componentPath, { withFileTypes: true });

    // Filter to only get files (not directories) and exclude dependencies.json
    const filesToCopy = entries.filter(
      (entry) => entry.isFile() && entry.name !== 'dependencies.json'
    );

    // Only create destination directory if we have files to copy
    if (filesToCopy.length > 0) {
      if (!fs.existsSync(destComponentPath)) {
        fs.mkdirSync(destComponentPath, { recursive: true });
      }

      // Copy each file
      for (const file of filesToCopy) {
        const srcFilePath = path.join(componentPath, file.name);
        const destFilePath = path.join(destComponentPath, file.name);

        fs.copyFileSync(srcFilePath, destFilePath);
      }

      console.log(
        `✅ Copied component (shallow): ${component} to ${config.name}`
      );
    }
  } catch (error) {
    console.error(
      `❌ Error copying component ${component} to ${config.name}:`,
      error
    );
  }
};

/**
 * Deletes a component directory from starter-kit apps
 */
const deleteComponent = (component: string, config: StarterKitConfig) => {
  const destComponentPath = path.join(config.destPath, component);

  try {
    if (fs.existsSync(destComponentPath)) {
      fs.rmSync(destComponentPath, { recursive: true, force: true });
      console.log(`🗑️ Deleted component: ${component} from ${config.name}`);
    }
  } catch (error) {
    console.error(
      `❌ Error deleting component ${component} from ${config.name}:`,
      error
    );
  }
};

export const copyComponent = (component: string, event: string = 'added') => {
  if (!isValidComponent(component)) {
    return;
  }

  console.log(
    `📝 Processing ${event} event for component: ${component} (starter-kits)`
  );

  for (const config of starterKitConfigs) {
    if (event === 'removed') {
      deleteComponent(component, config);
    } else {
      copyComponentShallow(component, config);
    }
  }
};
