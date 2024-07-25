import { default as PressableMain } from './Pressable';

export function createPressable<PressableProps>({
  Root,
}: {
  Root: React.ComponentType<PressableProps>;
}) {
  const Pressable = PressableMain(Root);

  Pressable.displayName = 'Pressable';
  return Pressable;
}
