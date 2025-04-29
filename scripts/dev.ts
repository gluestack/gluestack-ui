import chokidar from "chokidar";
import path from "path";
import fs from "fs";
import mappers from "../mappers/index";

const sourcePath = "./packages/src";
const componentsPath = "./packages/src/components";

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
  if (!normalizedPath.includes('components')) {
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
  console.log(`File ${event}: ${filePath}`);
  const component = getComponentFromPath(filePath);
  for (const mapperConfig of mappers) {
    try {
      const { name, mapper } = mapperConfig;
      console.log(`Applying mapper: ${name}`);
      
      if (component) {
        if (mapper && typeof mapper.component === 'function') {
          console.log(`Processing component: ${component}`);
          await mapper.component(component);
        } else {
          console.warn(`Mapper ${name} doesn't have a component method`);
        }
      } else {
        if (mapper && typeof mapper.nonComponent === 'function') {
          console.log(`Processing non-component file: ${filePath}`);
          await mapper.nonComponent(filePath);
        } else {
          console.warn(`Mapper ${name} doesn't have a nonComponent method`);
        }
      }
    } catch (error) {
      if (component) {
        console.error(`Error processing mapper for component ${component}:`, error);
      } else {
        console.error(`Error processing mapper for file ${filePath}:`, error);
      }
    }
  }
};
watcher
  .on("add", path => processFileChange("added", path))
  .on("change", path => processFileChange("changed", path))
  .on("unlink", path => processFileChange("removed", path));

console.log(`Watching for file changes in ${sourcePath}...`);