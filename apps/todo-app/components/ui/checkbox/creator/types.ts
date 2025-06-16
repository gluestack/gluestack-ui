import type { ViewProps } from 'react-native';
export interface InterfaceCheckbox extends ViewProps {
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
  isFocusVisible?: boolean;
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
    React.RefAttributes<Root> & React.PropsWithoutRef<Root> & InterfaceCheckbox
  > & {
    Indicator: React.ForwardRefExoticComponent<
      React.RefAttributes<Indicator> & React.PropsWithoutRef<Indicator>
    >;
    Icon: React.ForwardRefExoticComponent<
      React.RefAttributes<Icon> &
        React.PropsWithoutRef<Icon> & { forceMount?: boolean }
    >;
    Label: React.ForwardRefExoticComponent<
      React.RefAttributes<Label> & React.PropsWithoutRef<Label>
    >;
    Group: React.ForwardRefExoticComponent<
      React.RefAttributes<Group> & React.PropsWithoutRef<Group> & ICheckboxGroup
    >;
  };

export type ICheckboxProps = InterfaceCheckbox;
