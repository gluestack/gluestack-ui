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
  /**
   * If true, Modal Content focusScope will be applied.
   * @default true
   */
  focusScope?: boolean;
}

export type IModalComponentType<
  ModalProps,
  ContentProps,
  CloseButtonProps,
  HeaderProps,
  FooterProps,
  BodyProps,
  BackdropProps
> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ModalProps> &
    InterfaceModalProps &
    React.RefAttributes<ModalProps>
> & {
  Content: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<ContentProps> &
      IModalContentProps &
      React.RefAttributes<ContentProps>
  >;
  CloseButton: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<CloseButtonProps> &
      React.RefAttributes<CloseButtonProps>
  >;
  Header: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<HeaderProps> & React.RefAttributes<HeaderProps>
  >;
  Footer: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<FooterProps> & React.RefAttributes<FooterProps>
  >;
  Body: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<BodyProps> & React.RefAttributes<BodyProps>
  >;
  Backdrop: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<BackdropProps> & React.RefAttributes<BackdropProps>
  >;
};
