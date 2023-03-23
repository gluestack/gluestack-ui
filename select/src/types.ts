export interface ISelectProps {}

export interface ISelectItemProps {
  label: string;
  value: string;
  isDisabled?: boolean;
}

export type ISelectComponentType<
  SelectProps,
  SelectTriggerProps,
  SelectPortalProps,
  SelectBackdropProps,
  SelectContentProps,
  SelectDragIndicatorProps,
  SelectDragIndicatorWrapperProps,
  SelectItemProps
> = ((props: SelectProps & ISelectProps) => JSX.Element) & {
  Trigger: (props: SelectTriggerProps) => JSX.Element;
  Portal: (props: SelectPortalProps) => JSX.Element;
  Backdrop: (props: SelectBackdropProps) => JSX.Element;
  Content: (props: SelectContentProps) => JSX.Element;
  DragIndicator: (props: SelectDragIndicatorProps) => JSX.Element;
  DragIndicatorWrapper: (props: SelectDragIndicatorWrapperProps) => JSX.Element;
  Item: (props: ISelectItemProps & SelectItemProps) => JSX.Element;
};
