import React from 'react';
import { HStack, Switch, Text } from '../../../core-components/themed';

const SwitchDemo = () => {
  return (
    <HStack space="md">
      <Switch />
      <Text size="sm">Allow notifications</Text>
    </HStack>
  );
};

export default SwitchDemo;
