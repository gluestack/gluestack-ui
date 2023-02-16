import React from 'react';
import { Tooltip } from '@gluestack/ui-compiled';
import { Text } from '@gluestack/ui-compiled';
import { Button } from '@gluestack/ui-compiled';
import { Center } from '@gluestack/ui-compiled';

import Wrapper from '../Wrapper';

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
