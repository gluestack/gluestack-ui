import { Motion } from '@legendapp/motion';
import { styled } from '@gluestack-style/react';

export default styled(Motion.View, {}, {
  componentName: 'PopoverContent',
  ancestorStyle: ['_content'],
} as const);
