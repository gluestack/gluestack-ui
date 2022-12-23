import { HStack as HStackMain } from './HStack';

export const createHStack = ({ StyledHStack, StyledHStackSpacer }: any) => {
  const HStack = HStackMain({
    StyledHStack,
    StyledHStackSpacer,
  });

  HStack.displayName = 'HStack';

  return HStack;
};
