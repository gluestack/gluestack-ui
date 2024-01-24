import { themes } from '@components/theme';
import React from 'react';
import { View } from 'react-native';

export function ThemeProvider({
  mode,
  ...props
}: {
  mode: 'light' | 'dark';
  children: any;
}) {
  return <View style={themes[mode]}>{props.children}</View>;
}
