import React from 'react';
import { View, Text } from 'react-native';
import { styled } from '@gluestack-style/react';

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

export function BaseStyleVariantSizes({ ...args }) {
  return (
    <Wrapper>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <StyledButton {...args} states={{ hover: true }}>
          <Text>bluebox - sm</Text>
        </StyledButton>

        <StyledButton
          mb="$1.5"
          mt={'-$2.5'}
          sx={{ boxShadow: '1px 1px $space$3 $colors$primary400' }}
        >
          <Text>bluebox - md</Text>
        </StyledButton>
      </View>
    </Wrapper>
  );
}
export default BaseStyleVariantSizes;
