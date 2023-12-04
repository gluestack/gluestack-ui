export interface InterfacePopoverProps {
  /**
   * If true, the popover will be opened by default.
   */
  defaultIsOpen?: boolean;
  /**
   * Whether the popover is opened. Useful for controlling the open state.
   */
  isOpen?: boolean;
  /**
   * Whether popover should trap focus.
   * @default true
   */
  trapFocus?: boolean;
  /**
   * Whether the element should flip its orientation (e.g. top to bottom or left to right) when there is insufficient room for it to render completely.
   * @default true
   */
  shouldFlip?: boolean;
  /**
   * The ref of element to receive focus when the popover opens.
   */
  initialFocusRef?: React.RefObject<any>;
  /**
   * The ref of element to receive focus when the modal closes.
   */
  finalFocusRef?: React.RefObject<any>;
  /**
   * Function that returns a React Element. This element will be used as a Trigger for the popover.
   */
  trigger: (_props: any, state: { open: boolean }) => JSX.Element;
  /**
   * The additional offset applied along the cross axis between the element and its trigger element.
   */
  crossOffset?: number;
  /**
   * The additional offset applied along the main axis between the element and its trigger element.
   */
  offset?: number;
  /**
   * Determines whether menu content should overlap with the trigger.
   * @default false
   */
  shouldOverlapWithTrigger?: boolean;
  /**
   * Popover children.
   */
  children: React.ReactNode;
  /**
   * If true, the modal will close when Escape key is pressed.
   * @default true
   */
  isKeyboardDismissable?: boolean;
  /**
   * Popover placement
   * @default bottom
   */
  placement?:
    | 'top'
    | 'top left'
    | 'top right'
    | 'bottom'
    | 'bottom left'
    | 'bottom right'
    | 'right'
    | 'right top'
    | 'right bottom'
    | 'left'
    | 'left top'
    | 'left bottom';
  /**
   * This function will be invoked when popover is closed. It'll also be called when user attempts to close the popover via Escape key or backdrop press.
   */
  onClose?: () => void;
  /**
   * This function will be invoked when popover is opened.
   */
  onOpen?: () => void;

  /* If true, renders react-native native modal
   * @default false
   */
  useRNModal?: boolean;

  /* If true, it will not allow to interact with anything outside the popover
   * @default true
   */
  focusScope?: boolean;
}

export type IPopoverComponentType<
  PopoverProps,
  ArrowProps,
  ContentProps,
  HeaderProps,
  FooterProps,
  BodyProps,
  BackdropProps,
  CloseButtonProps
> = React.ForwardRefExoticComponent<IPopoverProps & PopoverProps> & {
  Body: React.ForwardRefExoticComponent<BodyProps>;
  CloseButton: React.ForwardRefExoticComponent<CloseButtonProps>;
  Content: React.ForwardRefExoticComponent<ContentProps>;
  Footer: React.ForwardRefExoticComponent<FooterProps>;
  Header: React.ForwardRefExoticComponent<HeaderProps>;
  Arrow: React.ForwardRefExoticComponent<ArrowProps>;
  Backdrop: React.ForwardRefExoticComponent<BackdropProps>;
};

export type IPopoverProps = InterfacePopoverProps;
