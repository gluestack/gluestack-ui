import React from 'react';
import { Center } from '../../../core-components/nativewind/center';
import { Text } from '../../../core-components/nativewind/text';

const CenterDemo = () => {
  return (
    <Center className="bg-primary-500 h-[100px] w-[200px]">
      <Text className="text-typography-0 font-bold">This is the center.</Text>
    </Center>
  );
};

export default CenterDemo;
