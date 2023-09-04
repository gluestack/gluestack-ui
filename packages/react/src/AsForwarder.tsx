import React from 'react';
import Svg from 'react-native-svg';

const AsForwarder = ({ as, children, ...props }: any) => {
  const As: any = as;
  return as ? <As {...props}>{children}</As> : <Svg {...props}>{children}</Svg>;
};
AsForwarder.displayName = '__AsForwarder__';
export { AsForwarder };
