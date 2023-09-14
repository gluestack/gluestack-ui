import React from 'react';
import { Switch, VStack, Text, HStack } from '@gluestack-ui/themed';

const SwitchBasic = ({ ...props }: any) => {
  return <Switch defaultValue={true} value={props.isEnabled} {...props} />;
};

export default SwitchBasic;

export { Switch, VStack, Text, HStack };
