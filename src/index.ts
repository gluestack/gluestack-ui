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

// modified createIcon will be exported which will not require root as an argument
// export { createIcon } from '@gluestack-ui/icon';
