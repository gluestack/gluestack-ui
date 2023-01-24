import { default as ModalMain } from './Modal';
import ModalContent from './ModalContent';
import ModalBody from './ModalBody';
import ModalCloseButton from './ModalCloseButton';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import ModalBackdrop from './ModalBackdrop';

export const createModal = ({
  Root,
  Content,
  CloseButton,
  Header,
  Footer,
  Body,
  Backdrop,
}: any) => {
  const Modal: any = ModalMain(Root);
  Modal.Content = ModalContent(Content);
  Modal.CloseButton = ModalCloseButton(CloseButton);
  Modal.Header = ModalHeader(Header);
  Modal.Footer = ModalFooter(Footer);
  Modal.Body = ModalBody(Body);
  Modal.Backdrop = ModalBackdrop(Backdrop);

  Modal.displayName = 'Modal';
  Modal.Content.displayName = 'Modal.Content';
  Modal.CloseButton.displayName = 'Modal.CloseButton';
  Modal.Header.displayName = 'Modal.Header';
  Modal.Footer.displayName = 'Modal.Footer';
  Modal.Body.displayName = 'Modal.Body';
  Modal.Backdrop.displayName = 'Modal.Backdrop';

  return Modal;
};

export { ModalContext } from './Context';
