import { config } from '../ui.config';
import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
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
    descendentStyle: ['_icon', '_text'],
  },
  config
);
