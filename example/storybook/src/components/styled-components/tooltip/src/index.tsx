import Root from './Root';
import Content from './Content';
import { createTooltip } from '@universa11y/tooltip';

export const Tooltip = createTooltip({
  Root,
  // StyledTooltipArrow,
  Content,
});
