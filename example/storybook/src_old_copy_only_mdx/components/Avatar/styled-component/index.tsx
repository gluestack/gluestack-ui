import { styled } from '@dank-style/react';
import { View } from 'react-native';

const Avatar = styled(
  View,
  {
    borderRadius: 9999,
    justifyContent: 'center',
    alignItems: 'center',
    h: 100,
    w: 100,
    position: 'relative',
    bg: '$primary600',

    variants: {
      size: {
        'xs': {
          w: '$6',
          h: '$6',
          _badge: {
            w: 8,
            h: 8,
            borderWidth: 1,
          },
          _text: {
            fontSize: 8,
          },
        },

        'sm': {
          w: '$8',
          h: '$8',

          _badge: {
            w: 9,
            h: 9,
            borderWidth: 1,
          },

          _text: {
            fontSize: 11,
          },
        },

        'md': {
          w: '$12',
          h: '$12',

          _badge: {
            w: 14,
            h: 14,
          },

          _text: {
            fontSize: 17,
          },
        },

        'lg': {
          w: '$16',
          h: '$16',

          _badge: {
            w: 16,
            h: 16,
          },

          _text: {
            fontSize: 22,
          },
        },

        'xl': {
          w: '$24',
          h: '$24',

          _badge: {
            w: 24,
            h: 24,
          },

          _text: {
            fontSize: 34,
          },
        },

        '2xl': {
          w: '$32',
          h: '$32',

          _badge: {
            w: '$8',
            h: '$8',
          },

          _text: {
            fontSize: 42,
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
export default Avatar;
