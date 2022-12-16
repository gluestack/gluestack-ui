import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        p: '$4',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
        borderTopWidth: 1,
        borderColor: '$gray.300',
      },
    },
  },
  {}
);
