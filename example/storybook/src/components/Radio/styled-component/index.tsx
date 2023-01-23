import { Pressable } from 'react-native';
import { styled } from '@dank-style/react';

const Radio = styled(
  Pressable,
  {
    p: '$2',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    _icon: {
      color: '$primary600',
    },

    variants: {
      size: {
        lg: {
          _icon: {
            height: '$4',
            width: '$4',
          },

          _text: {
            fontSize: '$lg',
          },

          _indicator: {
            h: '$6',
            w: '$6',
          },
        },

        md: {
          _icon: {
            height: '$3',
            width: '$3',
          },

          _text: {
            fontSize: '$md',
          },

          _indicator: {
            h: '$5',
            w: '$5',
          },
        },

        sm: {
          _icon: {
            height: '$2',
            width: '$2',
          },

          _text: {
            fontSize: '$sm',
          },

          _indicator: {
            h: '$4',
            w: '$4',
          },
        },
      },
    },

    defaultProps: {
      size: 'md',
    },
  },
  {
    descendantStyle: ['_icon', '_text', '_indicator'],
  }
);

export { Radio as Root };
export { default as Group } from './Group';
export { default as Icon } from './Icon';
export { default as Indicator } from './Indicator';
export { default as Label } from './Label';
