//@ts-nocheck
import { createMotionAnimatedComponent, Motion } from '@legendapp/motion';
import { Pressable } from 'react-native';
import { styled } from '@gluestack-style/react';
import { AnimationResolver } from '@gluestack-style/animation-plugin';

const MotionPressable = createMotionAnimatedComponent(
  Pressable
) as typeof Motion.Pressable;

export default styled(
  MotionPressable,
  {},
  {
    componentName: 'AlertDialogBackdrop',
  } as const,
  {
    plugins: [new AnimationResolver({})],
  }
);
