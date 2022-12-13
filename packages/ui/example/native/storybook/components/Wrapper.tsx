import React from 'react';
import { Center, UIProvider } from '@gluestack/ui';
import * as StyledComponent from './../../components';

export default ({ children, theme }: any) => {
  return (
    <UIProvider
      components={{
        ...StyledComponent,
      }}
    >
      <Center sx={{ style: { flex: 1 } }}>{children}</Center>
    </UIProvider>
  );
};
