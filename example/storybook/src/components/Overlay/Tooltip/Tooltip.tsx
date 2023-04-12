import React from 'react';
import Wrapper from '../../Wrapper';
import { Center, Button, Tooltip, Text } from '../../../ui-components';

export const TooltipStory = ({
  placement = 'bottom',
  text = 'Hello world',
}: any) => {
  return (
    <Wrapper>
      <Center w={500} h={500} bg="$red500">
        <Tooltip
          offset={10}
          placement={placement}
          trigger={(triggerProps: any) => {
            return (
              <Button {...triggerProps}>
                <Button.Text>More</Button.Text>
              </Button>
            );
          }}
        >
          <Tooltip.Content>
            <Text>{text}</Text>
          </Tooltip.Content>
        </Tooltip>
      </Center>
    </Wrapper>
  );
};

export { Tooltip, Center, Button, Text };
