import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    marginRight: 12,
  },
  { ancestorStyle: ['_icon'] }
);
