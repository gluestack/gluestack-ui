import { Text } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(Text, {}, {
  componentName: 'RadioLabel',
  ancestorStyle: ['_text'],
} as const);
