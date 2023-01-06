import { Pressable } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  Pressable,
  {
    baseStyle: {
      style: {
        p: '$2',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      descendants: {
        _icon: { style: { color: '$primary600' } },
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
    // colorMode:{
    //   dark:{

    //   }
    // }
  },
  {
    descendantStyle: ['_icon', '_text', '_indicator'],
  }
);
