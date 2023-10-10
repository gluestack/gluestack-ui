import { Pressable } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(Pressable, {}, {
  componentName: 'AlertDialogCloseButton',
  descendantStyle: ['_icon', '_text'],
} as const);
