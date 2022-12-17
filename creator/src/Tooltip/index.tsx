import { TooltipText } from './TooltipText';
import { Tooltip } from './Tooltip';

export const createTooltip = ({ StyledTooltip, StyledTooltipText }: any) => {
  const TooltipTemp = Tooltip(StyledTooltip) as any;
  TooltipTemp.Text = TooltipText(StyledTooltipText);
  return TooltipTemp;
};
