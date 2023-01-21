import React from 'react';
import { View, Text } from 'react-native';
import { styled, verboseStyled } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';

const StyledButton = styled(
  View,
  {
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    m: 12,
    _web: {
      //@ts-ignore
      outlineWidth: 0,
    },
    variants: {
      variant: {
        redbox: {
          bg: '$red400',
          px: '$4',
          py: '$3',
          // ':hover': {
          //   bg: '$blue400',
          // },
        },
        blue: {
          'bg': '$red400',
          'px': '$4',
          'py': '$3',
          ':hover': {
            bg: '$amber100',
          },
        },
      },
      size: {
        sm: {
          bg: '$red100',
          px: '$4',
          py: '$3',
        },
        md: {
          px: '$5',
          py: '$4',
        },
      },
      color: {
        sm: {
          px: '$4',
          py: '$3',
        },
        md: {
          px: '$5',
          py: '$4',
        },
      },
    },

    compoundVariants: [
      {
        variant: 'redbox',
        size: 'sm',
        value: {
          bg: '$red400',
          px: '$4',
          py: '$3',
        },
      },
    ],
    defaultProps: {
      // variant:
      variant: 'blue',
      color: '',
    },
  },
  {}
);

const a = {
  variant: {
    redbox: {
      'bg': '$red400',
      'px': '$4',
      'py': '$3',
      ':hover': {
        bg: '$blue400',
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
  },
} as const;

// type mytyp1 =  typeof a;

// type mytyp = keyof typeof a;

// type newtype = {
//   [Key in mytyp]: keyof mytyp1[Key];
// }

// const a: newtype = {
//   size: ;
// }
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
        <StyledButton size="sm" variant="redbox" {...args}>
          <Text>bluebox - sm</Text>
        </StyledButton>
        <StyledButton>
          <Text>bluebox - md</Text>
        </StyledButton>
      </View>
    </Wrapper>
  );
}
