import type { ViewProps } from 'react-native';

export interface InterfaceAlertProps extends ViewProps {
  children?: JSX.Element | Array<JSX.Element>;
}

export type IAlertComponentType<StyledAlert, StyledAlertText, StyledAlertIcon> =
  React.ForwardRefExoticComponent<
    React.RefAttributes<StyledAlert> & StyledAlert & InterfaceAlertProps
  > & {
    Text: React.ForwardRefExoticComponent<
      React.RefAttributes<StyledAlertText> & StyledAlertText
    >;
    Icon: React.ForwardRefExoticComponent<
      React.RefAttributes<StyledAlertIcon> & StyledAlertIcon
    >;
  };

export type IAlertProps = InterfaceAlertProps;
