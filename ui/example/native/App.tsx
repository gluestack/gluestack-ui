import { Text, UIProvider, Center } from '@gluestack/ui';
import React from 'react';

import * as StyledComponent from './components';
import { ButtonBasicExample } from './screens';

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
        <Text>Helo</Text>
      </Center>
    </UIProvider>
  );
}
