import { Button, Provider as ProviderTemp } from '@components';
import { StyledProvider } from '@dank-style/react';
import React from 'react';
// import { config } from '../../gluestack.config';
import { Pressable } from 'react-native';

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
