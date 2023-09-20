import { Pressable } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(Pressable, {}, {
  componentName: 'ModalCloseButton',
  descendantStyle: ['_icon', '_text'],
} as const);
