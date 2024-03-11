import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {},
  {
    componentName: 'TableData',
    ancestorStyle: ['_data'],
  } as const,
  {}
);
