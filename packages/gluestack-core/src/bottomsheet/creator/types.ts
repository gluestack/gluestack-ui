import type { PressableProps } from 'react-native';

export interface InterfaceBottomSheetProps {
  /**
   * If true, the BottomSheet will open. Useful for controllable state behavior.
   */
  isOpen?: boolean;
  /**
   * A callback function that is called when the BottomSheet is closed.
   */
  onClose?: () => any;
  /**
   * A callback function that is called when the BottomSheet is opened.
   */
  onOpen?: () => any;
  /**
   * If true, BottomSheet will be opened by default.
   */
  defaultIsOpen?: boolean;
  /**
   * If true, the BottomSheet will close when the overlay is clicked.
   * @default true
   */
  closeOnOverlayClick?: boolean;
  /**
   * Array of snap points for the bottom sheet. Values are percentages (0-100).
   * @example [25, 50, 90]
   */
  snapPoints?: Array<number>;
  /**
   * The index of the snap point to initially snap to.
   * @default 0
   */
  snapToIndex?: number;
  /**
   * The ref of element to receive focus when the BottomSheet opens.
   */
  initialFocusRef?: React.RefObject<any>;
  /**
   * The ref of element to receive focus when the BottomSheet closes.
   */
  finalFocusRef?: React.RefObject<any>;
  /**
   * If true, focus will be trapped within the BottomSheet.
   * @default true
   */
  trapFocus?: boolean;
  /**
   * If true, keyboard can dismiss the BottomSheet.
   * @default true
   */
  isKeyboardDismissable?: boolean;
  /**
   * If true, renders react-native native modal.
   * @default false
   */
  useRNModal?: boolean;
  /**
   * If true, prevent scroll when BottomSheet is open.
   * @default true
   */
  preventScroll?: boolean;
  children?: any;
}

export interface InterfaceBottomSheetItemProps extends PressableProps {
  isDisabled?: boolean;
  isHovered?: boolean;
  isPressed?: boolean;
  isFocused?: boolean;
  isFocusVisible?: boolean;
  /**
   * If true, the BottomSheet will close when the item is pressed.
   * @default true
   */
  closeOnPress?: boolean;
}

export interface InterfaceBottomSheetContentProps {
  children?: any;
  /**
   * If true, BottomSheet Content focusScope will be applied.
   * @default true
   */
  focusScope?: boolean;
}

export type IBottomSheetComponentType<
  BottomSheetProps,
  BackdropProps,
  ItemProps,
  ItemTextProps,
  DragIndicatorProps,
  IndicatorWrapperProps,
  ContentProps,
  ScrollViewProps,
  FlatListProps,
  SectionListProps,
  TextInputProps,
> = React.ForwardRefExoticComponent<
  React.RefAttributes<BottomSheetProps> &
    React.PropsWithoutRef<BottomSheetProps & IBottomSheetProps>
> & {
  Content: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<ContentProps & InterfaceBottomSheetContentProps> &
      React.RefAttributes<ContentProps>
  >;
  Item: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<ItemProps & InterfaceBottomSheetItemProps> &
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
  FlatList: React.ForwardRefExoticComponent<
    React.RefAttributes<FlatListProps> & React.PropsWithoutRef<FlatListProps>
  >;
  SectionList: React.ForwardRefExoticComponent<
    React.RefAttributes<SectionListProps> &
      React.PropsWithoutRef<SectionListProps>
  >;
  TextInput: React.ForwardRefExoticComponent<
    React.RefAttributes<TextInputProps> &
      React.PropsWithoutRef<TextInputProps>
  >;
};

export type IBottomSheetProps = InterfaceBottomSheetProps;
export type IBottomSheetContentProps = InterfaceBottomSheetContentProps;
export type IBottomSheetItemProps = InterfaceBottomSheetItemProps;
