//@ts-nocheck
import { UL } from '@expo/html-elements';
import { AnimationResolver } from '@gluestack-style/animation-plugin';
import { styled } from '@gluestack-style/react';
import { createMotionAnimatedComponent, Motion } from '@legendapp/motion';
const MotionUL = createMotionAnimatedComponent(UL) as typeof Motion.Pressable;
export const Root = styled(
  MotionUL,
  {},
  {
    componentName: 'Menu',
  } as const,
  {
    plugins: [new AnimationResolver({})],
  }
);
