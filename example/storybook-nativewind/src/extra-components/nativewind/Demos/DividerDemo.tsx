import React from 'react';
import { HStack, Heading, Divider } from '../../../core-components/nativewind';

const DividerDemo = () => {
  return (
    <HStack
      className={`items-center justify-center flex-col h-auto
     gap-1`}
    >
      <Heading size="sm" className="font-semibold">
        Firefox
      </Heading>
      <Divider />
      <Heading size="sm" className="font-semibold">
        Chrome
      </Heading>
    </HStack>
  );
};

export default DividerDemo;
