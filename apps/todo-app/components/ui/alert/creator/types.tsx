import React from 'react';
import type { ViewProps } from 'react-native';

export interface InterfaceAlertProps extends ViewProps {
  children?: React.ReactNode;
}

export type IAlertComponentType<StyledAlert, StyledAlertText, StyledAlertIcon> =
  React.ForwardRefExoticComponent<
    React.RefAttributes<StyledAlert> &
      React.PropsWithoutRef<StyledAlert & InterfaceAlertProps>
  > & {
    Text: React.ForwardRefExoticComponent<
      React.RefAttributes<StyledAlertText> &
        React.PropsWithoutRef<StyledAlertText>
    >;
    Icon: React.ForwardRefExoticComponent<
      React.RefAttributes<StyledAlertIcon> &
        React.PropsWithoutRef<StyledAlertIcon>
    >;
  };

export type IAlertProps = InterfaceAlertProps;
