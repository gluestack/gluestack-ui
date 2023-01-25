import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { Radio } from './Radio';
export const RadioStory = () => {
  return (
    <Wrapper>
      <Radio />
    </Wrapper>
  );
};
const MyRadioVariantMeta: ComponentMeta<typeof RadioStory> = {
  title: 'components/stories/Radio',
  component: RadioStory,
};

export default MyRadioVariantMeta;
