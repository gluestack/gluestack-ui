import type { ViewProps } from 'react-native';
export interface InterfaceRadio extends ViewProps {
  value: string;
  onChange?: (isSelected: boolean) => void;
  children?: React.ReactNode;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isHovered?: boolean;
  isFocusVisible?: boolean;
  isIndeterminate?: boolean;
}

export interface IRadioGroupProps {
  value?: string;
  onChange?: (isSelected: any) => void;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isInvalid?: boolean;
}
export type IRadioComponentType<
  RadioProps,
  GroupProps,
  IconProps,
  IndicatorProps,
  LabelProps
> = React.ForwardRefExoticComponent<
  InterfaceRadio & React.RefAttributes<RadioProps> & RadioProps
> & {
  Group: React.ForwardRefExoticComponent<
    React.RefAttributes<GroupProps> & GroupProps & IRadioGroupProps
  >;
  Icon: React.ForwardRefExoticComponent<
    React.RefAttributes<IconProps> & IconProps
  >;
  Indicator: React.ForwardRefExoticComponent<
    React.RefAttributes<IndicatorProps> & IndicatorProps
  >;
  Label: React.ForwardRefExoticComponent<
    React.RefAttributes<LabelProps> & LabelProps
  >;
};

export type IRadioProps = InterfaceRadio;
