// import React from 'react';
import { Provider } from '@gluestack/ui';
import { set, get } from '@gluestack/color-mode';
import { useDarkMode } from 'storybook-dark-mode';

const Wrapper = ({ children }: any) => {
  let value = useDarkMode();
  set(value ? 'dark' : 'light');
  return <Provider>{children}</Provider>;
};

Wrapper.displayName = 'Wrapper';

export default Wrapper;
