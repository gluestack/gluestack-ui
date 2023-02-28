import React from 'react';
import Wrapper from '../Wrapper';
import { Center, Button, Tooltip, Text } from '../../ui-components';

export const TooltipStory = ({
  placement = 'bottom',
  text = 'Hello world',
}: any) => {
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
          <Text
            sx={{
              color: '$white',
              px: '$2',
              py: '$1',
              fontSize: 12,
            }}
          >
            {text}
          </Text>
        </Tooltip.Content>
      </Tooltip>
    </Wrapper>
  );
};

export { Tooltip, Center, Button, Text };
