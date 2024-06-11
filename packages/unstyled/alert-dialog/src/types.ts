export interface InterfaceAlertDialogProps {
  /**
   * If true, the AlertDialog will open. Useful for controllable state behaviour
   */
  isOpen?: boolean;
  /**
   * Callback invoked when the AlertDialog is closed
   */
  onClose?: () => any;
  /**
   * If true, the AlertDialog will be opened by default
   */
  defaultIsOpen?: boolean;
  /**
   * The ref of element that is least destructive child of the AlertDialog.
   */
  leastDestructiveRef?: React.RefObject<any>;
  /**
   * The ref of element to receive focus when the AlertDialog opens.
   */
  initialFocusRef?: React.RefObject<any> | any;
  /**
   * The ref of element to receive focus when the AlertDialog closes.
   */
  finalFocusRef?: React.RefObject<any> | any;
  /**
   * If true and the keyboard is opened, the AlertDialog will move up equivalent to the keyboard height.
   * @default false
   */
  avoidKeyboard?: boolean;
  /**
   * If true, the AlertDialog will close when the overlay is clicked
   * @default true
   */
  closeOnOverlayClick?: boolean;
  /**
   * If true, the AlertDialog will close when Escape key is pressed
   * @default true
   */
  isKeyboardDismissable?: boolean;
  /**
   * Sets the animation type
   * @default "fade"
   */
  animationPreset?: 'slide' | 'fade';
  /* If true, renders react-native native modal
   * @default false
   */
  useRNModal?: boolean;
  children?: any;
}

export interface IAlertDialogContentProps {
  /**
   * If true, AlertDialog Content focusScope will be applied.
   * @default true
   */
  focusScope?: boolean;
}

export type IAlertDialogComponentType<
  StyledAlertDialog,
  StyledAlertDialogContent,
  StyledAlertDialogCloseButton,
  StyledAlertDialogHeader,
  StyledAlertDialogFooter,
  StyledAlertDialogBody,
  StyledAlertDialogBackdrop
> = React.ForwardRefExoticComponent<
  React.RefAttributes<StyledAlertDialog> & StyledAlertDialog & IAlertDialogProps
> & {
  Content: React.ForwardRefExoticComponent<
    React.RefAttributes<StyledAlertDialogContent> &
      IAlertDialogContentProps &
      StyledAlertDialogContent
  >;
  CloseButton: React.ForwardRefExoticComponent<
    React.RefAttributes<StyledAlertDialogCloseButton> &
      StyledAlertDialogCloseButton
  >;
  Header: React.ForwardRefExoticComponent<
    React.RefAttributes<StyledAlertDialogHeader> & StyledAlertDialogHeader
  >;
  Footer: React.ForwardRefExoticComponent<
    React.RefAttributes<StyledAlertDialogFooter> & StyledAlertDialogFooter
  >;
  Body: React.ForwardRefExoticComponent<
    React.RefAttributes<StyledAlertDialogBody> & StyledAlertDialogBody
  >;
  Backdrop: React.ForwardRefExoticComponent<
    React.RefAttributes<StyledAlertDialogBackdrop> & StyledAlertDialogBackdrop
  >;
};

export type IAlertDialogProps = InterfaceAlertDialogProps;
