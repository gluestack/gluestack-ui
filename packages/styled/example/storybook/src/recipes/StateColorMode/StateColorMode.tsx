/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';

import { Pressable, Text } from 'react-native';
import { styled } from '@gluestack/ui-styled';
import { Wrapper } from '../../components/Wrapper';
import { get, set } from '@gluestack/color-mode';

const StyledStateColorMode = styled(
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
        hover: {
          style: {
            bg: '$primary700',
          },
        },
        active: {
          style: {
            bg: '$primary800',
          },
        },
      },
      colorMode: {
        dark: {
          style: {
            bg: '$green500',
          },
          descendants: {
            _text: {
              style: {
                color: '$white',
              },
            },
          },
          state: {
            hover: {
              style: {
                bg: '$green600',
              },
            },
            active: {
              style: {
                bg: '$green700',
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

export function StateColorMode({ ...args }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [currectColorMode, setCurrentColorMode] = React.useState(get());
  return (
    <Wrapper>
      <Pressable
        style={{
          backgroundColor: 'gray',
          padding: 12,
          marginBottom: 12,
        }}
        onPress={() => {
          set(get() === 'dark' ? 'light' : 'dark');
          setCurrentColorMode(get());
        }}
      >
        <Text style={{ color: 'white' }}>
          Toggle {currectColorMode === 'dark' ? 'light' : 'dark'}
        </Text>
      </Pressable>
      <StyledStateColorMode
        onHoverIn={() => setIsHovered(true)}
        onHoverOut={() => setIsHovered(false)}
        onPressIn={() => setIsActive(true)}
        onPressOut={() => setIsActive(false)}
        states={{
          hover: isHovered,
          active: isActive,
        }}
      >
        <StyledButtonText>Button</StyledButtonText>
      </StyledStateColorMode>
    </Wrapper>
  );
}
