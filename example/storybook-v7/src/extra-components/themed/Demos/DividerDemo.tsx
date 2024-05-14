import React from 'react';
import { VStack, Heading, Divider } from '../../../core-components/themed';

const DividerDemo = () => {
  return (
    <VStack space="xs">
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
