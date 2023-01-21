/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { config } from '../../gluestack.config';
import { StyledProvider } from '@dank-style/react';
import { View } from 'react-native';
import { createProvider } from '@universa11y/provider';

const GluestackUIProvider = createProvider({ StyledProvider }) as any;
GluestackUIProvider.displayName = 'GluestackUIProvider';
export { GluestackUIProvider };

export const Wrapper = ({ children }: any) => {
  return (
    <StyledProvider config={config}>
      {/* <GluestackUIProvider> */}
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        {children}
      </View>
      {/* </GluestackUIProvider> */}
    </StyledProvider>
  );
};
