import React from 'react';
import { HStack, Heading, Divider } from '../';

const DividerDemo = () => {
  return (
    <HStack
      className={`items-center justify-center flex-col h-auto
     gap-2.5`}
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
