import { Pressable, Center, Text } from '@gluestack/ui';
import React from 'react';
/* eslint-disable no-console */
export const Example = ({ ...props }) => {
  return (
    <Pressable
      onPress={() => console.log('Hello')}
      {...props}
      sx={{ style: { h: 100, w: 200 } }}
    >
      <Center
        sx={{
          style: {
            h: '100%',
            w: '100%',
            bg: '$primary500',
          },
        }}
      >
        <Text sx={{ style: { color: '$white' } }}>PRESSABLE</Text>
      </Center>
    </Pressable>
  );
};
