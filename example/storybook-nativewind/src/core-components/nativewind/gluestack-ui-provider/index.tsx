import React, { useState } from 'react';
import { GlobalValuesContext } from './globalContext';
import { config } from './config';
import { View } from 'react-native';
import { OverlayProvider } from '@gluestack-ui/overlay';
import { ToastProvider } from '@gluestack-ui/toast';

export function GluestackUIProvider({
  mode = 'light',
  ...props
}: {
  mode?: 'light' | 'dark';
  children?: any;
}) {
  const [colorMode, setColorMode] = useState<'light' | 'dark'>(mode);

  return (
    <GlobalValuesContext.Provider value={{ colorMode, setColorMode }}>
      <View
        style={[
          config[mode],
          { flex: 1, height: '100%', width: '100%' },
          // @ts-ignore
          props.style,
        ]}
      >
        <OverlayProvider>
          <ToastProvider>{props.children}</ToastProvider>
        </OverlayProvider>
      </View>
    </GlobalValuesContext.Provider>
  );
}
