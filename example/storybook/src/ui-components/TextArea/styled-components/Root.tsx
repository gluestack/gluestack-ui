import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    'bg': 'transparent',
    'minWidth': '50%',
    'maxWidth': 500,
    'borderWidth': 1,
    'borderColor': '$backgroundLight300',
    'borderRadius': '$sm',
    'h': 100,
    'w': 300,
    ':hover': {
      bg: '$transparent',
      borderColor: '$primary700',
    },
    ':focus': {
      bg: 'transparent',
      borderWidth: '$2',
      borderColor: '$primary500',
    },

    ':invalid': {
      ':focus': {
        bg: 'transparent',
        borderWidth: '$2',
        borderColor: '$primary700',
      },
      'bg': 'transparent',
      'borderWidth': '$2',
      'borderColor': '$red600',
    },

    // ':focusVisible': {
    //   boxShadow: 'offset 0 0 0 2px $primary700',
    // },
    ':disabled': {
      opacity: 0.4,
    },
    '_input': {
      placeholderTextColor: '$textLight900',
      color: '$textLight900',
    },
    'variants': {
      size: {
        xl: {
          _input: {
            px: '$5',
            py: '$2.5',
            fontSize: '$xl',
            lineHeight: '$xl',
          },
        },

        lg: {
          _input: {
            px: '$4',
            py: '$2.5',
            fontSize: '$lg',
            lineHeight: '$xl',
          },
        },

        md: {
          _input: {
            px: '$3',
            py: '$2',
            fontSize: '$md',
            lineHeight: '$lg',
          },
        },

        sm: {
          _input: {
            px: '$3',
            py: '$1.5',
            fontSize: '$sm',
            lineHeight: '$md',
          },
        },
      },
      variant: {
        default: {
          bg: 'transparent',
          _input: {
            outlineWidth: '0',
            outline: 'none',
            cursor: 'auto',
          },
        },
      },
    },
    '_dark': {
      'borderColor': '$borderDark700',
      'placeholderTextColor': '$textDark600',
      ':hover': {
        borderColor: '$primary400',
      },
      ':focus': {
        borderColor: '$primary400',
      },

      ':focusVisible': {
        boxShadow: 'offset 0 0 0 2px $primary400',
      },
      ':invalid': {
        borderColor: '$error400',
      },
      '_input': {
        color: '$textDark50',
      },
    },
    'defaultProps': {
      variant: 'default',
      size: 'md',
    },
    'placeholderTextColor': '$textLight400',
  },
  { descendantStyle: ['_input'] }
);
