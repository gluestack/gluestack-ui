import { config } from '../ui.config';
import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        bg: '$red600',
        borderRadius: 9999,
        justifyContent: 'center',
        alignItems: 'center',
        h: 100,
        w: 100,
        position: 'relative',
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
              w: '$2',
              h: '$2',
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
              w: '$3',
              h: '$3',
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
              w: '$4',
              h: '$4',
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
              w: '$5',
              h: '$5',
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
              w: '$6',
              h: '$6',
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
              w: '$7',
              h: '$7',
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
    descendentStyle: ['_badge'],
    DEBUG: 'AVATAR',
  },
  config
);
