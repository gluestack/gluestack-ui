// @ts-nocheck
import { Pressable } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Pressable,
  {
    'flexDirection': 'row',
    'justifyContent': 'flex-start',
    'alignItems': 'center',
    'gap': 8,

    'borderWidth': 2,
    'borderRadius': 'full',
    'p': 1,

    '_indicator': {
      bg: '$muted.50',
      borderColor: '$muted.400',
    },
    ':checked': {
      '_indicator': {
        borderColor: `$primary.600`,
      },
      '_icon': {
        color: `$primary.600`,
      },
      ':hover': {
        '_indicator': {
          borderColor: `$primary.700`,
        },
        '_icon': { color: `$primary.700` },
        ':disabled': {
          _indicator: {
            borderColor: `$primary.600`,
          },
          _icon: {
            color: `$primary.600`,
          },
        },
      },
      ':active': {
        _indicator: {
          borderColor: `$primary.800`,
        },
        _icon: { color: `$primary.800` },
      },
    },

    ':hover': {
      '_indicator': {
        borderColor: '$muted.500',
      },
      ':disabled': {
        _indicator: {
          borderColor: '$muted.400',
        },
      },
      ':checked': {
        _indicator: { borderColor: `$primary.600` },
      },
    },

    ':active': {
      _indicator: {
        borderColor: '$muted.600',
      },
    },

    ':invalid': {
      _indicator: {
        borderColor: '$error.600',
      },
    },

    '_dark': {
      'bg': '$muted.900',
      'borderColor': '$muted.500',

      ':checked': {
        'borderColor': `$primary.500`,
        '_icon': {
          color: `$primary.500`,
        },
        ':hover': {
          'borderColor': `$primary.400`,
          '_icon': { color: `$primary.400` },
          ':disabled': {
            borderColor: `$primary.500`,
            _icon: {
              color: `$primary.500`,
            },
          },
        },
        ':active': {
          borderColor: `$primary.300`,
          _icon: { color: `$primary.300` },
        },
      },

      ':hover': {
        borderColor: '$muted.400',
        _disabled: {
          borderColor: '$muted.500',
        },
        _checked: { borderColor: `$primary.600` },
      },

      ':active': {
        borderColor: '$muted.300',
      },

      ':invalid': {
        borderColor: '$error.500',
      },
    },

    ':disabled': {
      _web: {
        cursor: 'not-allowed',
      },
      opacity: 0.6,
      _icon: {
        bg: 'transparent',
      },
    },

    'variants': {
      size: {
        lg: {
          _text: {
            fontSize: '$lg',
            lineHeight: '$xl',
          },
          _indicator: {
            h: '$7',
            w: '$7',
          },
        },

        md: {
          _text: {
            fontSize: '$md',
            lineHeight: '$md',
          },
          _indicator: {
            h: '$6',
            w: '$6',
          },
        },

        sm: {
          _text: {
            fontSize: '$sm',
            lineHeight: '$sm',
          },

          _indicator: {
            h: '$5',
            w: '$5',
          },
        },
      },
    },

    'defaultProps': {
      size: 'md',
    },
  },
  {
    descendantStyle: ['_icon', '_text', '_indicator'],
    ancestorStyle: ['_radio'],
  }
);
