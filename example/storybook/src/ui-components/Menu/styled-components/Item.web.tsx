import { styled } from '../../styled';
import { LI } from '@expo/html-elements';
export const Item = styled(
  LI,
  {
    'px': '$3',
    'py': '$2',
    ':hover': {
      bg: '$backgroundLight100',
    },

    ':active': {
      bg: '$backgroundLight200',
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
    },

    '_web': {
      ':focusVisible': {
        bg: '$backgroundLight100',
        _dark: {
          bg: '$backgroundDark700',
        },
      },
      'cursor': 'pointer',
    },
  },
  {
    descendantStyle: ['_text'],
  }
);
