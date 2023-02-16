import Root from './styled-components/Root';
import Content from './styled-components/Content';
import CloseButton from './styled-components/CloseButton';
import Header from './styled-components/Header';
import Footer from './styled-components/Footer';
import Body from './styled-components/Body';
import Backdrop from './styled-components/Backdrop';
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
