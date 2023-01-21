import React from 'react';
import { View, Text } from 'react-native';
import { styled, verboseStyled } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';

console.log(verboseStyled, 'hello here');
const StyledButton = verboseStyled(
  View,
  {
    baseStyle: {
      style: {
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        m: 12,
      },
      platform: {
        web: {
          style: {
            //@ts-ignore
            outlineWidth: 0,
          },
        },
      },
    },
    variants: {
      variant: {
        redbox: {
          style: {
            bg: '$red400',
            px: '$4',
            py: '$3',
          },
          state: {
            hover: {
              style: {
                bg: '$blue400',
              },
            },
          },
        },
      },
      outline: {
        true: {
          style: {
            bg: '$red400',
            px: '$4',
            py: '$3',
          },
        },
      },
      size: {
        sm: {
          style: {
            px: '$4',
            py: '$3',
          },
        },
        md: {
          style: {
            px: '$5',
            py: '$4',
          },
        },
      },
    },

    defaultProps: {
      size: 'md',
      variant: 'redbox',
    },
  },
  {}
);

export function BaseStyleVariantSizes({ ...args }) {
  console.log('hello wr');
  return (
    <Wrapper>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <StyledButton size="sm" {...args}>
          <Text>bluebox - sm</Text>
        </StyledButton>
        <StyledButton>
          <Text>bluebox - md</Text>
        </StyledButton>
      </View>
    </Wrapper>
  );
}
