import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(View, {}, {
  componentName: 'Accordion',
  descendantStyle: ['_item', '_titleText', '_button', '_icon', '_contentText'],
} as const);
