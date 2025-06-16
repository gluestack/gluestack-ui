import * as componentOperations from './componentsOperations';
import * as docsOperations from './docsOperations';
export default {
  component: function (component: string, event = 'added') {
    componentOperations.copyComponent(component, event);
    docsOperations.copyComponentsDocs(component);
  },
  nonComponent: function (path: string) {
    componentOperations.processNonComponentFile(path);
    if (path === 'packages/sidebar.json') {
      componentOperations.processSidebarFile(path);
    }
  },
};
