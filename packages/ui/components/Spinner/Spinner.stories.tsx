import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Spinner, Box } from '@gluestack/ui';

const SpinnerMeta: ComponentMeta<typeof Spinner> = {
  title: 'FEEDBACK/Spinner',
  component: Spinner,
  argTypes: {},
  args: {},
};

export default SpinnerMeta;

type SpinnerStory = ComponentStory<typeof Spinner>;

export const Basic: SpinnerStory = ({ ...props }) => {
  return (
    <Box>
      <Spinner color="$primary500" />
    </Box>
  );
};
