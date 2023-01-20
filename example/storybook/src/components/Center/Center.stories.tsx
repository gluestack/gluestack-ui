import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { Center } from './Center';
export const CenterStory = () => {
  return (
    <Wrapper>
      <Center />
    </Wrapper>
  );
};
const MyCenterVariantMeta: ComponentMeta<typeof CenterStory> = {
  title: 'recipes/Center',
  component: CenterStory,
};

export default MyCenterVariantMeta;
