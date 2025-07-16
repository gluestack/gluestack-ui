import * as componentOperations from './componentsOperations';

export default {
  component: function (component: string, event = 'added') {
    componentOperations.copyComponent(component, event);
  },
  nonComponent: function (path: string) {
    // componentOperations.processNonComponentFile(path);
  },
};
