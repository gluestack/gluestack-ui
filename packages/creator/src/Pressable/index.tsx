import { default as PressableMain } from './Pressable';

export const createPressable = ({ StyledPressable }: any) => {
  const PressableTemp = PressableMain(StyledPressable) as any;

  const Pressable = PressableTemp as any;
  return Pressable;
};
