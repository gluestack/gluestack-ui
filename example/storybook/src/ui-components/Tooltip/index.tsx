import { Root, Content } from './styled-components';
import { createTooltip } from '@gluestack-ui/tooltip';
import { styled } from '../styled';

export const Tooltip = createTooltip({
  Root,
  Content,
  AnimatePresence: styled.Component,
}) as any;
