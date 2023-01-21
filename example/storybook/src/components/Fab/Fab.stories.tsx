import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { Fab } from './Fab';
export const FabStory = () => {
  return (
    <Wrapper>
      <Fab />
    </Wrapper>
  );
};
const MyFabVariantMeta: ComponentMeta<typeof FabStory> = {
  title: 'recipes/Fab',
  component: FabStory,
};

export default MyFabVariantMeta;
