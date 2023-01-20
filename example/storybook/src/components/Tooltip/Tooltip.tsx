import { Root, Content, Arrow } from './styled-component';
import { createTooltip } from '@universa11y/tooltip';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { createButton } from '@universa11y/button';
import {
  Root as ButtonRoot,
  // Text,
  Group,
  GroupSpacer,
  Spinner,
} from '../Button/styled-component';
import { Wrapper } from '../Wrapper';

const TooltipTemp = createTooltip({
  Root,
  Content,
});

const ButtonTemp = createButton({
  ButtonRoot,
  Text,
  Group,
  GroupSpacer,
  Spinner,
});

export const Tooltip = () => {
  return (
    <Wrapper>
      <TooltipTemp
        placement="bottom"
        trigger={(triggerProps: any) => {
          return (
            <Pressable
              style={{ backgroundColor: 'blue', padding: 10, borderRadius: 4 }}
              {...triggerProps}
            >
              <Text style={{ color: 'white' }}>Tooltip</Text>
            </Pressable>
            // <Center>
            //   <Button {...triggerProps}>
            //     <Button.Text>More</Button.Text>
            //   </Button>
            // </Center>
          );
        }}
      >
        <TooltipTemp.Content
          sx={{
            style: { color: '$white', px: '$2', py: '$1', fontSize: 12 },
          }}
        >
          {/* <Text
            sx={{
              style: { color: '$white', px: '$2', py: '$1', fontSize: 12 },
            }}
          >
            {text}
          </Text> */}
          Hello world
        </TooltipTemp.Content>
      </TooltipTemp>
    </Wrapper>
  );
};
