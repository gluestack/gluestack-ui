import { HStack as HStackMain } from './HStack';

export function createHStack<StyledHStackProps, StyledHStackSpacerProps>({
  StyledHStack,
  StyledHStackSpacer,
}: {
  StyledHStack: React.ComponentType<StyledHStackProps>;
  StyledHStackSpacer: React.ComponentType<StyledHStackSpacerProps>;
}) {
  const HStack = HStackMain({
    StyledHStack,
    StyledHStackSpacer,
  });

  HStack.displayName = 'HStack';

  return HStack;
}
