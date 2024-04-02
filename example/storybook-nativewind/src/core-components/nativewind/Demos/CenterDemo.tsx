import React from 'react';
import { Center } from '..//center';
import { Text } from '..//text';

const CenterDemo = () => {
  return (
    <Center className="bg-primary-500 h-[100px] w-[200px]">
      <Text className="text-typography-0 font-bold">This is the center.</Text>
    </Center>
  );
};

export default CenterDemo;
