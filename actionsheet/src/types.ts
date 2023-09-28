import type { PressableProps } from 'react-native';

export interface InterfaceActionsheetProps {
  /**
   * If true, the ActionSheet will open. Useful for controllable state behavior.
   */
  isOpen?: boolean;
  /**
   * A callback function that is called when the Actionsheet is closed.
   */
  onClose?: () => any;
  /**
   * A callback function that is called when the Actionsheet is opened.
   */
  onOpen?: () => any;
  /* If true, renders react-native native modal
   * @default false
   */
  useRNModal?: boolean;
  /**
   * The ref of element to receive focus when the Actionsheet opens.
   */
  initialFocusRef?: React.RefObject<any>;
  /**
   * The ref of element to receive focus when the Actionsheet closes.
   */
  finalFocusRef?: React.RefObject<any>;
  defaultIsOpen?: boolean;
  trapFocus?: boolean;
  closeOnOverlayClick?: boolean;
  isKeyboardDismissable?: boolean;
  children?: any;
  animationPreset?: 'fade' | 'slide' | 'none';
  unmountOnExit?: boolean;
  snapPoints?: Array<number>;
}

export interface InterfaceActionsheetItemProps extends PressableProps {
  isDisabled?: boolean;
  isHovered?: boolean;
  isPressed?: boolean;
  isFocused?: boolean;
  isFocusVisible?: boolean;
}

export interface InterfaceActionsheetContentProps {
  focusable?: boolean;
  children?: any;
}

export type IActionsheetComponentType<
  ActionsheetProps,
  BackdropProps,
  ItemProps,
  ItemTextProps,
  DragIndicatorProps,
  IndicatorWrapperProps,
  ContentProps,
  ScrollViewProps,
  VirtualizedListProps,
  FlatListProps,
  SectionListProps,
  SectionHeaderTextProps,
  IconProps
> = React.ForwardRefExoticComponent<
  (props: ActionsheetProps & IActionsheetProps) => JSX.Element
> & {
  Content: React.ForwardRefExoticComponent<
    (props: ContentProps & InterfaceActionsheetContentProps) => JSX.Element
  >;
  Item: React.ForwardRefExoticComponent<
    (props: ItemProps & InterfaceActionsheetItemProps) => JSX.Element
  >;
  ItemText: React.ForwardRefExoticComponent<
    (props: ItemTextProps) => JSX.Element
  >;
  DragIndicator: React.ForwardRefExoticComponent<
    (props: DragIndicatorProps) => JSX.Element
  >;
  Backdrop: React.ForwardRefExoticComponent<
    (props: BackdropProps) => JSX.Element
  >;
  DragIndicatorWrapper: React.ForwardRefExoticComponent<
    (props: IndicatorWrapperProps) => JSX.Element
  >;
  ScrollView: React.ForwardRefExoticComponent<
    (props: ScrollViewProps) => JSX.Element
  >;
  VirtualizedList: React.ForwardRefExoticComponent<
    (props: VirtualizedListProps) => JSX.Element
  >;
  FlatList: React.ForwardRefExoticComponent<
    (props: FlatListProps) => JSX.Element
  >;
  SectionList: React.ForwardRefExoticComponent<
    (props: SectionListProps) => JSX.Element
  >;
  SectionHeaderText: React.ForwardRefExoticComponent<
    (props: SectionHeaderTextProps) => JSX.Element
  >;
  Icon: React.ForwardRefExoticComponent<(props: IconProps) => JSX.Element>;
};

export type IActionsheetProps = InterfaceActionsheetProps;
export type IActionsheetContentProps = InterfaceActionsheetContentProps;
