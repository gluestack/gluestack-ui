import { View } from 'react-native';
import { styled } from '@dank-style/react';

const Radio = styled(
  View,
  {
    baseStyle: {
      style: {
        p: '$1',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      },
      platform: {
        web: {
          state: {
            disabled: {
              style: {
                //@ts-ignore
                cursor: 'not-allowed',
              },
            },
          },
        },
      },
    },
    sizes: {
      lg: {
        descendants: {
          _icon: { style: { height: '$4', width: '$4' } },
          //@ts-ignore
          _text: { style: { fontSize: '$lg' } },
          _indicator: {
            style: {
              h: '$6',
              w: '$6',
            },
          },
        },
      },
      md: {
        descendants: {
          _icon: { style: { height: '$3', width: '$3' } },
          //@ts-ignore
          _text: { style: { fontSize: '$md' } },
          _indicator: {
            style: {
              h: '$5',
              w: '$5',
            },
          },
        },
      },
      sm: {
        descendants: {
          _icon: { style: { height: '$2', width: '$2' } },
          //@ts-ignore
          _text: { style: { fontSize: '$sm' } },
          _indicator: {
            style: {
              h: '$4',
              w: '$4',
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
    descendantStyle: ['_icon', '_text', '_indicator'],
  }
);

export { Radio as Root };
export { default as Group } from './Group';
export { default as Icon } from './Icon';
export { default as Indicator } from './Indicator';
export { default as Label } from './Label';
