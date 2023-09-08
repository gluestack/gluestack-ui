import { VStack as VStackMain } from './VStack';

export function createVStack<VStackProps>({
  Root,
}: {
  Root: React.ComponentType<VStackProps>;
}) {
  const VStack = VStackMain(Root);

  VStack.displayName = 'VStack';
  return VStack;
}
