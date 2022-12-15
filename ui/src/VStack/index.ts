import { VStack } from './VStack';
import type { IVStackProps } from './types';

export const createVStack = ({ StyledVStack, StyledVStackSpacer }: any) => {
  const VStackTemp = VStack(StyledVStack, StyledVStackSpacer) as IVStackProps;
  return VStackTemp;
};
