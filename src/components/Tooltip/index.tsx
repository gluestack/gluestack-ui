import { Root, Content, Text } from './styled-components';
import { createTooltip } from '@gluestack-ui/tooltip';
import { styled } from '../styled';

export const Tooltip = createTooltip({
  Root,
  Content,
  //@ts-ignore

  Text,
  //@ts-ignore
  AnimatePresence: styled.Component,
});
export const TooltipContent = Tooltip.Content;
// export const TooltipText = Tooltip.Text;
