import { default as ModalMain } from './Modal';
import ModalContent from './ModalContent';
import ModalBody from './ModalBody';
import ModalCloseButton from './ModalCloseButton';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import ModalBackdrop from './ModalBackdrop';

export const createModal = ({
  StyledModal,
  StyledModalContent,
  StyledModalCloseButton,
  StyledModalHeader,
  StyledModalFooter,
  StyledModalBody,
  StyledModalBackdrop,
}: any) => {
  const Modal: any = ModalMain(StyledModal);
  Modal.Content = ModalContent(StyledModalContent);
  Modal.CloseButton = ModalCloseButton(StyledModalCloseButton);
  Modal.Header = ModalHeader(StyledModalHeader);
  Modal.Footer = ModalFooter(StyledModalFooter);
  Modal.Body = ModalBody(StyledModalBody);
  Modal.Backdrop = ModalBackdrop(StyledModalBackdrop);

  Modal.displayName = 'Modal';
  Modal.Content.displayName = 'Modal.Content';
  Modal.CloseButton.displayName = 'Modal.CloseButton';
  Modal.Header.displayName = 'Modal.Header';
  Modal.Footer.displayName = 'Modal.Footer';
  Modal.Body.displayName = 'Modal.Body';
  Modal.Backdrop.displayName = 'Modal.Backdrop';

  return Modal;
};
