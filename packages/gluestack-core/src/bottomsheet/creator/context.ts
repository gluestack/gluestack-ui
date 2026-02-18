import React from 'react';

export const BottomSheetContext = React.createContext({
  handleClose: (() => {}) as any,
  handleOpen: (() => {}) as any,
  visible: false as boolean,
  backdropVisible: false as boolean,
  closeOnOverlayClick: true as boolean,
  snapPoints: [] as Array<number>,
  snapToIndex: 0 as number,
  initialFocusRef: { current: null } as React.RefObject<any> | undefined,
  finalFocusRef: { current: null } as React.RefObject<any> | undefined,
  trapFocus: true as boolean,
  preventScroll: true as boolean,
  handleCloseBackdrop: (() => {}) as any,
});
