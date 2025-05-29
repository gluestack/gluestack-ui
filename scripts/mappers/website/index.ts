import * as componentOperations from "./componentOperations";
import * as docsOperations from "./docsOperations";

export default {
  // this is for the component code and component docs sync
  component: function (component: string, event = "added") {
    if (event === "removed") {
      // delete the component code
      componentOperations.deleteComponentDocs(component);
    } else {
      // copy the component code
      componentOperations.copyComponent(component);
      if (component !== "gluestack-ui-provider" && component !== "overlay") {
        docsOperations.copyComponentsDocs(component);
      }
      if (component === "utils") {
        docsOperations.copyHooksDocs("use-break-point-value");
        docsOperations.copyHooksDocs("use-media-query");
      }
    }
  },
  // this is for the non-component code and non-component docs sync
  nonComponent: function (filePath: string) {
    try {
      // for the non-component code
      componentOperations.processNonComponentFile(filePath);
      // for the non-component docs
      if (filePath.includes("/docs/") || filePath.includes("\\docs\\")) {
        docsOperations.copyNonComponentDocs(filePath);
      }
      // for the docs components
      componentOperations.copyDocsComponents(filePath);
      // for the sidebar
      componentOperations.processSidebarFile(filePath);
    } catch (error) {
      console.error(`Error processing non-component file ${filePath}:`, error);
    }
  },
};
