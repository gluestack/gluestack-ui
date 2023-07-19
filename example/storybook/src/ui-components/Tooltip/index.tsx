import { Root, Content, Text } from './styled-components';
import { createTooltip } from '@gluestack-ui/tooltip';
import { styled } from '../styled';

export const Tooltip = createTooltip({
  Root,
  Content,
  Text,
  //@ts-ignore
  AnimatePresence: styled.Component,
});
