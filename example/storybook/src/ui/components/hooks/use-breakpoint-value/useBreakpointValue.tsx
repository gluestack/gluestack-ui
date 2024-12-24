import { View, Text } from 'react-native';
import { useBreakpointValue } from '@gluestack-ui/themed';
import React from 'react';

export default function Example({}: any) {
  const flexDir = useBreakpointValue({
    base: 'column',
    sm: 'row',
  });

  return (
    <View
      style={{
        flexDirection: flexDir,
        gap: 10,
      }}
    >
      <View
        style={{
          backgroundColor: '#bcffdd',
          padding: 10,
        }}
      >
        <Text>Universal</Text>
      </View>
      <View
        style={{
          backgroundColor: '#bcffdd',
          padding: 10,
        }}
      >
        <Text>Performant</Text>
      </View>
      <View
        style={{
          backgroundColor: '#bcffdd',
          padding: 10,
        }}
      >
        <Text>Accessible</Text>
      </View>
    </View>
  );
}
