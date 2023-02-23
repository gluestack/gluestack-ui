import React from 'react';

import { Root, Content } from '../styled-components/tooltip';

import Wrapper from '../Wrapper';

import { createTooltip } from '@gluestack-ui/tooltip';
import { Center } from '../Center/Center';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';

export const Tooltip = createTooltip({
  Root,
  Content,
}) as any;

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
