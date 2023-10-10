import { AnimatePresence } from '@gluestack-style/animation-resolver';
import { createModal } from '@gluestack-ui/modal';
import {
  Root,
  Content,
  CloseButton,
  Header,
  Footer,
  Body,
  Backdrop,
} from './styled-components';

export const Modal = createModal({
  Root,
  Content,
  CloseButton,
  Header,
  Footer,
  Body,
  Backdrop,
  //@ts-ignore
  AnimatePresence: AnimatePresence,
});

export const ModalContent = Modal.Content;
export const ModalCloseButton = Modal.CloseButton;
export const ModalHeader = Modal.Header;
export const ModalFooter = Modal.Footer;
export const ModalBody = Modal.Body;
export const ModalBackdrop = Modal.Backdrop;
