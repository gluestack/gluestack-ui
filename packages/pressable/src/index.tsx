import { default as PressableMain } from './Pressable';

export function createPressable<StyledPressable>({
  Root,
}: {
  Root: React.ComponentType<StyledPressable>;
}) {
  const Pressable = PressableMain(Root);

  Pressable.displayName = 'Pressable';
  return Pressable;
}
