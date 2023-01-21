import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { Switch } from './Switch';
export const SwitchStory = () => {
  return (
    <Wrapper>
      <Switch />
    </Wrapper>
  );
};
const MySwitchVariantMeta: ComponentMeta<typeof SwitchStory> = {
  title: 'recipes/Switch',
  component: SwitchStory,
};

export default MySwitchVariantMeta;
