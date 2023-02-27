import { Root, Content } from './styled-components';
import { createTooltip } from '@gluestack-ui/tooltip';

export const Tooltip = createTooltip({
  Root,
  Content,
}) as any;
