import { Text } from '@/components/ui/text';
import { Center } from '@/components/ui/center';
import React from 'react';

const CenterBasic = () => {
  return (
    <Center className="bg-primary-500 h-[200] w-[300]">
      <Text className="color-white font-bold">This is the center.</Text>
    </Center>
  );
};

CenterBasic.description =
  'This is a basic Center component example. A center is a layout component that centers its children.';

export default CenterBasic;

export { Text, Center };
