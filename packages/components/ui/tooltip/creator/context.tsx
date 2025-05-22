import { createContext } from '@/utils/gluestack-utils/common';
export const [TooltipProvider, useTooltipContext] =
  createContext<any>('TooltipContext');
