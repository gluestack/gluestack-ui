import type { ViewProps } from 'react-native';

export interface InterfaceAlertProps extends ViewProps {
  children?: JSX.Element | Array<JSX.Element>;
}

export type IAlertComponentType<StyledAlert, StyledAlertText, StyledAlertIcon> =
  ((props: StyledAlert & InterfaceAlertProps) => JSX.Element) & {
    Text: (props: StyledAlertText) => JSX.Element;
    Icon: (props: StyledAlertIcon) => JSX.Element;
  };

export type IAlertProps = InterfaceAlertProps;
