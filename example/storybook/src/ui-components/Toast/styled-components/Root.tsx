//@ts-nocheck
import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    p: '$2',
    borderRadius: '$sm',
    flexDirection: 'row',
    shadowColor: '$backgroundLight800',
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
    variants: {
      action: {
        error: {
          bg: '$backgroundLightError',
          borderColor: '$error200',
          _icon: {
            color: '$error600',
          },
          _dark: {
            bg: '$backgroundDarkError',
            borderColor: '$error800',
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
          _dark: {
            bg: '$backgroundDarkWarning',
            borderColor: '$warning800',
          },
        },
        success: {
          bg: '$backgroundLightSuccess',
          borderColor: '$success200',
          _icon: {
            color: '$success600',
          },
          _dark: {
            bg: '$backgroundDarkSuccess',
            borderColor: '$success800',
          },
        },
        info: {
          bg: '$backgroundLightInfo',
          borderColor: '$info200',
          _icon: {
            color: '$info600',
          },
          _dark: {
            bg: '$backgroundDarkInfo',
            borderColor: '$info800',
            _icon: {
              color: '$info400',
            },
          },
        },
        muted: {
          bg: '$backgroundLight200',
          borderColor: '$secondary200',
          _icon: {
            color: '$secondary600',
          },
          _dark: {
            bg: '$backgroundDark800',
            borderColor: '$secondary800',
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

    _web: {
      props: {
        pointerEvents: 'auto',
      },
      shadowOffset: {
        width: 0,
        height: 2,
      },
    },
    m: '$3',

    defaultProps: {
      variant: 'solid',
      action: 'muted',
    },
  },
  { descendantStyle: ['_icon', '_text'] }
);
