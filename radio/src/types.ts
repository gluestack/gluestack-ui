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
> = React.ForwardRefExoticComponent<
  (props: InterfaceRadio & RadioProps) => JSX.Element
> & {
  Group: React.ForwardRefExoticComponent<
    (props: GroupProps & IRadioGroupProps) => JSX.Element
  >;
  Icon: React.ForwardRefExoticComponent<(props: IconProps) => JSX.Element>;
  Indicator: React.ForwardRefExoticComponent<
    (props: IndicatorProps) => JSX.Element
  >;
  Label: React.ForwardRefExoticComponent<(props: LabelProps) => JSX.Element>;
};

export type IRadioProps = InterfaceRadio;
