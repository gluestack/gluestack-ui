import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Popover, Center, Button, Text, CloseIcon } from '@gluestack/ui';
import Wrapper from '../Wrapper';

var st = document.createElement('style');
st.innerHTML = `#story--popover--basic{ height: 300px }`;
document.body.append(st);

const PopoverMeta: ComponentMeta<typeof Popover> = {
  title: 'Popover',
  component: Popover,
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
    placement: 'bottom',
  },
};

export default PopoverMeta;

type PopoverStory = ComponentStory<typeof Popover>;

export const Basic: PopoverStory = ({ placement, ...props }) => {
  return (
    <Wrapper>
      <Popover
        placement={placement}
        trigger={(triggerProps: any) => {
          return (
            <Center>
              <Button {...triggerProps}>
                <Button.Text>Delete Customer</Button.Text>
              </Button>
            </Center>
          );
        }}
      >
        <Popover.Backdrop />
        <Popover.Content>
          <Popover.Arrow />
          <Popover.CloseButton>
            <CloseIcon sx={{ style: { w: 16, h: 16 } }} />
          </Popover.CloseButton>
          <Popover.Header>
            <Text variant="modalHeader">Delete Customer</Text>
          </Popover.Header>
          <Popover.Body>
            <Text>
              This will remove all data relating to Alex. This action cannot be
              reversed. Deleted data can not be recovered.
            </Text>
          </Popover.Body>
          <Popover.Footer>
            <Button variant="outline" sx={{ style: { mr: 8 } }}>
              <Button.Text>Cancel</Button.Text>
            </Button>
            <Button variant="solid">
              <Button.Text>Delete</Button.Text>
            </Button>
          </Popover.Footer>
        </Popover.Content>
      </Popover>
    </Wrapper>
  );
};
