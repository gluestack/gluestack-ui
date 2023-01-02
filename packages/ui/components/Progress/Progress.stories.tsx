import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Progress } from '@gluestack/ui';

const ProgressMeta: ComponentMeta<typeof Progress> = {
  title: 'FEEDBACK/Progress',
  component: Progress,
  argTypes: {
    value: {
      type: 'number',
      defaultValue: '50',
    },
  },
  args: {
    value: 40,
  },
};

export default ProgressMeta;

type ProgressBasicStory = ComponentStory<typeof Progress>;

export const Basic: ProgressBasicStory = ({ value, ...props }) => {
  return (
    <Progress value={value}>
      <Progress.FilledTrack />
    </Progress>
  );
};
