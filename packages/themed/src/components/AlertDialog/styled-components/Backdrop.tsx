import { createMotionAnimatedComponent, Motion } from '@legendapp/motion';
import { Pressable } from 'react-native';
import { styled } from '@gluestack-style/react';

const MotionPressable = createMotionAnimatedComponent(
  Pressable
) as typeof Motion.Pressable;

export default styled(MotionPressable, {}, {
  componentName: 'AlertDialogBackdrop',
} as const);
