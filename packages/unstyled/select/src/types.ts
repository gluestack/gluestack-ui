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
> = React.ForwardRefExoticComponent<SelectProps & ISelectProps> & {
  Trigger: React.ForwardRefExoticComponent<SelectTriggerProps>;
  Input: React.ForwardRefExoticComponent<SelectInputProps>;
  Icon: React.ForwardRefExoticComponent<SelectIconProps>;
  Portal: React.ForwardRefExoticComponent<SelectPortalProps>;
  Backdrop: React.ForwardRefExoticComponent<SelectBackdropProps>;
  Content: React.ForwardRefExoticComponent<SelectContentProps>;
  DragIndicator: React.ForwardRefExoticComponent<SelectDragIndicatorProps>;
  DragIndicatorWrapper: React.ForwardRefExoticComponent<SelectDragIndicatorWrapperProps>;
  Item: React.ForwardRefExoticComponent<ISelectItemProps & SelectItemProps>;
  ItemText: React.ForwardRefExoticComponent<SelectItemTextProps>;
  ScrollView: React.ForwardRefExoticComponent<SelectScrollViewProps>;
  VirtualizedList: React.ForwardRefExoticComponent<SelectVirtualizedListProps>;
  FlatList: React.ForwardRefExoticComponent<SelectFlatListProps>;
  SectionList: React.ForwardRefExoticComponent<SelectSectionListProps>;
  SectionHeaderText: React.ForwardRefExoticComponent<SelectSectionHeaderTextProps>;
};
