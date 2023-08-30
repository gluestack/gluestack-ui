import React from 'react';
import { View, Text as RNText } from 'react-native';
import { styled, StyledProvider, Theme } from '@gluestack-style/react';
import { Wrapper } from '../../components/Wrapper';

const StyledButton = styled(
  View,
  {
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    m: '$3',
    variants: {
      variant: {
        redbox: {
          'bg': '$red400',
          'px': '$4',
          'py': '$3',
          ':hover': {
            bg: '$amber500',
          },
        },
      },
      size: {
        sm: {
          px: '$4',
          py: '$3',
        },
        md: {
          px: '$5',
          py: '$4',
        },
        naya: {},
      },
    },
    compoundVariants: [
      {
        variant: 'redbox',
        size: 'md',
        value: {
          'borderWidth': 2,
          ':hover': {
            bg: '$blue400',
          },
        },
      },
      {
        variant: 'redbox',
        size: 'md',
        value: {
          borderWidth: 2,
          borderColor: '$amber200',
          bg: '$amber400',
        },
      },
    ],

    defaultProps: {
      size: 'md',
      variant: 'redbox',
    },
  },
  {
    DEBUG: 'Button',
  }
);
const Box = styled(View, {});
const Text = styled(RNText, { color: '$textColor' });

export function Themes({ ...args }) {
  return (
    <Wrapper>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Theme>
          <Box>
            <Box>
              <Text>Header</Text>
            </Box>
          </Box>
        </Theme>
      </View>
    </Wrapper>
  );
}
export default Themes;
