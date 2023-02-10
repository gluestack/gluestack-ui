import { StyledProvider } from '@dank-style/react';
import { createProvider } from '@universa11y/provider';
import {
  Root,
  Text,
  Group,
  GroupSpacer,
  Spinner,
} from './../Button/styled-component';

import { createButton } from '@universa11y/button';

const Button = createButton({
  Root,
  Text,
  Group,
  GroupSpacer,
  Spinner,
});

import React from 'react';
import { config } from '../../gluestack.config';
import { Pressable } from 'react-native';

const ProviderTemp = createProvider({
  StyledProvider,
});

export const Provider = () => {
  const [colorMode, setColorMode] = React.useState('light');
  return (
    <StyledProvider config={config}>
      <ProviderTemp config={config}>
        <Pressable
          onPress={() => {
            setColorMode(colorMode === 'dark' ? 'light' : 'dark');
          }}
        >
          Hello
        </Pressable>
        <ProviderTemp config={config}>
          <StyledProvider config={config} colorMode={colorMode}>
            <Button bg="$red400" sx={{ _dark: { bg: '$blue400' } }} />
          </StyledProvider>
        </ProviderTemp>
      </ProviderTemp>
    </StyledProvider>
  );
};

export default Provider;
