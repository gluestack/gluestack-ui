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

// export type ISelectComponentType = ((
//   props: ISelectProps & { ref?: MutableRefObject<any> }
// ) => JSX.Element) & {
//   Item: React.MemoExoticComponent<
//     (props: ISelectItemProps & { ref?: MutableRefObject<any> }) => JSX.Element
//   >;
// };
export type ISelectComponentType<
  SelectProps,
  SelectItemProps,
  SelectItemListProps,
  SelectIconProps
> = ((props: SelectProps & ISelectProps) => JSX.Element) & {
  Item: (props: ISelectItemProps & SelectItemProps) => JSX.Element;
  Icon: (props: SelectIconProps) => JSX.Element;
  ItemList: (props: SelectItemListProps) => JSX.Element;
};
