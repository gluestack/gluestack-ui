import React from 'react';
import { Switch, VStack, Text, HStack } from '@custom-ui/themed';

const SwitchBasic = ({ ...props }: any) => {
  return <Switch defaultValue={true} value={props.isEnabled} {...props} />;
};

SwitchBasic.description =
  'This is a basic Switch component example. Switches are used to toggle between two states.';

export default SwitchBasic;

export { Switch, VStack, Text, HStack };
