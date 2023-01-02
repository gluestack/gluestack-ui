import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Progress } from '@gluestack/ui';
import Wrapper from '../Wrapper';

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
    <Wrapper>
      <Progress value={value} width="100%">
        <Progress.FilledTrack />
      </Progress>
    </Wrapper>
  );
};
