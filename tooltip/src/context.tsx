import { createContext } from '@universa11y/utils';
export const [TooltipProvider, useTooltipContext] =
  createContext<any>('TooltipContext');
