import { View } from 'react-native';
import { useStyled } from '@gluestack-ui/themed';
import React from 'react';

export default function Example({}: any) {
  const styled = useStyled();
  return (
    <View
      style={{
        width: 100,
        height: 100,
        backgroundColor: styled.config.tokens.colors.primary500,
      }}
    />
  );
}
