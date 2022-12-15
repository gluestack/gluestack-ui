import { StyledHStack, StyledHStackSpacer } from '../../styled-components';
import { createHStack } from '@gluestack/ui-creator';

export const HStack = createHStack({
  StyledHStack,
  StyledHStackSpacer,
}) as any;
