import { styled } from '@gluestack/styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        bg: '$primary.900',
      },

      state: {
        hover: {
          style: {
            bg: '$violet.200',
          },
        },
        focus: {
          style: {
            bg: '$violet.400',
          },
        },
      },
    },
  },
  {}
);
