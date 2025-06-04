import React from 'react';

export const ModalContext = React.createContext({
  handleClose: (() => {}) as any,
  initialFocusRef: { current: null } as React.RefObject<any> | undefined,
  finalFocusRef: { current: null } as React.RefObject<any> | undefined,
  visible: false as boolean,
  closeOnOverlayClick: false as boolean,
  avoidKeyboard: false as boolean,
  bottomInset: 0 as number,
});
