import { styled } from '@gluestack-style/react';
import { LI } from '@expo/html-elements';
export const Item = styled(
  LI,
  {
    // @ts-ignore
    'p': '$3',
    'flexDirection': 'row',
    'alignItems': 'center',
    ':hover': {
      backgroundColor: '$backgroundLight.100',
    },

    ':disabled': {
      'opacity': 0.4,
      // @ts-ignore
      'cursor': 'not-allowed',
      ':focus': {
        backgroundColor: 'transparent',
      },
      '_dark': {
        ':focus': {
          backgroundColor: 'transparent',
        },
      },
    },

    ':active': {
      backgroundColor: '$backgroundLight.200',
    },

    ':focus': {
      backgroundColor: '$backgroundLight.100',
      // @ts-ignore
      outlineWidth: '$0',
      outlineStyle: 'none',
    },

    '_dark': {
      ':hover': {
        backgroundColor: '$backgroundDark.800',
      },

      ':active': {
        backgroundColor: '$backgroundDark.700',
      },

      ':focus': {
        backgroundColor: '$backgroundDark.800',
      },
    },
    ':focusVisible': {
      // @ts-ignore
      outlineWidth: '$0.5',
      outlineColor: '$primary.700',
      outlineStyle: 'solid',
      _dark: {
        outlineColor: '$primary.300',
      },
    },
    'cursor': 'pointer',
  },
  {
    descendantStyle: ['_text'],
  }
);
