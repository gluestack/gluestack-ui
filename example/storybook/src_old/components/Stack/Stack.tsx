import { Root, HSpacer, VSpacer } from './styled-component';
import { createStack } from '@universa11y/stack';
import { Wrapper } from '../Wrapper';
import React from 'react';
import { View } from 'react-native';

export const AccessibleStack = createStack({
  Root,
  HSpacer,
  VSpacer,
});

export const Stack = () => {
  return (
    <Wrapper>
      <AccessibleStack
        space="md"
        direction="column"
        //@ts-ignore
        sx={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <View
          style={{ height: 20, width: 20, backgroundColor: 'red' }}
          // sx={{ style: { w: 200, h: 100, rounded: '$sm', bg: '$blue300' } }}
        />
        <View
          style={{ height: 20, width: 20, backgroundColor: 'red' }}
          // sx={{ style: { w: 200, h: 100, rounded: '$sm', bg: '$blue400' } }}
        />
        <View
          style={{ height: 20, width: 20, backgroundColor: 'red' }}
          // sx={{ style: { w: 200, h: 100, rounded: '$sm', bg: '$blue500' } }}
        />
        <View
          style={{ height: 20, width: 20, backgroundColor: 'red' }}
          // sx={{ style: { w: 200, h: 100, rounded: '$sm', bg: '$blue600' } }}
        />
      </AccessibleStack>
    </Wrapper>
  );
};

export default Stack;
