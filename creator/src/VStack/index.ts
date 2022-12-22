import { VStack as VStackMain } from './VStack';
import type { IVStackProps } from './types';

export const createVStack = ({ StyledVStack, StyledVStackSpacer }: any) => {
  const VStack = VStackMain(StyledVStack, StyledVStackSpacer) as IVStackProps;
  //@ts-ignore
  VStack.displayName = 'VStack';
  return VStack;
};
