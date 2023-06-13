import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    alignItems: 'center',
    w: '100%',
    p: '$3',
    flexDirection: 'row',
    borderRadius: '$sm',
    variants: {
      action: {
        error: {
          bg: '$backgroundLightError',
          borderColor: '$error300',
          _icon: {
            color: '$error600',
          },
          _dark: {
            bg: '$backgroundDarkError',
            borderColor: '$error700',
            _icon: {
              color: '$error400',
            },
          },
        },
        warning: {
          bg: '$backgroundLightWarning',
          borderColor: '$warning300',
          _icon: {
            color: '$warning600',
          },
          _dark: {
            bg: '$backgroundDarkWarning',
            borderColor: '$warning700',
            _icon: {
              color: '$warning400',
            },
          },
        },
        success: {
          bg: '$backgroundLightSuccess',
          borderColor: '$success300',
          _icon: {
            color: '$success600',
          },
          _dark: {
            bg: '$backgroundDarkSuccess',
            borderColor: '$success700',
            _icon: {
              color: '$success400',
            },
          },
        },
        info: {
          bg: '$backgroundLightInfo',
          borderColor: '$info300',
          _icon: {
            color: '$info600',
          },
          _dark: {
            bg: '$backgroundDarkInfo',
            borderColor: '$info700',
            _icon: {
              color: '$info400',
            },
          },
        },
        muted: {
          bg: '$backgroundLightMuted',
          borderColor: '$secondary300',
          _icon: {
            color: '$secondary600',
          },
          _dark: {
            bg: '$backgroundDarkMuted',
            borderColor: '$secondary700',
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
        accent: {
          borderLeftWidth: '$4',
        },
      },
    },

    defaultProps: {
      variant: 'solid',
      action: 'muted',
    },
  },
  { descendantStyle: ['_icon', '_text'], DEBUG: 'STYLED_ALERT' }
);
