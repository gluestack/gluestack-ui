import { HStack as HStackMain } from './HStack';
import type { IHStackProps } from './types';

export const createHStack = ({ StyledHStack, StyledHStackSpacer }: any) => {
  const HStack = HStackMain({
    StyledHStack,
    StyledHStackSpacer,
  });

  HStack.displayName = 'HStack';

  return HStack;
};
