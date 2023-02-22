import { View } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  View,
  {
    'flexDirection': 'row',
    'justifyContent': 'center',
    'alignItems': 'center',
    'borderRadius': '$xs',
    // px: '$2',
    // py: '$1',

    'variants': {
      action: {
        error: {
          bg: '#FEF1F1',
          borderColor: '$error200',
          _icon: {
            color: '$error600',
          },
          _text: {
            color: '$error600',
          },
          _dark: {
            bg: '#2E2020',
            borderColor: '$error800',
            _text: {
              color: '$error400',
            },
            _icon: {
              color: '$error400',
            },
          },
        },
        warning: {
          bg: '#FFF4EB',
          borderColor: '$warning200',
          _icon: {
            color: '$warning600',
          },
          _text: {
            color: '$warning600',
          },
          _dark: {
            bg: '#2E231B',
            borderColor: '$warning800',
            _text: {
              color: '$warning400',
            },
            _icon: {
              color: '$warning400',
            },
          },
        },
        success: {
          bg: '#EDFCF2',
          borderColor: '$success200',
          _icon: {
            color: '$success600',
          },
          _text: {
            color: '$success600',
          },
          _dark: {
            bg: '#1C2B21',
            borderColor: '$success800',
            _text: {
              color: '$success400',
            },
            _icon: {
              color: '$success400',
            },
          },
        },
        info: {
          bg: '#EBF8FE',
          borderColor: '$info200',
          _icon: {
            color: '$info600',
          },
          _text: {
            color: '$info600',
          },
          _dark: {
            bg: '#1A282E',
            borderColor: '$info800',
            _text: {
              color: '$info400',
            },
            _icon: {
              color: '$info400',
            },
          },
        },
        muted: {
          bg: '#F6F6F7',
          borderColor: '$secondary200',
          _icon: {
            color: '$secondary600',
          },
          _text: {
            color: '$secondary600',
          },
          _dark: {
            bg: '#252526',
            borderColor: '$secondary800',
            _text: {
              color: '$secondary400',
            },
            _icon: {
              color: '$secondary400',
            },
          },
        },
      },

      variant: {
        solid: {},
        outline: {
          borderWidth: '$1',
        },
      },

      size: {
        sm: {
          px: '$1',
          py: '2px',
          _icon: {
            size: '$xs',
          },
          _text: {
            fontSize: '$2xs',
            lineHeight: '$2xs',
          },
        },
        md: {
          px: '$1',
          py: '2px',
          _icon: {
            size: '$xs',
          },
          _text: {
            fontSize: '$xs',
            lineHeight: '$xs',
          },
        },
        lg: {
          px: '6px',
          py: '$1',
          _icon: {
            size: '$xs',
          },
          _text: {
            fontSize: '$sm',
            lineHeight: '$sm',
          },
        },
      },
    },

    ':disabled': {
      opacity: 0.5,
    },

    '_web': {
      ':focusVisible': {
        outlineWidth: '2px',
        outlineColor: '$primary700',
        outlineStyle: 'solid',
        _dark: {
          outlineColor: '$primary300',
        },
      },
    },

    'defaultProps': {
      action: 'info',
      variant: 'solid',
      size: 'md',
    },
  },
  {
    descendantStyle: ['_text', '_icon'],
  }
);
