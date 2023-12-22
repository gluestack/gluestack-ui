import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

export default styled(Pressable, {}, {
  descendantStyle: ['_text', '_icon'],
  componentName: 'ActionsheetItem',
} as const);
