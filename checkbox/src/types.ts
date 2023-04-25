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

interface CheckboxGroup {
  value: Array<string>;
  onChange?: (isSelected: any) => void;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
}

export type ICheckboxComponentType<Root, Indicator, Icon, Label, Group> = ((
  props: Root & InterfaceCheckbox
) => JSX.Element) & {
  Indicator: React.MemoExoticComponent<(props: Indicator) => JSX.Element>;
  Icon: React.MemoExoticComponent<(props: Icon) => JSX.Element>;
  Label: React.MemoExoticComponent<(props: Label) => JSX.Element>;
  Group: React.MemoExoticComponent<
    (props: Group & CheckboxGroup) => JSX.Element
  >;
};

export type ICheckboxProps = InterfaceCheckbox;
