/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import { styled, StyledProvider } from '@gluestack/ui-styled';

const StyledThemeTokens = styled(
  View,
  {
    baseStyle: {
      style: {
        height: 100,
        width: 100,
        bg: '$primary400',
        margin: 10,
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
      primary50: '#ecfdf5',
      primary100: '#d1fae5',
      primary200: '#a7f3d0',
      primary300: '#6ee7b7',
      primary400: '#34d399',
      primary500: '#10b981',
      primary600: '#059669',
    },
  } as const,
};

export function ThemeTokens() {
  return (
    <StyledProvider config={customConfig}>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <StyledThemeTokens />
        <StyledThemeTokens bg="$primary600" />
      </View>
    </StyledProvider>
  );
}
