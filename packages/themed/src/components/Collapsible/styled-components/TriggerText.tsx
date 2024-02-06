import { styled } from '@gluestack-style/react';
import { Text } from 'react-native';

export default styled(Text, {}, {
  componentName: 'CollapsibleTriggerText',
  ancestorStyle: ['_triggerText'],
} as const);
