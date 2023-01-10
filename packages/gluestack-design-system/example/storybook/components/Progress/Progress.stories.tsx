import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Progress } from '@gluestack/design-system';
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

export const Basic: ProgressBasicStory = ({ value }) => {
  return (
    <Wrapper>
      <Progress value={value}>
        <Progress.FilledTrack />
      </Progress>
    </Wrapper>
  );
};
