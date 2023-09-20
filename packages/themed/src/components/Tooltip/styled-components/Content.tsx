//@ts-nocheck
import { AnimationResolver } from '@gluestack-style/animation-plugin';
import { styled } from '@gluestack-style/react';
import { Motion } from '@legendapp/motion';

export default styled(
  Motion.View,
  {},
  {
    componentName: 'TooltipContent',
    descendantStyle: ['_text'],
  } as const,
  {
    plugins: [new AnimationResolver({})],
  }
);
