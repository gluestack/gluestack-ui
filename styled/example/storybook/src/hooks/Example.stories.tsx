import React from 'react';
import type { ComponentMeta } from '@storybook/react-native';
export const Hook = () => {
  return <div>hook</div>;
};

const MyHookMeta: ComponentMeta<typeof Hook> = {
  title: 'Hooks',
  component: Hook,
};

export default MyHookMeta;
