import React from 'react';
import { Tooltip, Text, Box, Button, Center } from '@gluestack/ui';
import Wrapper from '../Wrapper';

export const Example = ({ placement, text, ...props }) => {
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
