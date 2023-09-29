import { createComponents } from '@gluestack-style/react';
import * as componentStyles from './components';
import type { config } from '@gluestack-ui/themed';

export const components = createComponents(componentStyles);

type Components = typeof components;
type Config = typeof config.theme;

declare module '@gluestack-style/react' {
  interface ICustomConfig extends Config {}
  interface ICustomComponents extends Components {}
}
