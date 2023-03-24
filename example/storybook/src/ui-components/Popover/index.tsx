import { createPopover } from '@gluestack-ui/popover';
import { styled } from '../styled';
import {
  Root,
  Arrow,
  Content,
  Header,
  Footer,
  Body,
  Backdrop,
  CloseButton,
} from './styled-components';

export const Popover = createPopover({
  Root,
  Arrow,
  Content,
  Header,
  Footer,
  Body,
  Backdrop,
  CloseButton,
  AnimatePresence: styled.Component,
});
