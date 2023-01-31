import type { ViewProps } from 'react-native';
interface InterfaceRadio extends ViewProps {
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

export type IRadioComponentType<
  RadioProps,
  GroupProps,
  IconProps,
  IndicatorProps,
  LabelProps
> = ((props: RadioProps) => JSX.Element) & {
  Group: (props: GroupProps) => JSX.Element;
  Icon: (props: IconProps) => JSX.Element;
  Indicator: (props: IndicatorProps) => JSX.Element;
  Label: (props: LabelProps) => JSX.Element;
};

export type IRadioProps = InterfaceRadio;
