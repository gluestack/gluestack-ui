import chokidar from "chokidar";
import mappers from "../mappers/index";

const sourcePath = "./packages/src";

// Initialize watcher
const watcher = chokidar.watch(sourcePath, {
  persistent: true,
  ignoreInitial: false,
  awaitWriteFinish: {
    stabilityThreshold: 2000,
    pollInterval: 100,
  },
});


const findComponent = (path: string): string | null => {
  const parts = path.split("/");
  return parts.length > 3 ? parts[3] : null;
};


const processFileChange = async (event: string, path: string) => {
  const component = findComponent(path);
  console.log(`File ${event}: ${path}`);
  if (!component) {
    console.log("Not a component path, skipping");
    return;
  }
  console.log(`Processing component: ${component}`);
  // Process through each registered mapper
  for (const mapperConfig of mappers) {
    try {
      const { name, mapper } = mapperConfig;
      console.log(`Applying mapper: ${name}`);
      
      // Call the component method on the mapper
      if (mapper && typeof mapper.component === 'function') {
        await mapper.component(component);
      } else {
        console.warn(`Mapper ${name} doesn't have a component method`);
      }
    } catch (error) {
      console.error(`Error processing mapper for component ${component}:`, error);
    }
  }
};

// Add event listeners for all file events
watcher
  .on("add", path => processFileChange("added", path))
  .on("change", path => processFileChange("changed", path))
  .on("unlink", path => processFileChange("removed", path));

console.log(`Watching for file changes in ${sourcePath}...`);