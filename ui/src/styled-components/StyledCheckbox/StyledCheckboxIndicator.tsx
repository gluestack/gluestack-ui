import { config } from '../ui.config';
import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '$muted400',
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
                outlineColor: '$primary400',
                outlineStyle: 'solid',
              },
            },
          },
        },
      },
      state: {
        checked: {
          style: {
            borderColor: '$primary600',
            bg: '$primary600',
          },
        },

        hover: {
          style: {
            borderColor: '$muted500',
          },
          state: {
            checked: {
              style: {
                bg: '$primary700',
                borderColor: '$primary700',
              },
            },
          },
        },
        active: {
          style: {
            bg: '$primary800',
            borderColor: '$primary800',
          },
        },
        invalid: {
          style: {
            borderColor: '$error600',
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
  },
  config
);
