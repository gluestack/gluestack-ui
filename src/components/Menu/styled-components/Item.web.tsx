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
      backgroundColor: '$backgroundLight100',
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
      backgroundColor: '$backgroundLight200',
    },

    ':focus': {
      backgroundColor: '$backgroundLight100',
      // @ts-ignore
      outlineWidth: '$0',
      outlineStyle: 'none',
    },

    '_dark': {
      ':hover': {
        backgroundColor: '$backgroundDark800',
      },

      ':active': {
        backgroundColor: '$backgroundDark700',
      },

      ':focus': {
        backgroundColor: '$backgroundDark800',
      },
    },
    ':focusVisible': {
      // @ts-ignore
      outlineWidth: '$0.5',
      outlineColor: '$primary700',
      outlineStyle: 'solid',
      _dark: {
        outlineColor: '$primary300',
      },
    },
    'cursor': 'pointer',
  },
  {
    descendantStyle: ['_text'],
  }
);
