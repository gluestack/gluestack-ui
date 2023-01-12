import { default as PressableMain } from './Pressable';

export const createPressable = ({ StyledPressable }: any) => {
  const Pressable = PressableMain(StyledPressable) as any;

  Pressable.displayName = 'Pressable';
  return Pressable;
};
