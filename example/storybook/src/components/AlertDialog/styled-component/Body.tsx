import { ScrollView } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  ScrollView,
  {
    baseStyle: {
      style: {
        backgroundColor: 'white',
        padding: '$4',
      },
    },
  },
  {}
);
