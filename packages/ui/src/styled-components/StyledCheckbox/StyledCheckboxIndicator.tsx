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
        borderColor: '$trueGray300',
        borderWidth: 2,
        borderRadius: 6,
      },
      state: {
        checked: {
          style: {
            borderColor: '$blue500',
          },
        },
        hover: {
          style: {
            borderColor: '$trueGray400',
          },
          state: {
            checked: {
              style: {
                borderColor: '$blue600',
              },
            },
          },
        },
      },
    },
  },
  {}
);
