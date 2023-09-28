import type { ViewProps } from 'react-native';

export interface InterfaceAlertProps extends ViewProps {
  children?: JSX.Element | Array<JSX.Element>;
}

export type IAlertComponentType<StyledAlert, StyledAlertText, StyledAlertIcon> =
  React.ForwardRefExoticComponent<
    (props: StyledAlert & InterfaceAlertProps) => JSX.Element
  > & {
    Text: React.ForwardRefExoticComponent<
      (props: StyledAlertText) => JSX.Element
    >;
    Icon: React.ForwardRefExoticComponent<
      (props: StyledAlertIcon) => JSX.Element
    >;
  };

export type IAlertProps = InterfaceAlertProps;
