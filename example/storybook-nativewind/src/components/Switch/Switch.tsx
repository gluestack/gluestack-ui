import React from 'react';
import { VStack, Text, HStack } from '@gluestack-ui/themed';
import { Switch } from '../../components-example/themed/Switch';

const SwitchBasic = ({ ...props }: any) => {
  return <Switch defaultValue={true} value={props.isEnabled} {...props} />;
};

SwitchBasic.description =
  'This is a basic Switch component example. Switches are used to toggle between two states.';

export default SwitchBasic;

export { Switch, VStack, Text, HStack };
