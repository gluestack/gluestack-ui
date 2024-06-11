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
  children?: any;
  /**
   * If true, Actionsheet Content focusScope will be applied.
   * @default true
   */
  focusScope?: boolean;
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
  ActionsheetProps & React.RefAttributes<ActionsheetProps> & IActionsheetProps
> & {
  Content: React.ForwardRefExoticComponent<
    ContentProps &
      React.RefAttributes<ContentProps> &
      InterfaceActionsheetContentProps
  >;
  Item: React.ForwardRefExoticComponent<
    ItemProps & InterfaceActionsheetItemProps & React.RefAttributes<ItemProps>
  >;
  ItemText: React.ForwardRefExoticComponent<
    React.RefAttributes<ItemTextProps> & ItemTextProps
  >;
  DragIndicator: React.ForwardRefExoticComponent<
    React.RefAttributes<DragIndicatorProps> & DragIndicatorProps
  >;
  Backdrop: React.ForwardRefExoticComponent<
    React.RefAttributes<BackdropProps> & BackdropProps
  >;
  DragIndicatorWrapper: React.ForwardRefExoticComponent<
    React.RefAttributes<IndicatorWrapperProps> & IndicatorWrapperProps
  >;
  ScrollView: React.ForwardRefExoticComponent<
    React.RefAttributes<ScrollViewProps> & ScrollViewProps
  >;
  VirtualizedList: React.ForwardRefExoticComponent<
    React.RefAttributes<VirtualizedListProps> & VirtualizedListProps
  >;
  FlatList: React.ForwardRefExoticComponent<
    React.RefAttributes<FlatListProps> & FlatListProps
  >;
  SectionList: React.ForwardRefExoticComponent<
    React.RefAttributes<SectionListProps> & SectionListProps
  >;
  SectionHeaderText: React.ForwardRefExoticComponent<
    React.RefAttributes<SectionHeaderTextProps> & SectionHeaderTextProps
  >;
  Icon: React.ForwardRefExoticComponent<
    React.RefAttributes<IconProps> & IconProps
  >;
};

export type IActionsheetProps = InterfaceActionsheetProps;
export type IActionsheetContentProps = InterfaceActionsheetContentProps;
