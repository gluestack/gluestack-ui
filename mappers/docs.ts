import { componentOperations, docsOperations } from "./utils";
export default {
  // this is for the component code and component docs sync
  component: function (component: string, event = "added") {
    if (event === "removed") {
      // delete the component code
      componentOperations.deleteComponentDocs(component);
    } else {
      // copy the component code
      componentOperations.copyComponent(component);
      // copy the component docs
      docsOperations.copyDocs(component);
    }
  },
  /**
   * Processes a non-component file or directory
   * @param filePath Path to the non-component file
   */
  nonComponent: function (filePath: string) {
    try {
      // for the non-component code
      componentOperations.processNonComponentFile(filePath);
    } catch (error) {
      console.error(`Error processing non-component file ${filePath}:`, error);
    }
  },
  /**
   * Processes the utils directory specifically
   */
  utils: function () {
    try {
      componentOperations.processUtilsDirectory();
    } catch (error) {
      console.error("Error processing utils directory:", error);
    }
  },
};










