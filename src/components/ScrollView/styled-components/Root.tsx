import { ScrollView } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(ScrollView, {}, {
  componentName: 'ScrollView',
  descendantStyle: ['_text'],
} as const);
