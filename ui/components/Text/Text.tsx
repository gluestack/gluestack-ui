import React from 'react';
import { Text } from '@gluestack/ui';

export const Example = ({ ...props }) => {
  return <Text {...props}>{props.text}</Text>;
};
