import React from 'react';
import Svg from 'react-native-svg';
import type { ViewProps } from 'react-native';

export interface InterfaceAsForwardedProps extends ViewProps {
  as?: any;
}

const AsForwarderTemp = ({
  as,
  children,
  ...props
}: any): React.ReactElement => {
  const As: any = as;
  return as ? <As {...props}>{children}</As> : <Svg {...props}>{children}</Svg>;
};
AsForwarderTemp.displayName = '__AsForwarder__';

export const AsForwarder =
  AsForwarderTemp as React.ComponentType<InterfaceAsForwardedProps>;
