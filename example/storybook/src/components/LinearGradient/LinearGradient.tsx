import { Root } from './styled-component';
import { createLinearGradient } from '@universa11y/linear-gradient';
import React from 'react';
import { Pressable, Text } from 'react-native';

const LinearGradientTemp = createLinearGradient({
  Root,
});

export const LinearGradient = () => {
  return (
    <>
      <LinearGradientTemp
        colors={['red', '#3b5998', '#192f6a']}
        start={{ x: 0, y: 0.5 }}
        sx={{
          style: {
            alignItems: 'center',
          },
        }}
      >
        <Pressable
          style={{
            width: 100,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>BOX</Text>
        </Pressable>
      </LinearGradientTemp>
    </>
  );
};
