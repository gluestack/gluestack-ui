import React from 'react';
import { Center, Text, Divider } from '../../../core-components/nativewind';

const DividerDemo = () => {
  return (
    <Center>
      <Text className="font-semibold">Easy</Text>
      <Divider className="my-0.5" />
      <Text className="font-semibold">Difficult</Text>
    </Center>
  );
};

export default DividerDemo;
