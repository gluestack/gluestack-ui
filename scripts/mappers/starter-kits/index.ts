import * as componentOperations from './componentOperations';

export default {
  component: function (component: string, event = 'added', filePath?: string) {
    componentOperations.copyComponent(component, event, filePath);
  },
  nonComponent: function (path: string) {
    // Currently no special handling for non-component files
    // Can be extended later if needed
  },
};
