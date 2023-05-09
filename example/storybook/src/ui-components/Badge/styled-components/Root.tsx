import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    'flexDirection': 'row',
    'alignItems': 'center',
    'borderRadius': '$xs',
    'variants': {
      action: {
        error: {
          bg: '$backgroundLightError',
          borderColor: '$error200',
          _icon: {
            color: '$error600',
          },
          _text: {
            color: '$error600',
          },
          _dark: {
            bg: '$backgroundDarkError',
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
          bg: '$backgroundLightWarning',
          borderColor: '$warning200',
          _icon: {
            color: '$warning600',
          },
          _text: {
            color: '$warning600',
          },
          _dark: {
            bg: '$backgroundDarkWarning',
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
          bg: '$backgroundLightSuccess',
          borderColor: '$success200',
          _icon: {
            color: '$success600',
          },
          _text: {
            color: '$success600',
          },
          _dark: {
            bg: '$backgroundDarkSuccess',
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
          bg: '$backgroundLightInfo',
          borderColor: '$info200',
          _icon: {
            color: '$info600',
          },
          _text: {
            color: '$info600',
          },
          _dark: {
            bg: '$backgroundDarkInfo',
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
          bg: '$backgroundLightMuted',
          borderColor: '$secondary200',
          _icon: {
            color: '$secondary600',
          },
          _text: {
            color: '$secondary600',
          },
          _dark: {
            bg: '$backgroundDarkMuted',
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
          py: 2,
          _icon: {
            size: 'xs',
          },
          _text: {
            fontSize: '$2xs',
            lineHeight: '$2xs',
          },
        },
        md: {
          px: '$1',
          py: 2,
          _icon: {
            size: 'xs',
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
            size: 'xs',
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
        outlineWidth: 2,
        outlineColor: '$primary700',
        outlineStyle: 'solid',
        _dark: {
          outlineColor: '$primary300',
        },
      },
      'justifySelf': 'center',
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
