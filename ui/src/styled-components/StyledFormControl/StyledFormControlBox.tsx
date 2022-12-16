import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        w: 300,
        bg: '$amber500',
        flexDirection: 'column',
        p: 8,
      },
      state: {
        disabled: {
          style: {
            borderColor: '$primary800',
            borderWidth: 2,
          },
        },
        invalid: {
          style: {
            borderColor: '$red500',
            borderWidth: 2,
          },
        },
      },
    },
  },
  {}
);
