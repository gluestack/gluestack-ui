import { Pressable, Text } from '../../../core-components/nativewind';
import React from 'react';

const PressableDemo = () => {
  return (
    <Pressable
      onPress={() => console.log('Hello')}
      className="p-5 bg-primary-500"
    >
      <Text className="text-typography-0">Press me</Text>
    </Pressable>
  );
};

export default PressableDemo;
