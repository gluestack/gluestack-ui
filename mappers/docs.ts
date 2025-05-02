import { 
  componentOperations, 
  docsOperations 
} from "./utils";

/**
 * Mapper for documentation generation and component docs sync
 */
export default {
  /**
   * Processes a component by copying its files to docs and generating documentation
   * @param component Component name to process
   * @param event Event type ("added" or "removed")
   */
  component: function (component: string, event = "added") {
    if (event === "removed") {
      componentOperations.deleteComponentDocs(component);
    } else {
      componentOperations.copyComponent(component);
      docsOperations.copyDocs(component);
    }
  },

  /**
   * Processes a non-component file or directory
   * @param filePath Path to the non-component file
   */
  nonComponent: function (filePath: string) {
    try {
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
