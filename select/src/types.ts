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
> = React.ForwardRefExoticComponent<
  (props: SelectProps & ISelectProps) => JSX.Element
> & {
  Trigger: React.ForwardRefExoticComponent<
    (props: SelectTriggerProps) => JSX.Element
  >;
  Input: React.ForwardRefExoticComponent<
    (props: SelectInputProps) => JSX.Element
  >;
  Icon: React.ForwardRefExoticComponent<
    (props: SelectIconProps) => JSX.Element
  >;
  Portal: React.ForwardRefExoticComponent<
    (props: SelectPortalProps) => JSX.Element
  >;
  Backdrop: React.ForwardRefExoticComponent<
    (props: SelectBackdropProps) => JSX.Element
  >;
  Content: React.ForwardRefExoticComponent<
    (props: SelectContentProps) => JSX.Element
  >;
  DragIndicator: React.ForwardRefExoticComponent<
    (props: SelectDragIndicatorProps) => JSX.Element
  >;
  DragIndicatorWrapper: React.ForwardRefExoticComponent<
    (props: SelectDragIndicatorWrapperProps) => JSX.Element
  >;
  Item: React.ForwardRefExoticComponent<
    (props: ISelectItemProps & SelectItemProps) => JSX.Element
  >;
  ItemText: React.ForwardRefExoticComponent<
    (props: SelectItemTextProps) => JSX.Element
  >;
  ScrollView: React.ForwardRefExoticComponent<
    (props: SelectScrollViewProps) => JSX.Element
  >;
  VirtualizedList: React.ForwardRefExoticComponent<
    (props: SelectVirtualizedListProps) => JSX.Element
  >;
  FlatList: React.ForwardRefExoticComponent<
    (props: SelectFlatListProps) => JSX.Element
  >;
  SectionList: React.ForwardRefExoticComponent<
    (props: SelectSectionListProps) => JSX.Element
  >;
  SectionHeaderText: React.ForwardRefExoticComponent<
    (props: SelectSectionHeaderTextProps) => JSX.Element
  >;
};
