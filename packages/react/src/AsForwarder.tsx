import React from 'react';
import Svg from 'react-native-svg';

export function AsForwarder({ as, children, ...props }: any) {
  const As: any = as;
  return as ? <As {...props}>{children}</As> : <Svg {...props}>{children}</Svg>;
}
