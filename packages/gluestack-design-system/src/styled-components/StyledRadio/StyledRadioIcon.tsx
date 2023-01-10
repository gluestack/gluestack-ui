import { View } from 'react-native';
import { styled } from 'dank-style';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        alignItems: 'center',
        color: '$primary600',
      },
      colorMode: {
        dark: {
          style: {
            color: '$primary400',
          },
        },
      },
      // platform: {
      //   web: {
      //     state: {
      //       focusVisible: {
      //         style: {
      //           //@ts-ignore
      //           outlineWidth: '2px',
      //           outlineColor: '$primary700',
      //           outlineStyle: 'solid',
      //         },
      //       },
      //     },
      //   },
      // },
      state: {
        disabled: {
          style: {
            opacity: 0.6,
            color: 'transparent',
          },
        },
        checked: {
          style: {
            color: '$primary600',
          },
          state: {
            hover: {
              style: {
                color: '$primary700',
              },
            },
            disabled: {
              style: {
                color: '$primary600',
              },
            },
          },
        },
      },
    },
  },
  {
    ancestorStyle: ['_icon'],
  }
);
