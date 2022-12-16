import { Pressable, Text } from '@gluestack/ui-components';
import React from 'react';
/* eslint-disable no-console */
export const Example = ({ ...props }) => {
  return (
    <Pressable
      onPress={() => console.log('Hello')}
      sx={{ style: { bg: 'red.500', p: 12 } }}
      {...props}
    >
      <Text>Hello</Text>
    </Pressable>
  );
};
