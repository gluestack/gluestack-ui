import * as componentOperations from './componentOperations';

export default {
  component: function (component: string, event = 'added') {
    componentOperations.copyComponent(component, event);
  },
  nonComponent: function (path: string) {
    // Currently no special handling for non-component files
    // Can be extended later if needed
  },
};
