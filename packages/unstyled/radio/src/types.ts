import type { ViewProps } from 'react-native';
interface InterfaceRadio extends ViewProps {
  value: string;
  onChange?: (isSelected: boolean) => void;
  children?: React.ReactNode;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isHovered?: boolean;
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
> = React.ForwardRefExoticComponent<InterfaceRadio & RadioProps> & {
  Group: React.ForwardRefExoticComponent<GroupProps & IRadioGroupProps>;
  Icon: React.ForwardRefExoticComponent<IconProps>;
  Indicator: React.ForwardRefExoticComponent<IndicatorProps>;
  Label: React.ForwardRefExoticComponent<LabelProps>;
};

export type IRadioProps = InterfaceRadio;
