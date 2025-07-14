import { createContext } from '@gluestack-ui-nightly/utils/common';
export const [TooltipProvider, useTooltipContext] =
  createContext<any>('TooltipContext');
