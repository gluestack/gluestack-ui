import { createComponents } from '@gluestack-style/react';
import * as componentStyles from './components';

export const components = createComponents(componentStyles);
console.trace('inside components');
console.log('ehrh');
type Components = typeof components;

declare module '@gluestack-style/react' {
  interface ICustomComponents extends Components {}
}
