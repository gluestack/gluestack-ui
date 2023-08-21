export interface ISelectProps {
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  isHovered?: boolean;
  isFocused?: boolean;
  isFocusVisible?: boolean;
  closeOnOverlayClick?: boolean;
  selectedValue?: string;
  selectedLabel?: string;
  defaultValue?: string;
  onValueChange?: (arg: string) => void;
  onClose?: () => void;
  onOpen?: () => void;
  placeholder?: string;
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
  SelectItemTextProps,
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
  ItemText: (props: SelectItemTextProps) => JSX.Element;
  ScrollView: (props: SelectScrollViewProps) => JSX.Element;
  VirtualizedList: (props: SelectVirtualizedListProps) => JSX.Element;
  FlatList: (props: SelectFlatListProps) => JSX.Element;
  SectionList: (props: SelectSectionListProps) => JSX.Element;
  SectionHeaderText: (props: SelectSectionHeaderTextProps) => JSX.Element;
};
