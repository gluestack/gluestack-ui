import * as componentOperations from './componentOperations';

export default {
  component: function (component: string, event = 'added') {
    componentOperations.copyComponent(component, event);
  },
  nonComponent: function (_path: string) {
    // Non-component files (sidebar.json, docs, etc.) are not needed
    // in this app — no-op.
  },
};
