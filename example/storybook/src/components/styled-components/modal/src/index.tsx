import Root from './Root';
import Content from './Content';
import CloseButton from './CloseButton';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import Backdrop from './Backdrop';
import { createModal } from '@universa11y/modal';

export const Modal = createModal({
  Root,
  Content,
  CloseButton,
  Header,
  Footer,
  Body,
  Backdrop,
});
