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
  const ModalTemp: any = ModalMain(StyledModal);
  ModalTemp.Content = ModalContent(StyledModalContent);
  ModalTemp.CloseButton = ModalCloseButton(StyledModalCloseButton);
  ModalTemp.Header = ModalHeader(StyledModalHeader);
  ModalTemp.Footer = ModalFooter(StyledModalFooter);
  ModalTemp.Body = ModalBody(StyledModalBody);
  ModalTemp.Backdrop = ModalBackdrop(StyledModalBackdrop);
  const Modal = ModalTemp as any;
  return Modal;
};
