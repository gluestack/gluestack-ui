import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Tooltip, Text, Box, Button, Center } from '@gluestack/ui';
import Wrapper from './../Wrapper';

const MyTooltipMeta: ComponentMeta<typeof Tooltip> = {
  title: 'Tooltip',
  component: Tooltip,
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'bottom',
        'bottom-end',
        'bottom-start',
        'top',
        'top-end',
        'top-start',
        'left',
        'left-end',
        'left-start',
        'right',
        'right-end',
        'right-start',
      ],
    },
  },
  args: {
    text: 'Hello world',
    placement: 'bottom',
  },
  parameters: {
    docs: {
      source: {
        type: 'auto',
      },
      description: {
        component:
          'A **tooltip** provides a brief, informative message when a user interacts with an element. Methods of **tooltip** initiation include: through a mouse-hover gesture or a keyboard-hover gesture.',
      },
    },
  },
};

export default MyTooltipMeta;

type TooltipStory = ComponentStory<typeof Tooltip>;

export const Basic: TooltipStory = ({ placement, text, ...props }) => {
  return (
    <Wrapper>
      <Tooltip
        placement={placement}
        trigger={(triggerProps: any) => {
          return (
            <Center>
              <Button {...triggerProps}>
                <Button.Text>More</Button.Text>
              </Button>
            </Center>
          );
        }}
      >
        <Tooltip.Content>
          <Box sx={{ style: { bg: '$black', rounded: '$sm' } }}>
            <Text
              sx={{
                style: { color: '$white', px: '$2', py: '$1', fontSize: 12 },
              }}
            >
              {text}
            </Text>
          </Box>
        </Tooltip.Content>
      </Tooltip>
    </Wrapper>
  );
};
