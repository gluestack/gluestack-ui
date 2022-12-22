import { config } from '../ui.config';
import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        borderRadius: 9999,
        justifyContent: 'center',
        alignItems: 'center',
        h: 100,
        w: 100,
        position: 'relative',
        bg: '$primary600',
      },
    },

    sizes: {
      'xs': {
        style: {
          w: '$6',
          h: '$6',
        },
        descendants: {
          _badge: {
            style: {
              w: 8,
              h: 8,
              borderWidth: 1,
            },
          },
          _text: {
            style: {
              fontSize: 8,
            },
          },
        },
      },
      'sm': {
        style: {
          w: '$8',
          h: '$8',
        },
        descendants: {
          _badge: {
            style: {
              w: 9,
              h: 9,
              borderWidth: 1,
            },
          },
          _text: {
            style: {
              fontSize: 11,
            },
          },
        },
      },
      'md': {
        style: {
          w: '$12',
          h: '$12',
        },
        descendants: {
          _badge: {
            style: {
              w: 14,
              h: 14,
            },
          },
          _text: {
            style: {
              fontSize: 17,
            },
          },
        },
      },
      'lg': {
        style: {
          w: '$16',
          h: '$16',
        },
        descendants: {
          _badge: {
            style: {
              w: 16,
              h: 16,
            },
          },
          _text: {
            style: {
              fontSize: 22,
            },
          },
        },
      },
      'xl': {
        style: {
          w: '$24',
          h: '$24',
        },
        descendants: {
          _badge: {
            style: {
              w: 24,
              h: 24,
            },
          },
          _text: {
            style: {
              fontSize: 34,
            },
          },
        },
      },
      '2xl': {
        style: {
          w: '$32',
          h: '$32',
        },
        descendants: {
          _badge: {
            style: {
              w: '$8',
              h: '$8',
            },
          },
          _text: {
            style: {
              fontSize: 42,
            },
          },
        },
      },
    },
    defaultProps: {
      size: 'md',
    },
  },
  {
    descendantStyle: ['_badge', '_text'],
    DEBUG: 'AVATAR',
  },
  config
);
