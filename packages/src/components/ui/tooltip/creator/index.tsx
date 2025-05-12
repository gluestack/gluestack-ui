import { TooltipContent } from './TooltipContent';
import { TooltipText } from './TooltipText';
import { Tooltip as TooltipMain } from './Tooltip';
import type { IToolTipComponentType } from './types';

export function createTooltip<
  TooltipProps,
  TooltipContentProps,
  TextProps,
  TooltipAnimatePresenceProps
>({
  Text,
  Root,
  Content,
  AnimatePresence,
}: {
  Text: React.ComponentType<TextProps>;
  Root: React.ComponentType<TooltipProps>;
  Content: React.ComponentType<TooltipContentProps>;
  AnimatePresence?: React.ComponentType<TooltipAnimatePresenceProps>;
}) {
  const Tooltip = TooltipMain(Root) as any;
  Tooltip.Content = TooltipContent(Content, AnimatePresence);
  Tooltip.Text = TooltipText(Text);
  Tooltip.displayName = 'Tooltip';
  Tooltip.Content.displayName = 'Tooltip.Content';
  Tooltip.Text.displayName = 'Tooltip.Text';

  return Tooltip as IToolTipComponentType<
    TooltipProps,
    TooltipContentProps,
    TextProps
  >;
}
