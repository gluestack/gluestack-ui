import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    alignItems: 'center',
    justifyContent: 'flex-start',
    p: '$3',
    flexDirection: 'row',
    borderRadius: '$sm',
    w: 300,

    variants: {
      variant: {
        'subtle-info': {
          bg: '$info200',

          _icon: {
            color: '$info700',
          },

          _dark: {
            _icon: {
              color: '$info600',
            },
          },
        },

        'solid-info': {
          bg: '$info700',

          _icon: {
            color: '$muted50',
          },

          _text: {
            color: '$muted50',
          },

          _dark: {
            bg: '$info600',
          },
        },

        'outline-info': {
          borderWidth: '$1',
          borderColor: '$info700',

          _icon: {
            color: '$info700',
          },

          _text: {
            _dark: {
              color: '$text50',
            },
          },

          _dark: {
            borderColor: '$info600',

            _icon: {
              color: '$info600',
            },

            _text: {
              color: '$info600',
            },
          },
        },

        'left-accent-info': {
          borderLeftWidth: '$4',
          bg: '$info200',
          borderLeftColor: '$info700',

          _icon: {
            color: '$info700',
          },

          _dark: {
            borderLeftColor: '$info600',

            _icon: {
              color: '$info600',
            },
          },
        },

        'top-accent-info': {
          borderTopWidth: '$4',
          bg: '$info200',
          borderTopColor: '$info700',

          _icon: {
            color: '$info700',
          },

          _dark: {
            borderTopColor: '$info600',

            _icon: {
              color: '$info600',
            },
          },
        },

        'outline-light-info': {
          borderWidth: '$1',
          borderColor: '$info400',

          _icon: {
            color: '$info700',
          },

          _text: {
            _dark: {
              color: '$text50',
            },
          },
        },

        'subtle-success': {
          bg: '$success200',

          _icon: {
            color: '$success700',
          },

          _dark: {
            _icon: {
              color: '$success600',
            },
          },
        },

        'solid-success': {
          bg: '$success700',

          _icon: {
            color: '$muted50',
          },

          _text: {
            color: '$muted50',
          },

          _dark: {
            bg: '$success600',
          },
        },

        'outline-success': {
          borderWidth: '$1',
          borderColor: '$success700',

          _icon: {
            color: '$success700',
          },

          _text: {
            _dark: {
              color: '$text50',
            },
          },

          _dark: {
            borderColor: '$success600',

            _icon: {
              color: '$success600',
            },

            _text: {
              color: '$success600',
            },
          },
        },

        'left-accent-success': {
          borderLeftWidth: '$4',
          bg: '$success200',
          borderLeftColor: '$success700',

          _icon: {
            color: '$success700',
          },

          _dark: {
            borderLeftColor: '$success600',

            _icon: {
              color: '$success600',
            },
          },
        },

        'top-accent-success': {
          borderTopWidth: '$4',
          bg: '$success200',
          borderTopColor: '$success700',

          _icon: {
            color: '$success700',
          },

          _dark: {
            borderTopColor: '$success600',

            _icon: {
              color: '$success600',
            },
          },
        },

        'outline-light-success': {
          borderWidth: '$1',
          borderColor: '$success400',

          _icon: {
            color: '$success700',
          },

          _text: {
            _dark: {
              color: '$text50',
            },
          },
        },

        'subtle-warning': {
          bg: '$warning200',

          _icon: {
            color: '$warning700',
          },

          _dark: {
            _icon: {
              color: '$warning600',
            },
          },
        },

        'solid-warning': {
          bg: '$warning700',

          _icon: {
            color: '$muted50',
          },

          _text: {
            color: '$muted50',
          },

          _dark: {
            bg: '$warning600',
          },
        },

        'outline-warning': {
          borderWidth: '$1',
          borderColor: '$warning700',

          _icon: {
            color: '$warning700',
          },

          _text: {
            _dark: {
              color: '$text50',
            },
          },

          _dark: {
            borderColor: '$warning600',

            _icon: {
              color: '$warning600',
            },

            _text: {
              color: '$warning600',
            },
          },
        },

        'left-accent-warning': {
          borderLeftWidth: '$4',
          bg: '$warning200',
          borderLeftColor: '$warning700',

          _icon: {
            color: '$warning700',
          },

          _dark: {
            borderLeftColor: '$warning600',

            _icon: {
              color: '$warning600',
            },
          },
        },

        'top-accent-warning': {
          borderTopWidth: '$4',
          bg: '$warning200',
          borderTopColor: '$warning700',

          _icon: {
            color: '$warning700',
          },

          _dark: {
            borderTopColor: '$warning600',

            _icon: {
              color: '$warning600',
            },
          },
        },

        'outline-light-warning': {
          borderWidth: '$1',
          borderColor: '$warning400',

          _icon: {
            color: '$warning700',
          },

          _dark: {
            borderColor: '$warning300',

            _icon: {
              color: '$warning600',
            },

            _text: {
              color: '$text50',
            },
          },
        },

        'subtle-error': {
          bg: '$error200',

          _icon: {
            color: '$error700',
          },

          _dark: {
            _icon: {
              color: '$error600',
            },
          },
        },

        'solid-error': {
          bg: '$error700',

          _icon: {
            color: '$muted50',
          },

          _text: {
            color: '$muted50',
          },

          _dark: {
            bg: '$error600',
          },
        },

        'outline-error': {
          borderWidth: '$1',
          borderColor: '$error700',

          _icon: {
            color: '$error700',
          },

          _dark: {
            borderColor: '$error600',

            _icon: {
              color: '$error600',
            },

            _text: {
              color: '$text50',
            },
          },
        },

        'left-accent-error': {
          borderLeftWidth: '$4',
          bg: '$error200',
          borderLeftColor: '$error700',

          _icon: {
            color: '$error700',
          },

          _dark: {
            borderLeftColor: '$error600',

            _icon: {
              color: '$error600',
            },
          },
        },

        'top-accent-error': {
          borderTopWidth: '$4',
          bg: '$error200',
          borderTopColor: '$error700',

          _icon: {
            color: '$error700',
          },

          _dark: {
            borderTopColor: '$error600',

            _icon: {
              color: '$error600',
            },
          },
        },

        'outline-light-error': {
          borderWidth: '$1',
          borderColor: '$error400',

          _icon: {
            color: '$error700',
          },

          _dark: {
            borderColor: '$error300',

            _icon: {
              color: '$error600',
            },

            _text: {
              color: '$text50',
            },
          },
        },
      },
    },

    defaultProps: {
      variant: 'outline-light-error',
    },

    _web: {
      outlineColor: '$amber500',
      outlineWidth: '10px',
    },
  },
  { descendantStyle: ['_icon', '_text'] }
);
