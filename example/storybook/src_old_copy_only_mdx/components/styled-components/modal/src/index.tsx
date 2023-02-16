import Root from './styled-components/Root';
import Content from './styled-components/Content';
import CloseButton from './styled-components/CloseButton';
import Header from './styled-components/Header';
import Footer from './styled-components/Footer';
import Body from './styled-components/Body';
import Backdrop from './styled-components/Backdrop';
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
