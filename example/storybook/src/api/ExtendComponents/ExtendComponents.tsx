import React from 'react';
import { View, Text } from 'react-native';
import { StyledProvider, styled } from '@gluestack-style/react';
import { config } from '../../components/nb.config';

const Box = styled(
  View,
  {
    bg: '$amber400',
    p: '$10',
  },
  {
    componentName: 'Box',
  }
);
export function ExtendComponentsExample() {
  return (
    <StyledProvider config={config} colorMode={'dark'}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box />
      </View>
    </StyledProvider>
  );
}

export default ExtendComponentsExample;
// variant reserved keys
// not utility props as utility props get resolved first
