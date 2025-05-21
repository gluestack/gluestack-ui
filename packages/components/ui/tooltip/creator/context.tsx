import { createContext } from '@/utils/common';
export const [TooltipProvider, useTooltipContext] =
  createContext<any>('TooltipContext');
