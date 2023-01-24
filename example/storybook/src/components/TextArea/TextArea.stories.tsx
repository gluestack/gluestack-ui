import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { TextArea } from './TextArea';
export const TextAreaStory = () => {
  return (
    <Wrapper>
      <TextArea />
    </Wrapper>
  );
};
const MyTextAreaVariantMeta: ComponentMeta<typeof TextAreaStory> = {
  title: 'recipes/stories/TextArea',
  component: TextAreaStory,
};

export default MyTextAreaVariantMeta;
