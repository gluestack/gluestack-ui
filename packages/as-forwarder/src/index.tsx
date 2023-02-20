import React from 'react';

export function AsForwarder({ as, children, ...props }: any) {
  const As: any = as;
  return <As {...props}>{children}</As>;
}
