import { config } from '../ui.config';
import { Pressable } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  Pressable,
  {
    baseStyle: {
      style: {
        p: 8,
        // bg: '$blue900',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // @ts-ignore
      },
      state: {
        disabled: {
          style: { opacity: 0.6 },
        },
      },
    },
    sizes: {
      lg: {
        descendants: {
          _icon: { style: { height: '$5', width: '$5' } },
          //@ts-ignore
          _text: { style: { fontSize: '$xl' } },
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
          _icon: { style: { height: '$4', width: '$4' } },
          //@ts-ignore
          _text: { style: { fontSize: '$lg' } },
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
          _icon: { style: { height: '$3', width: '$3' } },
          //@ts-ignore
          _text: { style: { fontSize: '$md' } },
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
    descendentStyle: ['_icon', '_text', '_indicator'],
    DEBUG: 'CHECKBOX',
  },
  config
);
