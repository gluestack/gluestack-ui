import { AnimatedView } from '@gluestack-style/animation-resolver';
import { styled } from '@gluestack-style/react';

export default styled(AnimatedView, {}, {
  componentName: 'TooltipContent',
  descendantStyle: ['_text'],
} as const);
