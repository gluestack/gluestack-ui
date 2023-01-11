import { VStack as VStackMain } from './VStack';

export function createVStack<StyledVStackProps, StyledVStackSpacerProps>({
  StyledVStack,
  StyledVStackSpacer,
}: {
  StyledVStack: React.ComponentType<StyledVStackProps>;
  StyledVStackSpacer: React.ComponentType<StyledVStackSpacerProps>;
}) {
  const VStack = VStackMain(StyledVStack, StyledVStackSpacer);

  VStack.displayName = 'VStack';
  return VStack;
}
