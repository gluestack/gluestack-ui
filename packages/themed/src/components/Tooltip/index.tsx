import { Root, Content, Text } from './styled-components';
import { createTooltip } from '@gluestack-ui/tooltip';

export const Tooltip = createTooltip({
  Root,
  Content,
  Text,
  //@ts-ignore
  AnimatePresence: Content.AnimatePresence,
});
export const TooltipContent = Tooltip.Content;
export const TooltipText = Tooltip.Text;
