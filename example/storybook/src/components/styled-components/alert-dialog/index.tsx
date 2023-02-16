import Root from './Root';
import Content from './Content';
import CloseButton from './CloseButton';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import Backdrop from './Backdrop';
import { createAlertDialog } from '@universa11y/alert-dialog';

export const AlertDialog = createAlertDialog({
  Root,
  Content,
  CloseButton,
  Header,
  Footer,
  Body,
  Backdrop,
}) as any;
