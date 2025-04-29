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



const findComponent = (path:string) => {
  const component = path.split("/");
  return component[3];
};



// Add event listeners
watcher
  .on("add", async (path) => {
    const component = findComponent(path);
    if (component) {
      await writeComponentMapper(component);
      await writeDocsMapper(component);
      await writeNativeMapper(component);
    }
  })
  .on("change", async (path) => {
    const component = findComponent(path);
    console.log(component, "component");
    if (component) {
      await writeComponentMapper(component);
      await writeDocsMapper(component);
      await writeNativeMapper(component);
    }
  })
  
