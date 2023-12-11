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
  React.ForwardRefExoticComponent<Root & InterfaceCheckbox> & {
    Indicator: React.ForwardRefExoticComponent<Indicator>;
    Icon: React.ForwardRefExoticComponent<Icon>;
    Label: React.ForwardRefExoticComponent<Label>;
    Group: React.ForwardRefExoticComponent<Group & ICheckboxGroup>;
  };

export type ICheckboxProps = InterfaceCheckbox;
