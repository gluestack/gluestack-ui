import React from 'react';
import { UIProvider, Center } from '@gluestack/ui';

import * as StyledComponent from './components';
import { ButtonBasicExample } from './screens';

// const components = {}
export default function App() {
  return (
    <UIProvider
      components={{
        ...StyledComponent,
      }}
    >
      <Center
        sx={{
          style: {
            flex: 1,
          },
        }}
      >
        <ButtonBasicExample />
      </Center>
    </UIProvider>
  );
}
