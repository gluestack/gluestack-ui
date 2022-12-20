import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        justifyContent: 'center',
        alignItems: 'center',
        h: 20,
        w: 20,
        borderColor: '$muted400',
        bg: '$muted50',
        borderWidth: 2,
        borderRadius: 6,
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
    },
  },
  {}
);
