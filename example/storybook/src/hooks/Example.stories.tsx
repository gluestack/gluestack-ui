import React from 'react';
import { Text } from 'react-native';
import type { ComponentMeta } from '@storybook/react-native';
export const Hook = () => {
  return <Text>hook</Text>;
};

const MyHookMeta: ComponentMeta<typeof Hook> = {
  title: 'Hooks',
  component: Hook,
};

export default MyHookMeta;
