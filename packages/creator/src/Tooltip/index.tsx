import { TooltipContent } from './TooltipContent';
import { Tooltip as TooltipMain } from './Tooltip';
// import { TooltipArrow } from './TooltipArrow';

export const createTooltip = ({
  StyledTooltip,
  StyledTooltipContent,
}: // StyledTooltipArrow,
any) => {
  const Tooltip = TooltipMain(StyledTooltip) as any;
  Tooltip.Content = TooltipContent(StyledTooltipContent);
  // Tooltip.Arrow = TooltipArrow(StyledTooltipArrow);

  Tooltip.displayName = 'Tooltip';
  Tooltip.Content.displayName = 'Tooltip.Content';

  return Tooltip;
};
