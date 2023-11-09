import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(View, {}, {
  componentName: 'AccordionItem',
  ancestorStyle: ['_item'],
} as const);
