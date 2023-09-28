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
  unmountOnExit?: boolean;
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
  (props: StyledAlertDialog & IAlertDialogProps) => JSX.Element
> & {
  Content: React.ForwardRefExoticComponent<
    (props: StyledAlertDialogContent) => JSX.Element
  >;
  CloseButton: React.ForwardRefExoticComponent<
    (props: StyledAlertDialogCloseButton) => JSX.Element
  >;
  Header: React.ForwardRefExoticComponent<
    (props: StyledAlertDialogHeader) => JSX.Element
  >;
  Footer: React.ForwardRefExoticComponent<
    (props: StyledAlertDialogFooter) => JSX.Element
  >;
  Body: React.ForwardRefExoticComponent<
    (props: StyledAlertDialogBody) => JSX.Element
  >;
  Backdrop: React.ForwardRefExoticComponent<
    (props: StyledAlertDialogBackdrop) => JSX.Element
  >;
};

export type IAlertDialogProps = InterfaceAlertDialogProps;
