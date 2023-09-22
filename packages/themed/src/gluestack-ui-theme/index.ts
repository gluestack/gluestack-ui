import * as componentStyles from './components';
import { createComponents } from '@gluestack-ui/themed';
import type { config } from './gluestack-ui.config';

export const components = createComponents({
  componentStyles,
});

type Config = typeof config.theme; // Assuming `config` is defined elsewhere
type Components = typeof components;

declare module '@gluestack-style/react' {
  interface ICustomConfig extends Config {}
  interface ICustomComponents extends Components {}
}
