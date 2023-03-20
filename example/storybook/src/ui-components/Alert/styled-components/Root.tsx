import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    alignItems: 'center',
    justifyContent: 'flex-start',
    p: '$3',
    flexDirection: 'row',
    borderRadius: '$sm',
    maxWidth: 500,

    variants: {
      action: {
        error: {
          bg: '#FEF1F1',
          borderColor: '$error200',
          _icon: {
            color: '$error600',
          },
          // _text: {
          //   color: '$textLight800',
          // },
          _dark: {
            bg: '#2E2020',
            borderColor: '$error800',
            // _text: {
            //   color: '$textDark100',
            // },
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
          // _text: {
          //   color: '$textLight800',
          // },
          _dark: {
            bg: '#2E231B',
            borderColor: '$warning800',
            // _text: {
            //   color: '$textDark100',
            // },
          },
        },
        success: {
          bg: '#EDFCF2',
          borderColor: '$success200',
          _icon: {
            color: '$success600',
          },
          // _text: {
          //   color: '$textLight800',
          // },
          _dark: {
            bg: '#1C2B21',
            borderColor: '$success800',
            // _text: {
            //   color: '$textDark100',
            // },
          },
        },
        info: {
          bg: '#EBF8FE',
          borderColor: '$info200',
          _icon: {
            color: '$info600',
          },
          // _text: {
          //   color: '$textLight800',
          // },
          _dark: {
            bg: '#1A282E',
            borderColor: '$info800',
            // _text: {
            //   color: '$textDark100',
            // },
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
          // _text: {
          //   color: '$textLight800',
          // },
          _dark: {
            bg: '#252526',
            borderColor: '$secondary800',
            // _text: {
            //   color: '$textDark100',
            // },
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

    _web: {
      ':focusVisible': {
        outlineWidth: '2px',
        outlineColor: '$primary700',
        _dark: {
          outlineColor: '$primary300',
        },
      },
    },
  },
  { descendantStyle: ['_icon', '_text'], DEBUG: 'STYLED_ALERT' }
);
