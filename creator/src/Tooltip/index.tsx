import { TooltipContent } from './TooltipContent';
import { Tooltip } from './Tooltip';
// import { TooltipArrow } from './TooltipArrow';

export const createTooltip = ({
  StyledTooltip,
  StyledTooltipContent,
}: // StyledTooltipArrow,
any) => {
  const TooltipTemp = Tooltip(StyledTooltip) as any;
  TooltipTemp.Content = TooltipContent(StyledTooltipContent);
  // TooltipTemp.Arrow = TooltipArrow(StyledTooltipArrow);

  return TooltipTemp;
};
