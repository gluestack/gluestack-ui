import { TooltipContent } from '../TooltipContent';
import { Tooltip as TooltipMain } from './Tooltip';
import type { IToolTipComponentType } from './types';
// import { TooltipArrow } from './TooltipArrow';

export function createTooltip<StyledTooltip, StyledTooltipContent>({
  StyledTooltip,
  StyledTooltipContent,
}: {
  StyledTooltip: React.ComponentType<StyledTooltip>;
  StyledTooltipContent: React.ComponentType<StyledTooltipContent>;
}) {
  const Tooltip = TooltipMain(StyledTooltip) as any;
  Tooltip.Content = TooltipContent(StyledTooltipContent);
  // Tooltip.Arrow = TooltipArrow(StyledTooltipArrow);

  Tooltip.displayName = 'Tooltip';
  Tooltip.Content.displayName = 'Tooltip.Content';

  return Tooltip as IToolTipComponentType<StyledTooltip, StyledTooltipContent>;
}
