import React from 'react';
import { VStack, Heading, Divider } from '../';

const DividerDemo = () => {
  return (
    <VStack space="sm">
      <Heading size="sm" className="font-semibold">
        Firefox
      </Heading>
      <Divider />
      <Heading size="sm" className="font-semibold">
        Chrome
      </Heading>
    </VStack>
  );
};

export default DividerDemo;
