import chokidar from 'chokidar';
import path from 'path';
import fs from 'fs';
import mappers from './mappers';

const sourcePath = './packages';
const componentsPath = './packages/components/ui';

// Initialize watcher
const watcher = chokidar.watch(sourcePath, {
  persistent: true,
  ignoreInitial: false,
  awaitWriteFinish: {
    stabilityThreshold: 2000,
    pollInterval: 100,
  },
});

const getComponentFromPath = (filePath: string): string | null => {
  const normalizedPath = path.normalize(filePath);
  if (!normalizedPath.includes('components/ui')) {
    return null;
  }
  const relativePath = path.relative(componentsPath, normalizedPath);
  const parts = relativePath.split(path.sep);

  if (parts.length > 0) {
    return parts[0];
  }
  return null;
};

const processFileChange = async (event: string, filePath: string) => {
  const component = getComponentFromPath(filePath);

  // If a component directory is being deleted, handle it directly
  // if (event === "removed" && component) {
  //   const componentDir = path.join(componentsPath, component);
  // Check if the component directory no longer exists
  //   if (!fs.existsSync(componentDir)) {
  //     console.log(`Component directory deleted: ${component}`);
  //     if (mappers && typeof mappers.component === 'function') {
  //       try {
  //         // Call the docs mapper directly with 'removed' event
  //         await mappers.component(component, 'removed');
  //       } catch (error) {
  //         console.error(`Error deleting docs for component ${component}:`, error);
  //       }
  //     }
  //   }
  // }

  // Continue with the regular processing
  for (const mapperConfig of mappers) {
    try {
      const { name, mapper } = mapperConfig;

      if (component) {
        if (mapper && typeof mapper.component === 'function') {
          await mapper.component(component, event);
        } else {
          console.warn(`Mapper ${name} doesn't have a component method`);
        }
      } else {
        if (mapper && typeof mapper.nonComponent === 'function') {
          await mapper.nonComponent(filePath);
        } else {
          console.warn(`Mapper ${name} doesn't have a nonComponent method`);
        }
      }
    } catch (error) {
      if (component) {
        console.error(
          `Error processing mapper for component ${component}:`,
          error
        );
      } else {
        console.error(`Error processing mapper for file ${filePath}:`, error);
      }
    }
  }
};
watcher
  .on('add', (path) => processFileChange('added', path))
  .on('change', (path) => processFileChange('changed', path))
  .on('unlink', (path) => processFileChange('removed', path));

console.log(`Watching for file changes in ${sourcePath}...`);
