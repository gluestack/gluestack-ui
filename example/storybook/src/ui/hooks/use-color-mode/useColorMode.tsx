import { View, Text } from 'react-native';
import { useColorMode } from '@gluestack-ui/themed';
import React from 'react';

export default function Example({}: any) {
  const colorMode = useColorMode();
  return (
    <View
      style={{
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colorMode === 'light' ? 'black' : 'white',
      }}
    >
      <Text
        style={{
          color: colorMode === 'light' ? 'white' : 'black',
        }}
      >
        {colorMode}
      </Text>
    </View>
  );
}
