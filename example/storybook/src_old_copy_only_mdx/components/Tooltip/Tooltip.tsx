import { Root, Content } from './styled-component';
import { createTooltip } from '@universa11y/tooltip';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { Wrapper } from '../Wrapper';

export const AccessibleTooltip: any = createTooltip({
  Root,
  Content,
});

export const Tooltip = () => {
  return (
    <Wrapper>
      <AccessibleTooltip
        placement="bottom"
        trigger={(triggerProps: any) => {
          return (
            <Pressable
              style={{
                backgroundColor: 'blue',
                padding: 10,
                borderRadius: 4,
              }}
              {...triggerProps}
            >
              <Text style={{ color: 'white' }}>Tooltip</Text>
            </Pressable>
          );
        }}
      >
        <AccessibleTooltip.Content
          sx={{
            color: '$white',
            px: '$2',
            py: '$1',
            fontSize: 12,
          }}
        >
          <Text>Hello world</Text>
        </AccessibleTooltip.Content>
      </AccessibleTooltip>
    </Wrapper>
  );
};

export default Tooltip;
