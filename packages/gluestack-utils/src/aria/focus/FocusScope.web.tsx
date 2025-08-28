import React from 'react';
import {
  FocusScope as AriaFocusScope,
  useFocusManager,
} from '@react-aria/focus';
import type { FocusScopeProps } from './FocusScope';
const FocusScope = ({ children, contain, ...props }: FocusScopeProps) => {
  /* Todo: stoping mounted and unMounted everytime contain is change */
  // if (contain === false) return <></>;

  return (
    <AriaFocusScope contain={contain} {...props}>
      {children}
    </AriaFocusScope>
  );
};

export { FocusScope, useFocusManager };
