'use client';
export * from './components';
export { config } from './components/gluestack-ui.config';

export {
  StyledProvider,
  useStyled,
  flush,
  AsForwarder,
} from '@gluestack-style/react';

export { extendTheme } from './utils/extendTheme';
export { createProvider } from '@gluestack-ui/provider';
export { createIcon } from '@gluestack-ui/icon';
