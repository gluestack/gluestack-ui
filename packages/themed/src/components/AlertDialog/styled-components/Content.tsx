import { AnimatedView } from '@gluestack-style/animation-resolver';
import { styled } from '@gluestack-style/react';

export default styled(AnimatedView, {}, {
  componentName: 'AlertDialogContent',
  ancestorStyle: ['_content'],
} as const);
