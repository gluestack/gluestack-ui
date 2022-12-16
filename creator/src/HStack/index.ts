import { HStack } from './HStack';
import type { IHStackProps } from './types';

export const createHStack = ({ StyledHStack, StyledHStackSpacer }: any) => {
  const HStackTemp = HStack({
    StyledHStack,
    StyledHStackSpacer,
  }) as IHStackProps;

  return HStackTemp;
};
