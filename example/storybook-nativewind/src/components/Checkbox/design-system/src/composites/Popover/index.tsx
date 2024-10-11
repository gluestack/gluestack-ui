import Root from './styled-components/Root';
import Content from './styled-components/Content';
import CloseButton from './styled-components/CloseButton';
import Header from './styled-components/Header';
import Footer from './styled-components/Footer';
import Body from './styled-components/Body';
import Backdrop from './styled-components/Backdrop';
import Arrow from './styled-components/Arrow';
import { createPopover } from '@gluestack-ui/popover';

export const Popover = createPopover({
  Root,
  Content,
  CloseButton,
  Header,
  Footer,
  Body,
  Backdrop,
  Arrow,
}) as any;
