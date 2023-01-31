import { styled } from '@dank-style/react';
import { View } from 'react-native';

const Checkbox = styled(
  View,
  {
    'p': 8,
    // bg: '$blue900',
    'flexDirection': 'row',
    'justifyContent': 'center',
    'alignItems': 'center',
    ':disabled': {
      opacity: 0.6,
    },
    '_web': {
      //@ts-ignore
      cursor: 'pointer',
    },

    'variants': {
      size: {
        lg: {
          descendants: {
            _icon: {
              height: '$5',
              width: '$5',
            },
            //@ts-ignore
            _text: { fontSize: '$xl' },
            _indicator: {
              h: '$6',
              w: '$6',
            },
          },
        },
        md: {
          _icon: {
            style: {
              height: '$4',
              width: '$4',
            },
          },
          //@ts-ignore
          _text: { fontSize: '$lg' },
          _indicator: {
            h: '$5',
            w: '$5',
          },
        },
        sm: {
          _icon: {
            height: '$3',
            width: '$3',
          },
          //@ts-ignore
          _text: { fontSize: '$md' },
          _indicator: {
            h: '$4',
            w: '$4',
          },
        },
      },
    },
    'defaultProps': {
      size: 'md',
    },
  },
  {
    descendantStyle: ['_icon', '_text', '_indicator'],
    DEBUG: 'CHECKBOX',
  }
);

export { default as Group } from './Group';
export { default as Icon } from './Icon';
export { default as Indicator } from './Indicator';
export { default as Label } from './Label';
export { default as IconStyled } from './IconStyled';
export { Checkbox as Root };

export default Checkbox;
