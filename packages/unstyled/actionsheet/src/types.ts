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
  React.RefAttributes<ActionsheetProps> &
    React.PropsWithoutRef<ActionsheetProps & IActionsheetProps>
> & {
  Content: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<ContentProps & InterfaceActionsheetContentProps> &
      React.RefAttributes<ContentProps>
  >;
  Item: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<ItemProps & InterfaceActionsheetItemProps> &
      React.RefAttributes<ItemProps>
  >;
  ItemText: React.ForwardRefExoticComponent<
    React.RefAttributes<ItemTextProps> & React.PropsWithoutRef<ItemTextProps>
  >;
  DragIndicator: React.ForwardRefExoticComponent<
    React.RefAttributes<DragIndicatorProps> &
      React.PropsWithoutRef<DragIndicatorProps>
  >;
  Backdrop: React.ForwardRefExoticComponent<
    React.RefAttributes<BackdropProps> & React.PropsWithoutRef<BackdropProps>
  >;
  DragIndicatorWrapper: React.ForwardRefExoticComponent<
    React.RefAttributes<IndicatorWrapperProps> &
      React.PropsWithoutRef<IndicatorWrapperProps>
  >;
  ScrollView: React.ForwardRefExoticComponent<
    React.RefAttributes<ScrollViewProps> &
      React.PropsWithoutRef<ScrollViewProps>
  >;
  VirtualizedList: React.ForwardRefExoticComponent<
    React.RefAttributes<VirtualizedListProps> &
      React.PropsWithoutRef<VirtualizedListProps>
  >;
  FlatList: React.ForwardRefExoticComponent<
    React.RefAttributes<FlatListProps> & React.PropsWithoutRef<FlatListProps>
  >;
  SectionList: React.ForwardRefExoticComponent<
    React.RefAttributes<SectionListProps> &
      React.PropsWithoutRef<SectionListProps>
  >;
  SectionHeaderText: React.ForwardRefExoticComponent<
    React.RefAttributes<SectionHeaderTextProps> &
      React.PropsWithoutRef<SectionHeaderTextProps>
  >;
  Icon: React.ForwardRefExoticComponent<
    React.RefAttributes<IconProps> & React.PropsWithoutRef<IconProps>
  >;
};

export type IActionsheetProps = InterfaceActionsheetProps;
export type IActionsheetContentProps = InterfaceActionsheetContentProps;
