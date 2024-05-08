export interface ISelectProps {
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  isHovered?: boolean;
  isFocused?: boolean;
  isFocusVisible?: boolean;
  closeOnOverlayClick?: boolean;
  selectedValue?: string | null;
  /**
   * @deprecated Use `initialLabel` instead.
   */
  selectedLabel?: string;
  defaultValue?: string;
  initialLabel?: string;
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
> = React.ForwardRefExoticComponent<
  SelectProps & ISelectProps & React.RefAttributes<SelectProps>
> & {
  Trigger: React.ForwardRefExoticComponent<
    SelectTriggerProps & React.RefAttributes<SelectTriggerProps>
  >;
  Input: React.ForwardRefExoticComponent<
    SelectInputProps & React.RefAttributes<SelectInputProps>
  >;
  Icon: React.ForwardRefExoticComponent<
    SelectIconProps & React.RefAttributes<SelectIconProps>
  >;
  Portal: React.ForwardRefExoticComponent<
    SelectPortalProps & React.RefAttributes<SelectPortalProps>
  >;
  Backdrop: React.ForwardRefExoticComponent<
    SelectBackdropProps & React.RefAttributes<SelectBackdropProps>
  >;
  Content: React.ForwardRefExoticComponent<
    SelectContentProps & React.RefAttributes<SelectContentProps>
  >;
  DragIndicator: React.ForwardRefExoticComponent<
    SelectDragIndicatorProps & React.RefAttributes<SelectDragIndicatorProps>
  >;
  DragIndicatorWrapper: React.ForwardRefExoticComponent<
    SelectDragIndicatorWrapperProps &
      React.RefAttributes<SelectDragIndicatorWrapperProps>
  >;
  Item: React.ForwardRefExoticComponent<
    ISelectItemProps & SelectItemProps & React.RefAttributes<SelectItemProps>
  >;
  ItemText: React.ForwardRefExoticComponent<
    SelectItemTextProps & React.RefAttributes<SelectItemTextProps>
  >;
  ScrollView: React.ForwardRefExoticComponent<
    SelectScrollViewProps & React.RefAttributes<SelectScrollViewProps>
  >;
  VirtualizedList: React.ForwardRefExoticComponent<
    SelectVirtualizedListProps & React.RefAttributes<SelectVirtualizedListProps>
  >;
  FlatList: React.ForwardRefExoticComponent<
    SelectFlatListProps & React.RefAttributes<SelectFlatListProps>
  >;
  SectionList: React.ForwardRefExoticComponent<
    SelectSectionListProps & React.RefAttributes<SelectSectionListProps>
  >;
  SectionHeaderText: React.ForwardRefExoticComponent<
    SelectSectionHeaderTextProps &
      React.RefAttributes<SelectSectionHeaderTextProps>
  >;
};
