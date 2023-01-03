// import React from 'react';
import { GluestackUIProvider, Center } from '@gluestack/ui';
// import { StyledProvider } from '@gluestack/ui-styled';
import { set, get } from '@gluestack/color-mode';
import { useDarkMode } from 'storybook-dark-mode';
import React from 'react';
import { config } from '../src/styled-components/ui.config';

window['setTheme'] = set;
window['getTheme'] = get;
const Wrapper = ({ children }: any) => {
  let value = useDarkMode();
  set(value ? 'dark' : 'light');

  console.log('config', config);

  return (
    // <StyledProvider config={config}>
    <GluestackUIProvider config={config}>
      <Center>{children}</Center>
    </GluestackUIProvider>
    // </StyledProvider>
  );
};

Wrapper.displayName = 'GluestackUIProvider';

export default Wrapper;
