import React, { useEffect } from 'react';
import { View, ViewProps } from 'react-native';
import { OverlayProvider } from '@gluestack-ui/core/overlay/creator';
import { ToastProvider } from '@gluestack-ui/core/toast/creator';
import { Uniwind } from 'uniwind';

export type ModeType = 'light' | 'dark' | 'system';

export function GluestackUIProvider({
  mode = 'dark',
  ...props
}: {
  mode?: ModeType;
  children?: React.ReactNode;
  style?: ViewProps['style'];
}) {
  useEffect(() => {
    if (mode === 'system') {
      Uniwind.setTheme('system');
    } else {
      Uniwind.setTheme(mode);
    }
  }, [mode]);

  return (
    <View style={[{ flex: 1, height: '100%', width: '100%' }, props.style]}>
      <OverlayProvider>
        <ToastProvider>{props.children}</ToastProvider>
      </OverlayProvider>
    </View>
  );
}
