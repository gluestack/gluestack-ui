import { TooltipContent } from './TooltipContent';
import { Tooltip as TooltipMain } from './Tooltip';
import type { IToolTipComponentType } from './types';
// import { TooltipArrow } from './TooltipArrow';

export function createTooltip<TooltipProps, TooltipContentProps>({
  Root,
  Content,
  AnimatePresence,
}: {
  Root: React.ComponentType<TooltipProps>;
  Content: React.ComponentType<TooltipContentProps>;
  AnimatePresence?: React.ComponentType<any>;
}) {
  const Tooltip = TooltipMain(Root) as any;
  Tooltip.Content = TooltipContent(Content, AnimatePresence);
  // Tooltip.Arrow = TooltipArrow(TooltipArrowProps);

  Tooltip.displayName = 'Tooltip';
  Tooltip.Content.displayName = 'Tooltip.Content';

  return Tooltip as IToolTipComponentType<TooltipProps, TooltipContentProps>;
}
