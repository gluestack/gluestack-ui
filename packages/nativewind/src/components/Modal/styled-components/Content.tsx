import { styled } from '@gluestack-style/react';
import { AnimatedView } from '@gluestack-style/animation-resolver';

export default styled(AnimatedView, {}, {
  componentName: 'ModalContent',
  ancestorStyle: ['_content'],
} as const);
