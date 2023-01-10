import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Button, Actionsheet, Center } from '@gluestack/design-system';
import Wrapper from './../Wrapper';
import { useArgs } from '@storybook/client-api';

// // Hack for now
// var st = document.createElement('style');
// st.innerHTML = `#story--actionsheet--basic{ height: 350px }`;
// document.body.append(st);

const ActionsheetMeta: ComponentMeta<typeof Actionsheet> = {
  title: 'DISCLOSURE/Actionsheet',
  component: Actionsheet,
  argTypes: {
    showActionsheet: {
      control: 'boolean',
    },
  },
  args: {
    showActionsheet: true,
  },
  parameters: {
    docs: {
      description: {
        component: '**markdown** description goes here',
      },
    },
  },
};

export default ActionsheetMeta;

type ActionsheetStory = ComponentStory<typeof Actionsheet>;

export const Basic: ActionsheetStory = ({ ...props }) => {
  const [{ showActionsheet }, updateArgs] = useArgs();
  const handleClose = () => updateArgs({ showActionsheet: !showActionsheet });

  return (
    <Wrapper>
      <Center>
        <Button onPress={handleClose}>
          <Button.Text>Open</Button.Text>
        </Button>
      </Center>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose} {...props}>
        <Actionsheet.Backdrop />
        <Actionsheet.Content>
          <Actionsheet.DragIndicatorWrapper>
            <Actionsheet.DragIndicator />
          </Actionsheet.DragIndicatorWrapper>

          <Actionsheet.Item onPress={() => {}}>
            <Actionsheet.ItemText>Share</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={() => {}}>
            <Actionsheet.ItemText>Delete</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={() => {}} isDisabled>
            <Actionsheet.ItemText>Play</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={() => {}}>
            <Actionsheet.ItemText>Favourite</Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={handleClose}>
            <Actionsheet.ItemText>Cancel</Actionsheet.ItemText>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Wrapper>
  );
};
