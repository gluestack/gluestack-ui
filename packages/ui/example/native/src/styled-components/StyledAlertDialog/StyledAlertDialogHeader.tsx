import { View } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        p: '$4',
        borderBottomWidth: 1,
        bg: '$gray.300',
        borderColor: '$gray.300',
      },
    },
  },
  {}
);
