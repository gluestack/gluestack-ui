import { Root, Content } from './styled-component';
import { createTooltip } from '@universa11y/tooltip';
import React from 'react';
import { Pressable, Text } from 'react-native';

const TooltipTemp = createTooltip({
  Root,
  Content,
});

export const Tooltip = () => {
  return (
    <>
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
            color: '$white',
            px: '$2',
            py: '$1',
            fontSize: 12,
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
    </>
  );
};
