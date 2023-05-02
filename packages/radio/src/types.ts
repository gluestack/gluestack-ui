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
> = ((props: InterfaceRadio & RadioProps) => JSX.Element) & {
  Group: (props: GroupProps & IRadioGroupProps) => JSX.Element;
  Icon: (props: IconProps) => JSX.Element;
  Indicator: (props: IndicatorProps) => JSX.Element;
  Label: (props: LabelProps) => JSX.Element;
};

export type IRadioProps = InterfaceRadio;
