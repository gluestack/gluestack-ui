import React from 'react';
import { config } from '../../nb.config';
import { StyledProvider } from '@dank-style/react';
import { View } from 'react-native';
export const Wrapper = ({ children, colorMode }: any) => {
  return (
    <StyledProvider config={config} colorMode={colorMode}>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        {children}
      </View>
    </StyledProvider>
  );
};
