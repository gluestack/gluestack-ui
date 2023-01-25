import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { IconButton } from './IconButton';
export const IconButtonStory = () => {
  return (
    <Wrapper>
      <IconButton />
    </Wrapper>
  );
};
const MyIconButtonVariantMeta: ComponentMeta<typeof IconButtonStory> = {
  title: 'components/stories/IconButton',
  component: IconButtonStory,
};

export default MyIconButtonVariantMeta;
