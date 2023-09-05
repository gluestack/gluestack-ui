import { HStack as HStackMain } from './HStack';

export function createHStack<StyledHStackProps>({
  Root,
}: {
  Root: React.ComponentType<StyledHStackProps>;
}) {
  const HStack = HStackMain(Root);

  HStack.displayName = 'HStack';

  return HStack;
}
