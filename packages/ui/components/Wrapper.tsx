// import React from 'react';
import { Provider, Center } from '@gluestack/ui';
import { set, get } from '@gluestack/color-mode';
import { useDarkMode } from 'storybook-dark-mode';
import React from 'react';

export default ({ children }: any) => {
  let value = useDarkMode();
  set(value ? 'dark' : 'light');
  return (
    <Provider>
      <Center>{children}</Center>
    </Provider>
  );
};
