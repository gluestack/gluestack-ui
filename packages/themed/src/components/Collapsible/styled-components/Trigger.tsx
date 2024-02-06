import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

export default styled(Pressable, {}, {
  componentName: 'AccordionTrigger',
  descendantStyle: ['_triggerText'],
  ancestorStyle: ['_trigger'],
} as const);
