import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

export default styled(Pressable, {}, {
  componentName: 'SelectActionsheetItem',
  descendantStyle: ['_text'],
} as const);
