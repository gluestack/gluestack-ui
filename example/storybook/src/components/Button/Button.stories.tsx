import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { Button } from './Button';
export const ButtonStory = () => {
  return (
    <Wrapper>
      <Button />
    </Wrapper>
  );
};
const MyButtonVariantMeta: ComponentMeta<typeof ButtonStory> = {
  title: 'components/stories/Button',
  component: ButtonStory,
};

export default MyButtonVariantMeta;
