import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

export default styled(Pressable, {}, {
  componentName: 'Fab',
  descendantStyle: ['_text', '_icon'],
} as const);
