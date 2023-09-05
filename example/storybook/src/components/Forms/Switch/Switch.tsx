import React from 'react';
import { Switch, VStack, Text, HStack } from '@gluestack-ui/themed';

const SwitchStory = ({ ...props }: any) => {
  return <Switch defaultValue={true} value={props.isEnabled} {...props} />;
};

export default SwitchStory;

export { Switch, VStack, Text, HStack };
