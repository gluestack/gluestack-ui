import { styled } from '@gluestack/ui-styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '$trueGray300',
        flex: 1,
        w: '100%',
        h: '100%',
        py: 8,
        px: 12,
      },
      state: {
        hover: {
          style: {
            borderColor: '$blue500',
          },
        },
      },
    },
  },
  {}
);
