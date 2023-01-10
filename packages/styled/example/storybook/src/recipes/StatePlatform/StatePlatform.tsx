import React, { useState } from 'react';

import { Pressable, Text } from 'react-native';
import { styled } from '@gluestack/ui-styled';
import { Wrapper } from '../../components/Wrapper';
const StyledStatePlatform = styled(
  Pressable,
  {
    baseStyle: {
      style: {
        bg: '$primary600',
        p: '$3',
      },
      descendants: {
        _text: {
          style: {
            color: '$white',
          },
        },
      },
      state: {
        active: {
          style: {
            bg: '$primary700',
          },
        },
      },
      platform: {
        web: {
          style: { bg: '$red500' },
          state: {
            active: {
              style: {
                bg: '$red700',
              },
            },
          },
        },
        android: {
          style: {
            bg: '$green500',
          },
          state: {
            active: {
              style: {
                bg: '$green700',
              },
            },
          },
        },
        ios: {
          style: {
            bg: '$blue500',
          },
          state: {
            active: {
              style: {
                bg: '$blue700',
              },
            },
          },
        },
      },
    },
  },
  { descendantStyle: ['_text'] }
);

const StyledButtonText = styled(
  Text,
  {},
  {
    ancestorStyle: ['_text'],
  }
);

export function StatePlatform({ ...args }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Wrapper>
      <StyledStatePlatform
        onPressIn={() => setIsActive(true)}
        onPressOut={() => setIsActive(false)}
        states={{
          active: isActive,
        }}
      >
        <StyledButtonText>Button</StyledButtonText>
      </StyledStatePlatform>
    </Wrapper>
  );
}
