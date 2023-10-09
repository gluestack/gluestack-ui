import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    mt: '$1',
  },
  {
    componentName: 'FormControlHelper',
  } as const
);
