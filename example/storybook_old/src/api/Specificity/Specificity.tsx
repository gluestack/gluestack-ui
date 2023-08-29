import React from 'react';
import { View, Text } from 'react-native';
import { styled } from '@gluestack-style/react';
import { Wrapper } from '../../components/Wrapper';

const StyledButton = styled(
  View,
  {
    'borderRadius': 4,
    'flexDirection': 'row',
    'justifyContent': 'center',
    'alignItems': 'center',
    'm': 12,
    'backgroundColor': '$red400',
    'padding': '$3',

    // '@sm': {
    //   'bg': '$blue400',
    //   ':hover': {
    //     bg: '$purple500',
    //   },
    // },

    'variants': {
      variant: {
        redbox: {
          borderRadius: 12,
        },
      },
    },

    'defaultProps': {},

    ':hover': {
      bg: '$yellow500',
    },
    '_dark': {
      bg: '$blue500',
    },

    'bg': '$amber400',
  },
  {}
);

export function Specificity({ ...args }) {
  return (
    <Wrapper colorMode="dark">
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <StyledButton
          {...args}
          variant="redbox"
          states={{ hover: true }}
          bg="$red500"
          sx={{
            '_dark': {
              bg: '$blue500',
            },
            '@md': {
              _dark: {
                bg: '$green400',
              },
            },
          }}
          // sx={{ style: { bg: '$amber400' } }}
        >
          <Text>bluebox - sm</Text>
        </StyledButton>
        {/* <StyledButton>
          <Text>bluebox - md</Text>
        </StyledButton> */}
      </View>
    </Wrapper>
  );
}

export default Specificity;
