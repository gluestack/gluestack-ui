import type { PressableProps } from 'react-native';

export interface InterfaceActionsheetProps {
  /**
   * If true, the ActionSheet will open. Useful for controllable state behavior.
   */
  isOpen?: boolean;
  /**
   * Callback invoked when the modal is closed.
   */
  onClose?: () => any;
  /**
   * If true, disables the overlay.
   * @default false
   */
  disableOverlay?: boolean;
  /* If true, renders react-native native modal
   * @default false
   */
  useRNModal?: boolean;
  defaultIsOpen?: boolean;
  avoidKeyboard?: boolean;
  closeOnOverlayClick?: boolean;
  isKeyboardDismissable?: boolean;
  animationPreset?: 'slide' | 'fade';
  contentSize?: any;
  children?: any;
}

export interface InterfaceActionsheetItemProps extends PressableProps {
  isDisabled?: boolean;
  isHovered?: boolean;
  isPressed?: boolean;
  isFocused?: boolean;
  isFocusVisible?: boolean;
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
> = ((props: ActionsheetProps & IActionsheetProps) => JSX.Element) & {
  Content: (props: ContentProps) => JSX.Element;
  Item: (props: ItemProps & InterfaceActionsheetItemProps) => JSX.Element;
  ItemText: (props: ItemTextProps) => JSX.Element;
  DragIndicator: (props: DragIndicatorProps) => JSX.Element;
  Backdrop: (props: BackdropProps) => JSX.Element;
  DragIndicatorWrapper: (props: IndicatorWrapperProps) => JSX.Element;
  ScrollView: (props: ScrollViewProps) => JSX.Element;
  VirtualizedList: (props: VirtualizedListProps) => JSX.Element;
  FlatList: (props: FlatListProps) => JSX.Element;
  SectionList: (props: SectionListProps) => JSX.Element;
  SectionHeaderText: (props: SectionHeaderTextProps) => JSX.Element;
  Icon: (props: IconProps) => JSX.Element;
};

export type IActionsheetProps = InterfaceActionsheetProps;
