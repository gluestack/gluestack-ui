import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {},
  {
    componentName: 'Textarea',
    descendantStyle: ['_input'],
  } as const,
  {}
);
