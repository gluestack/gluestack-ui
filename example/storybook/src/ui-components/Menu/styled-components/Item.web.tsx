import { styled } from '../../styled';
import { LI } from '@expo/html-elements';
export const Item = styled(
  LI,
  {
    'p': '$3',
    'flexDirection': 'row',
    'alignItems': 'center',
    ':hover': {
      bg: '$backgroundLight50',
    },

    ':disabled': {
      opacity: 0.4,
    },

    ':active': {
      bg: '$backgroundLight100',
    },

    ':focus': {
      bg: '$backgroundLight100',
    },

    '_dark': {
      ':hover': {
        bg: '$backgroundDark800',
      },

      ':active': {
        bg: '$backgroundDark700',
      },

      ':focus': {
        bg: '$backgroundDark700',
      },
      ':disabled': {
        ':focus': {
          bg: '$backgroundDark900',
        },
      },
    },

    '_web': {
      'cursor': 'pointer',
      ':disabled': {
        cursor: 'not-allowed',
      },
    },
  },

  //   '_web': {
  //     ':focusVisible': {
  //       outlineWidth: '$0',
  //       bg: '$backgroundLight100',
  //       _dark: {
  //         bg: '$backgroundDark700',
  //       },
  //     },
  //     'cursor': 'pointer',
  //   },
  // },
  {
    descendantStyle: ['_text'],
  }
);
