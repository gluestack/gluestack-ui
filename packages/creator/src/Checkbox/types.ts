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
}

export type ICheckboxProps = InterfaceCheckbox;
