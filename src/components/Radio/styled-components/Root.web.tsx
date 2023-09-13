import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    'flexDirection': 'row',
    'justifyContent': 'flex-start',
    'alignItems': 'center',
    //TODO: fix gap typing
    //@ts-ignore
    'gap': '0.5rem',

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

    // dark mode
    '_dark': {
      '_indicator': {
        bg: '$muted.900',
        borderColor: '$muted.500',
      },

      ':checked': {
        '_indicator': {
          borderColor: `$primary.500`,
        },
        '_icon': {
          color: `$primary.500`,
        },
        ':hover': {
          '_indicator': {
            borderColor: `$primary.400`,
          },
          '_icon': { color: `$primary.400` },
          ':disabled': {
            _indicator: {
              borderColor: `$primary.500`,
            },
            _icon: {
              color: `$primary.500`,
            },
          },
        },
        ':active': {
          _indicator: {
            borderColor: `$primary.300`,
          },
          _icon: { color: `$primary.300` },
        },
      },

      ':hover': {
        '_indicator': {
          borderColor: '$muted.400',
        },
        ':disabled': {
          _indicator: {
            borderColor: '$muted.500',
          },
        },
        ':checked': {
          _indicator: { borderColor: `$primary.600` },
        },
      },

      ':active': {
        _indicator: {
          borderColor: '$muted.300',
        },
      },

      ':invalid': {
        _indicator: {
          borderColor: '$error.500',
        },
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

    '_web': {
      'cursor': 'pointer',
      ':focusVisible': {
        _indicator: {
          outlineWidth: '2px',
          outlineColor: '$primary.400',
          outlineStyle: 'solid',
        },
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
