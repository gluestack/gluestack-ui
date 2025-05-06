import { 
  componentOperations, 
  docsOperations 
} from "./utils";

/**
 * Mapper for documentation generation and component docs sync
 */
export default {

  component: function (component: string, event = "added") {
    if (event === "removed") {
      componentOperations.deleteComponentDocs(component);
    } else {
      componentOperations.copyComponent(component);
      docsOperations.copyDocs(component);
    }
  },

  nonComponent: function (filePath: string) {
    try {
      componentOperations.processNonComponentFile(filePath);
    } catch (error) {
      console.error(`Error processing non-component file ${filePath}:`, error);
    }
  },

  utils: function () {
    try {
      componentOperations.processUtilsDirectory();
    } catch (error) {
      console.error("Error processing utils directory:", error);
    }
  },
};
