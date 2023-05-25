import React from 'react';
import { config } from './nb.config';
import { StyledProvider } from '@gluestack-style/react';
import { View, Text } from 'react-native';
export const Wrapper = ({ children, colorMode, ...props }: any) => {
  return (
    <StyledProvider config={config} colorMode={colorMode} {...props}>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        {children}
      </View>
    </StyledProvider>
  );
};

export default Wrapper;
