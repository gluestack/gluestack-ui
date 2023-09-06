import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import Link from './Link';

const LinkStory = ({ ...props }: any) => {
  return <Link {...props} />;
};
const LinkMeta: ComponentMeta<typeof LinkStory> = {
  title: 'stories/FORMS/Link',
  component: LinkStory,
  argTypes: {
    isHovered: {
      control: 'boolean',
      options: [true, false],
    },
    isPressed: {
      control: 'boolean',
      options: [true, false],
    },
    isFocusVisible: {
      control: 'boolean',
      options: [true, false],
    },
    isDisabled: {
      control: 'boolean',
      options: [true, false],
    },
  },
  args: {
    isHovered: false,
    isPressed: false,
    isFocusVisible: false,
    isDisabled: false,
  },
};

export { LinkStory };
export default LinkMeta;
