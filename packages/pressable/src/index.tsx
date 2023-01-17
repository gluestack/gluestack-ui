import { default as PressableMain } from './Pressable';

export function createPressable<StyledPressable>({
  StyledPressable,
}: {
  StyledPressable: React.ComponentType<StyledPressable>;
}) {
  const Pressable = PressableMain(StyledPressable);

  Pressable.displayName = 'Pressable';
  return Pressable;
}
