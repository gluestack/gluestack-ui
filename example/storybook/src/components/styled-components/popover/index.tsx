import Root from './Root';
import Content from './Content';
import CloseButton from './CloseButton';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import Backdrop from './Backdrop';
import Arrow from './Arrow';
// @ts-ignore
import { createPopover } from '@universa11y/popover';

export const Popover = createPopover({
  Root,
  Content,
  CloseButton,
  Header,
  Footer,
  Body,
  Backdrop,
  Arrow,
});
