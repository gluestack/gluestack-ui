import { TooltipContent } from './TooltipContent';
import { Tooltip as TooltipMain } from './Tooltip';
import type { IToolTipComponentType } from './types';

export function createTooltip<
  TooltipProps,
  TooltipContentProps,
  TooltipAnimatePresenceProps
>({
  Root,
  Content,
  AnimatePresence,
}: {
  Root: React.ComponentType<TooltipProps>;
  Content: React.ComponentType<TooltipContentProps>;
  AnimatePresence?: React.ComponentType<TooltipAnimatePresenceProps>;
}) {
  const Tooltip = TooltipMain(Root) as any;
  Tooltip.Content = TooltipContent(Content, AnimatePresence);
  Tooltip.displayName = 'Tooltip';
  Tooltip.Content.displayName = 'Tooltip.Content';

  return Tooltip as IToolTipComponentType<TooltipProps, TooltipContentProps>;
}
