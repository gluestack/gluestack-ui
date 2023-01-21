import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { Text } from './Text';
export const TextStory = () => {
  return (
    <Wrapper>
      <Text />
    </Wrapper>
  );
};
const MyTextVariantMeta: ComponentMeta<typeof TextStory> = {
  title: 'recipes/Text',
  component: TextStory,
};

export default MyTextVariantMeta;
