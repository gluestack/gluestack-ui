import { styled } from '@gluestack-style/react';
import { Text } from 'react-native';

export default styled(Text, {}, {
  componentName: 'AccordionTitleText',
  ancestorStyle: ['_titleText'],
} as const);
