export interface InterfaceModalProps {
  /**
   * If true, the modal will open. Useful for controllable state behavior.
   */
  isOpen?: boolean;
  /**
   * Callback invoked when the modal is closed.
   */
  onClose?: any;
  /**
   * If true, the modal will be opened by default.
   */
  defaultIsOpen?: boolean;
  /**
   * The size of the modal.
   */
  /**
   * The ref of element to receive focus when the modal opens.
   */
  initialFocusRef?: React.RefObject<any>;
  /**
   * The ref of element to receive focus when the modal closes.
   */
  finalFocusRef?: React.RefObject<any>;
  /**
   * If true and the keyboard is opened, the modal will move up equivalent to the keyboard height.
   * @default false
   */
  avoidKeyboard?: boolean;
  /**
   * If true, the modal will close when the overlay is clicked.
   * @default true
   */
  closeOnOverlayClick?: boolean;
  /**
   * If true, the modal will close when Escape key is pressed.
   * @default true
   */
  isKeyboardDismissable?: boolean;
  /**
   * If true, renders react-native native modal
   * @default false
   */
  useRNModal?: boolean;
}

export interface IModalContentProps {
  /**
   * If true, Modal Content will be focusable.
   * @default false
   */
  focusable?: boolean;
}

export type IModalComponentType<
  ModalProps,
  ContentProps,
  CloseButtonProps,
  HeaderProps,
  FooterProps,
  BodyProps,
  BackdropProps
> = React.ForwardRefExoticComponent<ModalProps & InterfaceModalProps> & {
  Content: React.ForwardRefExoticComponent<ContentProps & IModalContentProps>;
  CloseButton: React.ForwardRefExoticComponent<CloseButtonProps>;
  Header: React.ForwardRefExoticComponent<HeaderProps>;
  Footer: React.ForwardRefExoticComponent<FooterProps>;
  Body: React.ForwardRefExoticComponent<BodyProps>;
  Backdrop: React.ForwardRefExoticComponent<BackdropProps>;
};
