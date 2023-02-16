import Root from './styled-components/Root';
import Content from './styled-components/Content';
import { createTooltip } from '@universa11y/tooltip';

export const Tooltip = createTooltip({
  Root,
  // StyledTooltipArrow,
  Content,
});
