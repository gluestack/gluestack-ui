import { Root, Content, Text } from './styled-components';
import { createTooltip } from '@gluestack-ui/tooltip';
import { AnimatePresence } from '@gluestack-style/animation-resolver';

export const Tooltip = createTooltip({
  Root,
  Content,
  Text,
  //@ts-ignore
  AnimatePresence: AnimatePresence,
});
export const TooltipContent = Tooltip.Content;
export const TooltipText = Tooltip.Text;
