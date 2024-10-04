import React from 'react';
import { Pressable, Text } from '../../../core-components/nativewind';

const PressableDemo = () => {
  return (
    <Pressable
      // eslint-disable-next-line no-console
      onPress={() => console.log('Hello')}
      className="p-5 bg-primary-500"
    >
      <Text className="text-typography-0">Press me</Text>
    </Pressable>
  );
};

export default PressableDemo;
