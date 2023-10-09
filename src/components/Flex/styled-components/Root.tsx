import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(View, {}, {
  componentName: 'Flex',
  descendantStyle: ['_text'],
} as const);
