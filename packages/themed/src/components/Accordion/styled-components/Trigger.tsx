import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

export default styled(Pressable, {}, {
  componentName: 'AccordionTrigger',
  descendantStyle: ['_icon', '_titleText', '_contentText'],
  ancestorStyle: ['_button'],
} as const);
