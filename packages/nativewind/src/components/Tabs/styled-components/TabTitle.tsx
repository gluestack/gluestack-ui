import { styled } from '@gluestack-style/react';
import { Text } from 'react-native';

export default styled(Text, {}, {
  componentName: 'TabsTabTitle',
  ancestorStyle: ['_title'],
} as const);
