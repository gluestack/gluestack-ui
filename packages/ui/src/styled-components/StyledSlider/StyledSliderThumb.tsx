import { styled } from '@gluestack/ui-styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    baseStyle: {
      style: {
        bg: '$primary600',
        h: 16,
        w: 16,
        position: 'absolute',
        borderRadius: 9999,
        top: -6,
        marginLeft: '-1%',
      },
      platform: {
        web: {
          style: {
            //@ts-ignore
            cursor: 'pointer',
          },
          state: {
            hover: {
              style: {
                //@ts-ignore
                outlineWidth: 4,
                outlineColor: '$primary300',
                outlineStyle: 'solid',
              },
            },
            active: {
              style: {
                //@ts-ignore
                outlineWidth: 8,
                outlineColor: '$primary300',
                outlineStyle: 'solid',
              },
            },
            focus: {
              style: {
                //@ts-ignore
                outlineWidth: '2px',
                outlineColor: '$primary400',
                outlineStyle: 'solid',
              },
            },
          },
        },
      },

      descendants: {},
    },
  },
  {}
);
