import { styled } from '@gluestack-style/react';
import { Motion } from '@legendapp/motion';

export default styled(Motion.View, {}, {
  componentName: 'AlertDialogContent',
  ancestorStyle: ['_content'],
} as const);
