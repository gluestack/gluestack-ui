import { View } from 'react-native';
import { verboseStyled } from '@dank-style/react';
import { config } from '../../../../gluestack.config';

export default verboseStyled(
  View,
  {
    baseStyle: {
      style: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: `${config?.tokens?.colors.muted500}`,
        bg: '$muted50',
        borderWidth: 2,
        borderRadius: 6,
      },
      platform: {
        web: {
          state: {
            focusVisible: {
              style: {
                //@ts-ignore
                outlineWidth: '2px',
                outlineColor: `${config?.tokens?.colors.primary400}`,
                outlineStyle: 'solid',
              },
            },
          },
        },
      },
      state: {
        checked: {
          style: {
            borderColor: `${config?.tokens?.colors.primary600}`,
            bg: `${config?.tokens?.colors.primary600}`,
          },
        },

        hover: {
          style: {
            borderColor: `${config?.tokens?.colors.muted500}`,
          },
          state: {
            checked: {
              style: {
                bg: `${config?.tokens?.colors.primary700}`,
                borderColor: `${config?.tokens?.colors.primary700}`,
              },
            },
          },
        },
        active: {
          style: {
            bg: `${config?.tokens?.colors.primary800}`,
            borderColor: `${config?.tokens?.colors.primary800}`,
          },
        },
        invalid: {
          style: {
            borderColor: `${config?.tokens?.colors.error600}`,
          },
        },
      },
      // colorMode: {
      //   dark: {
      //     style: { borderColor: '$muted500', bg: '$muted900' },
      //     state: {
      //       hover: {
      //         style: {
      //           borderColor: '$muted400',
      //         },
      //         state: {
      //           checked: {
      //             style: {
      //               bg: '$primary400',
      //               borderColor: '$primary400',
      //             },
      //           },

      //           disabled: {
      //             style: { borderColor: '$muted500' },
      //           },
      //         },
      //       },
      //       active: {
      //         style: {
      //           bg: '$primary500',
      //           borderColor: '$primary500',
      //         },
      //       },
      //       invalid: {
      //         style: {
      //           borderColor: '$error500',
      //         },
      //       },
      //     },
      //   },
      // },
    },
  },
  {
    ancestorStyle: ['_indicator'],
  }
);
