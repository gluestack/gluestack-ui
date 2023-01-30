/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { config } from '../gluestack.config';
import { StyledProvider } from '@dank-style/react';
import { View } from 'react-native';
import { createProvider } from '@universa11y/provider';

const Provider = createProvider({ StyledProvider }) as any;
Provider.displayName = 'Provider';

export const Wrapper = ({ children }: any) => {
  return (
    <Provider config={config}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          height: '100%',
          width: '100%',
        }}
      >
        {children}
      </View>
    </Provider>
  );
};
