import * as componentOperations from './componentOperations';

export default {
  component: function (component: string, event = 'added', filePath?: string) {
    componentOperations.copyComponent(component, event, filePath);
  },
  nonComponent: function (_path: string) {
    // Non-component files (sidebar.json, docs, etc.) are not needed
    // in this app — no-op.
  },
};
