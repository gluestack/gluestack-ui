import React from 'react';
import { UIProvider } from '@gluestack/ui';
import * as StyledComponent from './../components-styled';

export default ({ children, theme }: any) => {
  return (
    <UIProvider
      components={{
        ...StyledComponent,
      }}
    >
      {children}
    </UIProvider>
  );
};
