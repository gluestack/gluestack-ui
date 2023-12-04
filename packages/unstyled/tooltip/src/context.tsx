import { createContext } from '@gluestack-ui/utils';
export const [TooltipProvider, useTooltipContext] =
  createContext<any>('TooltipContext');
