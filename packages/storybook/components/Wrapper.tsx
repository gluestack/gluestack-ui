// import React from 'react';
import { GluestackUIProvider, Center, config } from '@gluestack/ui';
// import { StyledProvider } from 'dank-style';
// import { set, get } from '@gluestack/color-mode';
// import { useDarkMode } from 'storybook-dark-mode';
import React from 'react';

// window['setTheme'] = set;
// window['getTheme'] = get;
const Wrapper = ({ children }: any) => {
  // let value = useDarkMode();
  // set(value ? 'dark' : 'light');

  // console.log('config', config);

  return (
    <GluestackUIProvider config={config}>
      <Center>{children}</Center>
    </GluestackUIProvider>
  );
};

Wrapper.displayName = 'GluestackUIProvider';

export default Wrapper;
