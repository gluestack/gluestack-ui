import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(View, {}, {
  componentName: 'Accordion',
  descendantStyle: ['_titleText', '_contentText', '_icon'],
} as const);
