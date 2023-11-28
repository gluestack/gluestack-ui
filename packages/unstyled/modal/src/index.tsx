import { default as ModalMain } from './Modal';
import ModalContent from './ModalContent';
import ModalBody from './ModalBody';
import ModalCloseButton from './ModalCloseButton';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import ModalBackdrop from './ModalBackdrop';
import type { IModalComponentType } from './types';

export { ModalContext } from './Context';

export const createModal = <
  ModalProps,
  ContentProps,
  CloseButtonProps,
  HeaderProps,
  FooterProps,
  BodyProps,
  BackdropProps,
  AnimatePresenceProps
>({
  Root,
  Content,
  CloseButton,
  Header,
  Footer,
  Body,
  Backdrop,
  AnimatePresence,
}: {
  Root: React.ComponentType<ModalProps>;
  Content: React.ComponentType<ContentProps>;
  CloseButton: React.ComponentType<CloseButtonProps>;
  Header: React.ComponentType<HeaderProps>;
  Footer: React.ComponentType<FooterProps>;
  Body: React.ComponentType<BodyProps>;
  Backdrop: React.ComponentType<BackdropProps>;
  AnimatePresence?: React.ComponentType<AnimatePresenceProps>;
}) => {
  const Modal: any = ModalMain(Root);
  Modal.Content = ModalContent(Content, AnimatePresence);
  Modal.CloseButton = ModalCloseButton(CloseButton);
  Modal.Header = ModalHeader(Header);
  Modal.Footer = ModalFooter(Footer);
  Modal.Body = ModalBody(Body);
  Modal.Backdrop = ModalBackdrop(Backdrop, AnimatePresence);

  Modal.displayName = 'Modal';
  Modal.Content.displayName = 'Modal.Content';
  Modal.CloseButton.displayName = 'Modal.CloseButton';
  Modal.Header.displayName = 'Modal.Header';
  Modal.Footer.displayName = 'Modal.Footer';
  Modal.Body.displayName = 'Modal.Body';
  Modal.Backdrop.displayName = 'Modal.Backdrop';

  return Modal as IModalComponentType<
    ModalProps,
    ContentProps,
    CloseButtonProps,
    HeaderProps,
    FooterProps,
    BodyProps,
    BackdropProps
  >;
};
