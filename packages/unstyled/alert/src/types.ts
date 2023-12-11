import type { ViewProps } from 'react-native';

export interface InterfaceAlertProps extends ViewProps {
  children?: JSX.Element | Array<JSX.Element>;
}

export type IAlertComponentType<StyledAlert, StyledAlertText, StyledAlertIcon> =
  React.ForwardRefExoticComponent<StyledAlert & InterfaceAlertProps> & {
    Text: React.ForwardRefExoticComponent<StyledAlertText>;
    Icon: React.ForwardRefExoticComponent<StyledAlertIcon>;
  };

export type IAlertProps = InterfaceAlertProps;
