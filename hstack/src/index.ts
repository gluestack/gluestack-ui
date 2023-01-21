import { HStack as HStackMain } from './HStack';

export function createHStack<StyledHStackProps, StyledHStackSpacerProps>({
  Root,
  Spacer,
}: {
  Root: React.ComponentType<StyledHStackProps>;
  Spacer: React.ComponentType<StyledHStackSpacerProps>;
}) {
  const HStack = HStackMain(Root, Spacer);

  HStack.displayName = 'HStack';

  return HStack;
}
