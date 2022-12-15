import { styled } from '@gluestack/styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    baseStyle: {
      style: {
        bg: '$primary.600',
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
                outlineColor: '$primary.300',
                outlineStyle: 'solid',
              },
            },
            active: {
              style: {
                //@ts-ignore
                outlineWidth: 8,
                outlineColor: '$primary.300',
                outlineStyle: 'solid',
              },
            },
            focus: {
              style: {
                //@ts-ignore
                outlineWidth: '2px',
                outlineColor: '$primary.400',
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
