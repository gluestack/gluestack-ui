import * as componentOperations from './componentsOperations';
import * as docsOperations from './docsOperations';
export default {
  component: function (component: string, event = 'added', filePath?: string) {
    componentOperations.copyComponent(component, event, filePath);
    docsOperations.copyComponentsDocs(component, event);
  },
  nonComponent: function (path: string) {
    // componentOperations.processNonComponentFile(path);
    if (path === 'src/sidebar.json') {
      componentOperations.processSidebarFile(path);
    }
  },
};
