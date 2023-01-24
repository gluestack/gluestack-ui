import { TooltipContent } from './TooltipContent';
import { Tooltip as TooltipMain } from './Tooltip';
import type { IToolTipComponentType } from './types';
// import { TooltipArrow } from './TooltipArrow';

export function createTooltip<StyledTooltip, StyledTooltipContent>({
  Root,
  Content,
}: {
  Root: React.ComponentType<StyledTooltip>;
  Content: React.ComponentType<StyledTooltipContent>;
}) {
  const Tooltip = TooltipMain(Root) as any;
  Tooltip.Content = TooltipContent(Content);
  // Tooltip.Arrow = TooltipArrow(StyledTooltipArrow);

  Tooltip.displayName = 'Tooltip';
  Tooltip.Content.displayName = 'Tooltip.Content';

  return Tooltip as IToolTipComponentType<StyledTooltip, StyledTooltipContent>;
}
