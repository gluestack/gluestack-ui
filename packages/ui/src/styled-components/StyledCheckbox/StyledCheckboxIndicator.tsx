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
        borderColor: '$trueGray.300',
        borderWidth: 2,
        borderRadius: 6,
      },
      state: {
        checked: {
          style: {
            borderColor: '$primary.500',
          },
        },
        hover: {
          style: {
            borderColor: '$trueGray.400',
          },
          state: {
            checked: {
              style: {
                borderColor: '$primary.600',
              },
            },
          },
        },
      },
    },
  },
  {}
);
