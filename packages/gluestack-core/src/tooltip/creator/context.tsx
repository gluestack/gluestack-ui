import { createContext } from '@gluestack-ui/utils/common';
export const [TooltipProvider, useTooltipContext] =
  createContext<any>('TooltipContext');
