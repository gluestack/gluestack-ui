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
  React.PropsWithoutRef<SelectProps> &
    ISelectProps &
    React.RefAttributes<SelectProps>
> & {
  Trigger: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<SelectTriggerProps> &
      React.RefAttributes<SelectTriggerProps>
  >;
  Input: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<SelectInputProps> &
      React.RefAttributes<SelectInputProps>
  >;
  Icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<SelectIconProps> &
      React.RefAttributes<SelectIconProps>
  >;
  Portal: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<SelectPortalProps> &
      React.RefAttributes<SelectPortalProps>
  >;
  Backdrop: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<SelectBackdropProps> &
      React.RefAttributes<SelectBackdropProps>
  >;
  Content: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<SelectContentProps> &
      React.RefAttributes<SelectContentProps>
  >;
  DragIndicator: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<SelectDragIndicatorProps> &
      React.RefAttributes<SelectDragIndicatorProps>
  >;
  DragIndicatorWrapper: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<SelectDragIndicatorWrapperProps> &
      React.RefAttributes<SelectDragIndicatorWrapperProps>
  >;
  Item: React.ForwardRefExoticComponent<
    ISelectItemProps &
      React.PropsWithoutRef<SelectItemProps> &
      React.RefAttributes<SelectItemProps> & {
        textStyle?: {
          [K in keyof SelectItemTextProps]?: SelectItemTextProps[K];
        };
      }
  >;
  ScrollView: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<SelectScrollViewProps> &
      React.RefAttributes<SelectScrollViewProps>
  >;
  VirtualizedList: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<SelectVirtualizedListProps> &
      React.RefAttributes<SelectVirtualizedListProps>
  >;
  FlatList: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<SelectFlatListProps> &
      React.RefAttributes<SelectFlatListProps>
  >;
  SectionList: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<SelectSectionListProps> &
      React.RefAttributes<SelectSectionListProps>
  >;
  SectionHeaderText: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<SelectSectionHeaderTextProps> &
      React.RefAttributes<SelectSectionHeaderTextProps>
  >;
};
