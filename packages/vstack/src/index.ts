import { VStack as VStackMain } from './VStack';

export function createVStack<VStackProps, VStackSpacerProps>({
  Root,
  Spacer,
}: {
  Root: React.ComponentType<VStackProps>;
  Spacer: React.ComponentType<VStackSpacerProps>;
}) {
  const VStack = VStackMain(Root, Spacer);

  VStack.displayName = 'VStack';
  return VStack;
}
