// import React from 'react';
import { AppProvider, Center } from '@gluestack/design-system';
// import { StyledProvider } from '@gluestack/design-system-styled';
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
    <AppProvider>
      <Center>{children}</Center>
    </AppProvider>
  );
};

Wrapper.displayName = 'GluestackUIProvider';

export default Wrapper;
