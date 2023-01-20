import { styled } from '@dank-style/react';
import { config } from '../../../../gluestack.config';
import { View } from 'react-native';

const Avatar = styled(
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
        bg: `${config?.tokens?.colors.primary600}`,
      },
    },

    sizes: {
      'xs': {
        style: {
          w: `${config?.tokens?.space[6]}`,
          h: `${config?.tokens?.space[6]}`,
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
          w: `${config?.tokens?.space[8]}`,
          h: `${config?.tokens?.space[8]}`,
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
          w: `${config?.tokens?.space[12]}`,
          h: `${config?.tokens?.space[12]}`,
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
          w: `${config?.tokens?.space[16]}`,
          h: `${config?.tokens?.space[16]}`,
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
          w: `${config?.tokens?.space[24]}`,
          h: `${config?.tokens?.space[24]}`,
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
          w: `${config?.tokens?.space[32]}`,
          h: `${config?.tokens?.space[32]}`,
        },
        descendants: {
          _badge: {
            style: {
              w: `${config?.tokens?.space[8]}`,
              h: `${config?.tokens?.space[8]}`,
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
  }
);

export { default as Badge } from './Badge';
export { default as FallbackText } from './FallbackText';
export { default as Group } from './Group';
export { default as Image } from './Image';
export { Avatar as Root };
