import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    alignItems: 'center',
    justifyContent: 'flex-start',
    w: '100%',
    p: '$3',
    flexDirection: 'row',
    borderRadius: '$sm',
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
          bg: '#F6F6F7',
          borderColor: '$secondary200',
          _icon: {
            color: '$secondary600',
          },
          _dark: {
            bg: '#252526',
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

    defaultProps: {
      variant: 'solid',
      action: 'muted',
    },
  },
  { descendantStyle: ['_icon', '_text'], DEBUG: 'STYLED_ALERT' }
);
