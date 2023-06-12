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
          _icon: {
            height: '$4.5',
            width: '$4.5',
          },

          _text: {
            fontSize: '$lg',
            lineHeight: '$xl',
          },

          _indicator: {
            h: '$6',
            w: '$6',
          },
        },

        md: {
          _icon: {
            height: '$3.5',
            width: '$3.5',
          },

          _text: {
            fontSize: '$md',
            lineHeight: '$md',
          },

          _indicator: {
            h: '$5',
            w: '$5',
          },
        },

        sm: {
          _icon: {
            height: '$2.5',
            width: '$2.5',
          },

          _text: {
            fontSize: '$sm',
            lineHeight: '$sm',
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
