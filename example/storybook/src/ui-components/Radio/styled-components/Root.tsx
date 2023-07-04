// @ts-nocheck
import { Pressable } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Pressable,
  {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

    variants: {
      size: {
        lg: {
          _text: {
            fontSize: '$lg',
            lineHeight: '$xl',
          },
          _indicator: {
            p: 2,
            h: '$6',
            w: '$6',
          },
        },

        md: {
          _text: {
            fontSize: '$md',
            lineHeight: '$md',
          },
          _indicator: {
            p: 1.5,
            h: '$5',
            w: '$5',
          },
        },

        sm: {
          _text: {
            fontSize: '$sm',
            lineHeight: '$sm',
          },

          _indicator: {
            p: 1,
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
