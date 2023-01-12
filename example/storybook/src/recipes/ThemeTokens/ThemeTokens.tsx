/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import { styled, StyledProvider } from '@dank-style/react';

const StyledThemeTokens = styled(
  View,
  {
    baseStyle: {
      style: {
        height: 100,
        width: 100,
        bg: '$primary300',
        margin: 10,
        borderWidth: '$1',
        borderColor: '$lightBlue500',
      },
    },
  },
  {}
);

const customConfig = {
  aliases: {
    bg: 'backgroundColor',
    backgroundColor: 'backgroundColor',
    bgColor: 'backgroundColor',
  } as const,

  tokens: {
    colors: {
      primary50: '#fffbeb',
      primary100: '#fef3c7',
      primary200: '#fde68a',
      primary300: '#fcd34d',
      primary400: '#fbbf24',
      primary500: '#f59e0b',
      primary600: '#d97706',
      lightBlue300: '#7dd3fc',
      lightBlue400: '#38bdf8',
      lightBlue500: '#0ea5e9',
      lightBlue600: '#0284c7',
    },
    borderWidths: {
      '0': 0,
      '1': '4px',
      '2': '8px',
      '4': '12px',
      '8': '16px',
    },
  } as const,
} as const;

export function ThemeTokens() {
  return (
    <StyledProvider config={customConfig}>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <StyledThemeTokens />
        <StyledThemeTokens bg="$primary500" />
      </View>
    </StyledProvider>
  );
}
