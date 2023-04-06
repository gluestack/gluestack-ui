import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    'w': '$full',
    'bg': 'transparent',
    'borderWidth': 1,
    'borderColor': '$backgroundLight300',
    'borderRadius': '$sm',
    'h': 100,
    ':focusVisible': {
      // @ts-ignore
      'boxShadow': 'offset 0 0 0 2px $primary500',
      ':invalid': {
        bg: 'transparent',
        borderWidth: '$2',
        borderColor: '$red600',
      },
      ':disabled': {
        borderColor: '$backgroundLight300',
        opacity: 0.4,
      },
    },
    ':hover': {
      'bg': '$transparent',
      'borderColor': '$primary700',
      ':invalid': {
        bg: 'transparent',
        borderWidth: '$2',
        borderColor: '$red600',
      },
      ':disabled': {
        borderColor: '$backgroundLight300',
        opacity: 0.4,
      },
    },
    ':focus': {
      'bg': 'transparent',
      'borderWidth': '$2',
      'borderColor': '$primary500',
      ':invalid': {
        bg: 'transparent',
        borderWidth: '$2',
        borderColor: '$red600',
      },
      ':disabled': {
        borderColor: '$backgroundLight300',
        opacity: 0.4,
      },
    },
    ':invalid': {
      bg: 'transparent',
      borderWidth: '$2',
      borderColor: '$red600',
    },

    ':disabled': {
      opacity: 0.4,
    },
    '_input': {
      color: '$textLight900',
      props: {
        placeholderTextColor: '$textLight400',
      },
    },

    'variants': {
      //@ts-ignore
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

      ':disabled': {
        borderColor: '$borderDark700',
        opacity: 0.4,
      },
      ':focusVisible': {
        // @ts-ignore
        boxShadow: 'offset 0 0 0 2px $primary400',
      },
      ':invalid': {
        borderColor: '$error400',
      },
      ':hover': {
        'borderColor': '$primary400',
        ':invalid': {
          borderColor: '$error400',
        },
        ':disabled': {
          borderColor: '$borderDark700',
          opacity: 0.4,
        },
      },
      ':focus': {
        'borderColor': '$primary400',
        ':invalid': {
          borderColor: '$error400',
        },
        ':disabled': {
          borderColor: '$borderDark700',
          opacity: 0.4,
        },
      },

      '_input': {
        props: {
          placeholderTextColor: '$textLight400',
        },
        color: '$textDark50',
      },
    },
    'defaultProps': {
      variant: 'default',
      size: 'md',
    },
  },
  { descendantStyle: ['_input'] },
  {}
);
