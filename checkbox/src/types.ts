import type { ViewProps } from 'react-native';
interface InterfaceCheckbox extends ViewProps {
  value: string;
  onChange?: (isSelected: boolean) => void;
  children?: React.ReactNode;
  defaultIsChecked?: boolean;
  isChecked?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isHovered?: boolean;
  isRequired?: boolean;
  isIndeterminate?: boolean;
}

export interface ICheckboxGroup {
  value: Array<string>;
  onChange?: (isSelected: any) => void;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
}

export type ICheckboxComponentType<Root, Indicator, Icon, Label, Group> =
  React.ForwardRefExoticComponent<
    (props: Root & InterfaceCheckbox) => JSX.Element
  > & {
    Indicator: React.ForwardRefExoticComponent<
      (props: Indicator) => JSX.Element
    >;
    Icon: React.ForwardRefExoticComponent<(props: Icon) => JSX.Element>;
    Label: React.ForwardRefExoticComponent<(props: Label) => JSX.Element>;
    Group: React.ForwardRefExoticComponent<
      (props: Group & ICheckboxGroup) => JSX.Element
    >;
  };

export type ICheckboxProps = InterfaceCheckbox;
