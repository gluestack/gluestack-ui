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
  InterfaceRadio &
    React.RefAttributes<RadioProps> &
    React.PropsWithoutRef<RadioProps>
> & {
  Group: React.ForwardRefExoticComponent<
    React.RefAttributes<GroupProps> &
      React.PropsWithoutRef<GroupProps> &
      IRadioGroupProps
  >;
  Icon: React.ForwardRefExoticComponent<
    React.RefAttributes<IconProps> &
      React.PropsWithoutRef<IconProps> & { forceMount?: boolean }
  >;
  Indicator: React.ForwardRefExoticComponent<
    React.RefAttributes<IndicatorProps> & React.PropsWithoutRef<IndicatorProps>
  >;
  Label: React.ForwardRefExoticComponent<
    React.RefAttributes<LabelProps> & React.PropsWithoutRef<LabelProps>
  >;
};

export type IRadioProps = InterfaceRadio;
