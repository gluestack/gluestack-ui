import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(View, {}, {
  componentName: 'Collapsible',
  descendantStyle: ['_trigger', '_triggerText', '_content', '_contentText'],
} as const);
