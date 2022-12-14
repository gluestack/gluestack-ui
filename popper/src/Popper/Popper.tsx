import React from 'react';
import { PopperProvider } from './PopperContext';
import type { IPopperProps } from './types';

const Popper = (
  props: IPopperProps & {
    triggerRef: any;
    onClose: any;
    setOverlayRef?: (overlayRef: any) => void;
  }
) => {
  return <PopperProvider {...props}>{props.children}</PopperProvider>;
};

export default Popper;
