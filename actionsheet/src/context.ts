import React from 'react';

export const ActionsheetContext = React.createContext({
  hideDragIndicator: false,
  handleClose: (() => {}) as any,
  initialFocusRef: { current: null } as React.RefObject<any> | undefined,
  finalFocusRef: { current: null } as React.RefObject<any> | undefined,
  visible: false as boolean,
  backdropVisible: false as boolean,
  closeOnOverlayClick: false as boolean,
  handleCloseBackdrop: (() => {}) as any,
  avoidKeyboard: false as boolean,
  bottomInset: 0 as number,
  trapFocus: true as boolean,
  snapPoints: [] as Array<number>,
});
