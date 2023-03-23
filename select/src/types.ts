export interface ISelectProps {}

export interface ISelectContext {
  setSelectedValue?: any;
  onValueChange?: React.Dispatch<any>;
  selectedValue?: any;
}

export interface ISelectItemProps {
  label: string;
  value: string;
  isDisabled?: boolean;
}

export type ISelectComponentType<
  SelectProps,
  SelectItemProps,
  SelectItemListProps,
  SelectIconProps,
  SelectTriggerProps
> = ((props: SelectProps & ISelectProps) => JSX.Element) & {
  Item: (props: ISelectItemProps & SelectItemProps) => JSX.Element;
  Icon: (props: SelectIconProps) => JSX.Element;
  ItemList: (props: SelectItemListProps) => JSX.Element;
  Trigger: (props: SelectTriggerProps) => JSX.Element;
};
