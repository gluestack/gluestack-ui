import { View } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  View,
  {
    color: '$white',
  },
  { ancestorStyle: ['_text'] }
);
