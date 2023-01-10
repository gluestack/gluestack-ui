/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';

import { Pressable, Text } from 'react-native';
import { styled } from '@gluestack/ui-styled';
import { Wrapper } from '../../components/Wrapper';
import { get, onChange, set } from '@gluestack/color-mode';
import { useDarkMode } from 'storybook-dark-mode';

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
            bg: '$blue500',
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
                bg: '$blue600',
              },
            },
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

export function StateColorMode({ ...args }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [currectColorMode, setCurrentColorMode] = React.useState(get());
  const isDark = useDarkMode();

  React.useEffect(() => {
    set(isDark ? 'dark' : 'light');
    setCurrentColorMode(get());
    onChange((currentColorMode: string) => {
      if (currentColorMode === 'dark') {
        document.body.classList.remove(`gs-light`);
      } else {
        document.body.classList.remove(`gs-dark`);
      }
      document.body.classList.add(`gs-${currentColorMode}`);
    });
    document.body.classList.add(`gs-${get()}`);
  }, [isDark]);

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
