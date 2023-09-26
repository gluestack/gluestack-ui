import { styled } from '@gluestack-style/react';
import { Motion } from '@legendapp/motion';

export default styled(Motion.View, {}, {
  componentName: 'TooltipContent',
  descendantStyle: ['_text'],
} as const);
