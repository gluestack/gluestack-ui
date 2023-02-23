import React from 'react';
import { config } from './nb.config';
import { StyledProvider } from '@dank-style/react';
import { View } from 'react-native';
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
