import { View } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  View,
  {
    baseStyle: { style: { color: '$white' } },
  },
  { ancestorStyle: ['_text'], DEBUG: 'STYLEDALERTICON' }
);
