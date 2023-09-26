import { Pressable } from 'react-native';
import { createMotionAnimatedComponent, Motion } from '@legendapp/motion';
import { styled } from '@gluestack-style/react';

//@ts-ignore
const MotionPressable = createMotionAnimatedComponent(
  Pressable
) as typeof Motion.Pressable;

export default styled(MotionPressable, {}, {
  componentName: 'PopoverBackdrop',
} as const);
