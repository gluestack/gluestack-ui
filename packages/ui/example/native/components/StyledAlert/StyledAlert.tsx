import { Text, View } from 'react-native';
import { styled } from '@gluestack/styled';

export default styled(
  View,
  {
    baseStyle: {
      style: { color: '$blue.900', bg: '$amber.500', h: '$4', w: '$40' },
    },
  },
  { ancestorStyle: ['_text'] }
);
