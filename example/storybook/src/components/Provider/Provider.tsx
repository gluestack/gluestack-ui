import { StyledProvider } from '@dank-style/react';
import { createProvider } from '@gluestack-ui/provider';
import {
  Root,
  Text,
  Group,
  GroupSpacer,
  Spinner,
} from '../styled-components/button';

import { createButton } from '@gluestack-ui/button';

const Button = createButton({
  Root,
  Text,
  Group,
  GroupSpacer,
  Spinner,
});

import React from 'react';
// import { config } from '../../gluestack.config';
import { Pressable } from 'react-native';

const ProviderTemp = createProvider({
  StyledProvider,
});

export const Provider = () => {
  const [colorMode, setColorMode] = React.useState('light');
  return (
    <StyledProvider>
      <ProviderTemp>
        <Pressable
          onPress={() => {
            setColorMode(colorMode === 'dark' ? 'light' : 'dark');
          }}
        >
          Hello
        </Pressable>
        <ProviderTemp>
          <StyledProvider colorMode={colorMode}>
            <Button bg="$red400" sx={{ _dark: { bg: '$blue400' } }} />
          </StyledProvider>
        </ProviderTemp>
      </ProviderTemp>
    </StyledProvider>
  );
};

export default Provider;
