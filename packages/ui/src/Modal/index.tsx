import Modal from './Modal';
import ModalContent from './ModalContent';
import ModalBody from './ModalBody';
import ModalCloseButton from './ModalCloseButton';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import ModalBackdrop from './ModalBackdrop';
import { ModalContext } from './Context';
// import type { IModalComponentType } from './types';

const ModalTemp: any = Modal;

ModalTemp.Content = ModalContent;
ModalTemp.CloseButton = ModalCloseButton;
ModalTemp.Header = ModalHeader;
ModalTemp.Footer = ModalFooter;
ModalTemp.Body = ModalBody;
ModalTemp.Backdrop = ModalBackdrop;

const ModalMain = ModalTemp; // as IModalComponentType;

export { ModalMain as Modal, ModalContext };
// export type { IModalProps } from './types';
