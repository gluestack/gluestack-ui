import { themes } from '@components/core/theme';
import React from 'react';
import { Platform, View } from 'react-native';

const providerStyle = Platform.select({
  web: {
    flex: 1,
    height: '100vh',
    width: '100%',
  },
  android: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  ios: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});

export function ThemeProvider({
  mode,
  ...props
}: {
  mode: 'light' | 'dark';
  children: any;
}) {
  return <View style={[themes[mode], providerStyle]}>{props.children}</View>;
}
