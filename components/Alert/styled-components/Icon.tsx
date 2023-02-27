import { View } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  View,
  {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    mr: 12,
  },
  { ancestorStyle: ['_icon'] }
);
