import { config } from '../ui.config';
import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        p: '$3',
        flexDirection: 'row',
        // @ts-ignore
        borderRadius: '$sm',
        w: 300,
      },
      platform: {
        web: {
          style: {
            outlineColor: '$amber500',
            //@ts-ignore
            outlineWidth: '10px',
          },
        },
      },
    },
    variants: {
      'subtle-info': {
        style: {
          bg: '$info200',
        },
        descendants: {
          _icon: {
            style: { color: '$info700' },
          },
        },
        colorMode: {
          dark: {
            descendants: {
              _icon: {
                style: { color: '$info600' },
              },
            },
          },
        },
      },
      'solid-info': {
        style: {
          bg: '$info700',
        },
        descendants: {
          _icon: {
            style: {
              color: '$muted50',
            },
          },
          _text: {
            style: {
              color: '$muted50',
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              bg: '$info600',
            },
          },
        },
      },
      'outline-info': {
        style: {
          // @ts-ignore
          borderWidth: '$1',
          borderColor: '$info700',
        },
        descendants: {
          _icon: {
            style: {
              color: '$info700',
            },
          },
          _text: {
            colorMode: {
              dark: {
                style: {
                  color: '$text50',
                },
              },
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              borderColor: '$info600',
            },
            descendants: {
              _icon: {
                style: { color: '$info600' },
              },
              _text: {
                style: { color: '$info600' },
              },
            },
          },
        },
      },
      'left-accent-info': {
        style: {
          // @ts-ignore
          borderLeftWidth: '$4',
          bg: '$info200',
          borderLeftColor: '$info700',
        },
        descendants: {
          _icon: {
            style: {
              color: '$info700',
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              borderLeftColor: '$info600',
            },
            descendants: {
              _icon: {
                style: { color: '$info600' },
              },
            },
          },
        },
      },
      'top-accent-info': {
        style: {
          // @ts-ignore
          borderTopWidth: '$4',
          bg: '$info200',
          borderTopColor: '$info700',
        },
        descendants: {
          _icon: {
            style: {
              color: '$info700',
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              borderTopColor: '$info600',
            },
            descendants: {
              _icon: {
                style: { color: '$info600' },
              },
            },
          },
        },
      },
      'outline-light-info': {
        style: {
          // @ts-ignore
          borderWidth: '$1',
          borderColor: '$info400',
        },
        descendants: {
          _icon: {
            style: {
              color: '$info700',
            },
          },
          _text: {
            colorMode: {
              dark: {
                style: {
                  color: '$text50',
                },
              },
            },
          },
        },
      },

      'subtle-success': {
        style: {
          bg: '$success200',
        },
        descendants: {
          _icon: {
            style: { color: '$success700' },
          },
        },
        colorMode: {
          dark: {
            descendants: {
              _icon: {
                style: { color: '$success600' },
              },
            },
          },
        },
      },
      'solid-success': {
        style: {
          bg: '$success700',
        },
        descendants: {
          _icon: {
            style: {
              color: '$muted50',
            },
          },
          _text: {
            style: {
              color: '$muted50',
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              bg: '$success600',
            },
          },
        },
      },
      'outline-success': {
        style: {
          // @ts-ignore
          borderWidth: '$1',
          borderColor: '$success700',
        },
        descendants: {
          _icon: {
            style: {
              color: '$success700',
            },
          },
          _text: {
            colorMode: {
              dark: {
                style: {
                  color: '$text50',
                },
              },
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              borderColor: '$success600',
            },
            descendants: {
              _icon: {
                style: { color: '$success600' },
              },
              _text: {
                style: { color: '$success600' },
              },
            },
          },
        },
      },
      'left-accent-success': {
        style: {
          // @ts-ignore
          borderLeftWidth: '$4',
          bg: '$success200',
          borderLeftColor: '$success700',
        },
        descendants: {
          _icon: {
            style: {
              color: '$success700',
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              borderLeftColor: '$success600',
            },
            descendants: {
              _icon: {
                style: { color: '$success600' },
              },
            },
          },
        },
      },
      'top-accent-success': {
        style: {
          // @ts-ignore
          borderTopWidth: '$4',
          bg: '$success200',
          borderTopColor: '$success700',
        },
        descendants: {
          _icon: {
            style: {
              color: '$success700',
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              borderTopColor: '$success600',
            },
            descendants: {
              _icon: {
                style: { color: '$success600' },
              },
            },
          },
        },
      },
      'outline-light-success': {
        style: {
          // @ts-ignore
          borderWidth: '$1',
          borderColor: '$success400',
        },
        descendants: {
          _icon: {
            style: {
              color: '$success700',
            },
          },
          _text: {
            colorMode: {
              dark: {
                style: {
                  color: '$text50',
                },
              },
            },
          },
        },
      },

      'subtle-warning': {
        style: {
          bg: '$warning200',
        },
        descendants: {
          _icon: {
            style: { color: '$warning700' },
          },
        },
        colorMode: {
          dark: {
            descendants: {
              _icon: {
                style: { color: '$warning600' },
              },
            },
          },
        },
      },
      'solid-warning': {
        style: {
          bg: '$warning700',
        },
        descendants: {
          _icon: {
            style: {
              color: '$muted50',
            },
          },
          _text: {
            style: {
              color: '$muted50',
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              bg: '$warning600',
            },
          },
        },
      },
      'outline-warning': {
        style: {
          // @ts-ignore
          borderWidth: '$1',
          borderColor: '$warning700',
        },
        descendants: {
          _icon: {
            style: {
              color: '$warning700',
            },
          },
          _text: {
            colorMode: {
              dark: {
                style: {
                  color: '$text50',
                },
              },
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              borderColor: '$warning600',
            },
            descendants: {
              _icon: {
                style: { color: '$warning600' },
              },
              _text: {
                style: { color: '$warning600' },
              },
            },
          },
        },
      },
      'left-accent-warning': {
        style: {
          // @ts-ignore
          borderLeftWidth: '$4',
          bg: '$warning200',
          borderLeftColor: '$warning700',
        },
        descendants: {
          _icon: {
            style: {
              color: '$warning700',
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              borderLeftColor: '$warning600',
            },
            descendants: {
              _icon: {
                style: { color: '$warning600' },
              },
            },
          },
        },
      },
      'top-accent-warning': {
        style: {
          // @ts-ignore
          borderTopWidth: '$4',
          bg: '$warning200',
          borderTopColor: '$warning700',
        },
        descendants: {
          _icon: {
            style: {
              color: '$warning700',
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              borderTopColor: '$warning600',
            },
            descendants: {
              _icon: {
                style: { color: '$warning600' },
              },
            },
          },
        },
      },
      'outline-light-warning': {
        style: {
          // @ts-ignore
          borderWidth: '$1',
          borderColor: '$warning400',
        },
        descendants: {
          _icon: {
            style: {
              color: '$warning700',
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              borderColor: '$warning300',
            },
            descendants: {
              _icon: {
                style: { color: '$warning600' },
              },
              _text: {
                style: { color: '$text50' },
              },
            },
          },
        },
      },

      'subtle-error': {
        style: {
          bg: '$error200',
        },
        descendants: {
          _icon: {
            style: { color: '$error700' },
          },
        },
        colorMode: {
          dark: {
            descendants: {
              _icon: {
                style: { color: '$error600' },
              },
            },
          },
        },
      },
      'solid-error': {
        style: {
          bg: '$error700',
        },
        descendants: {
          _icon: {
            style: {
              color: '$muted50',
            },
          },
          _text: {
            style: {
              color: '$muted50',
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              bg: '$error600',
            },
          },
        },
      },
      'outline-error': {
        style: {
          // @ts-ignore
          borderWidth: '$1',
          borderColor: '$error700',
        },
        descendants: {
          _icon: {
            style: {
              color: '$error700',
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              borderColor: '$error600',
            },
            descendants: {
              _icon: {
                style: { color: '$error600' },
              },
              _text: {
                style: { color: '$text50' },
              },
            },
          },
        },
      },
      'left-accent-error': {
        style: {
          // @ts-ignore
          borderLeftWidth: '$4',
          bg: '$error200',
          borderLeftColor: '$error700',
        },
        descendants: {
          _icon: {
            style: {
              color: '$error700',
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              borderLeftColor: '$error600',
            },
            descendants: {
              _icon: {
                style: { color: '$error600' },
              },
            },
          },
        },
      },
      'top-accent-error': {
        style: {
          // @ts-ignore
          borderTopWidth: '$4',
          bg: '$error200',
          borderTopColor: '$error700',
        },
        descendants: {
          _icon: {
            style: {
              color: '$error700',
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              borderTopColor: '$error600',
            },
            descendants: {
              _icon: {
                style: { color: '$error600' },
              },
            },
          },
        },
      },
      'outline-light-error': {
        style: {
          // @ts-ignore
          borderWidth: '$1',
          borderColor: '$error400',
        },
        descendants: {
          _icon: {
            style: {
              color: '$error700',
            },
          },
        },
        colorMode: {
          dark: {
            style: {
              borderColor: '$error300',
            },
            descendants: {
              _icon: {
                style: { color: '$error600' },
              },
              _text: {
                style: { color: '$text50' },
              },
            },
          },
        },
      },
    },
    defaultProps: {
      variant: 'outline-light-error',
    },
  },
  { descendantStyle: ['_icon', '_text'] },
  config
);
