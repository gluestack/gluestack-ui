import { generate } from './generate';

// Patterns are tiny, so any change under src/patterns (or a component, whose
// source feeds the install registry) regenerates everything.
export default {
  component: function () {
    generate();
  },
  nonComponent: function (filePath: string) {
    if (filePath.includes('patterns')) generate();
  },
};
