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
> = React.ForwardRefExoticComponent<ActionsheetProps & IActionsheetProps> & {
  Content: React.ForwardRefExoticComponent<
    ContentProps & InterfaceActionsheetContentProps
  >;
  Item: React.ForwardRefExoticComponent<
    ItemProps & InterfaceActionsheetItemProps
  >;
  ItemText: React.ForwardRefExoticComponent<ItemTextProps>;
  DragIndicator: React.ForwardRefExoticComponent<DragIndicatorProps>;
  Backdrop: React.ForwardRefExoticComponent<BackdropProps>;
  DragIndicatorWrapper: React.ForwardRefExoticComponent<IndicatorWrapperProps>;
  ScrollView: React.ForwardRefExoticComponent<ScrollViewProps>;
  VirtualizedList: React.ForwardRefExoticComponent<VirtualizedListProps>;
  FlatList: React.ForwardRefExoticComponent<FlatListProps>;
  SectionList: React.ForwardRefExoticComponent<SectionListProps>;
  SectionHeaderText: React.ForwardRefExoticComponent<SectionHeaderTextProps>;
  Icon: React.ForwardRefExoticComponent<IconProps>;
};

export type IActionsheetProps = InterfaceActionsheetProps;
export type IActionsheetContentProps = InterfaceActionsheetContentProps;
