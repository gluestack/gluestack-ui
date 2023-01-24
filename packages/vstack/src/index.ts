import { VStack as VStackMain } from './VStack';

export function createVStack<StyledVStackProps, StyledVStackSpacerProps>({
  Root,
  Spacer,
}: {
  Root: React.ComponentType<StyledVStackProps>;
  Spacer: React.ComponentType<StyledVStackSpacerProps>;
}) {
  const VStack = VStackMain(Root, Spacer);

  VStack.displayName = 'VStack';
  return VStack;
}
