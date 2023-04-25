export interface ISelectProps {
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  isHovered?: boolean;
  isFocused?: boolean;
  isFocusVisible?: boolean;
  closeOnOverlayClick?: boolean;
  selectedValue?: string;
  defaultValue?: string;
  onValueChange?: () => any;
  onClose?: () => any;
  onOpen?: () => any;
}

export interface ISelectItemProps {
  label: string;
  value: string;
  isDisabled?: boolean;
}

export type ISelectComponentType<
  SelectProps,
  SelectTriggerProps,
  SelectInputProps,
  SelectIconProps,
  SelectPortalProps,
  SelectBackdropProps,
  SelectContentProps,
  SelectDragIndicatorProps,
  SelectDragIndicatorWrapperProps,
  SelectItemProps,
  SelectScrollViewProps,
  SelectVirtualizedListProps,
  SelectFlatListProps,
  SelectSectionListProps,
  SelectSectionHeaderTextProps
> = ((props: SelectProps & ISelectProps) => JSX.Element) & {
  Trigger: (props: SelectTriggerProps) => JSX.Element;
  Input: (props: SelectInputProps) => JSX.Element;
  Icon: (props: SelectIconProps) => JSX.Element;
  Portal: (props: SelectPortalProps) => JSX.Element;
  Backdrop: (props: SelectBackdropProps) => JSX.Element;
  Content: (props: SelectContentProps) => JSX.Element;
  DragIndicator: (props: SelectDragIndicatorProps) => JSX.Element;
  DragIndicatorWrapper: (props: SelectDragIndicatorWrapperProps) => JSX.Element;
  Item: (props: ISelectItemProps & SelectItemProps) => JSX.Element;
  ScrollView: (props: SelectScrollViewProps) => JSX.Element;
  VirtualizedList: (props: SelectVirtualizedListProps) => JSX.Element;
  FlatList: (props: SelectFlatListProps) => JSX.Element;
  SectionList: (props: SelectSectionListProps) => JSX.Element;
  SectionHeaderText: (props: SelectSectionHeaderTextProps) => JSX.Element;
};
