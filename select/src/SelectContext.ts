import React from 'react';

export const SelectContext = React.createContext({
  isHovered: false,
  hoverRef: null as any,
  hoverProps: null as any,
  isFocused: false,
  isFocusVisible: false,
  focusProps: null as any,
  setFocused: (() => {}) as any,
  isDisabled: false,
  isReadOnly: false,
  isInvalid: false,
});

export const SelectItemListContext = React.createContext({
  onValueChange: (() => {}) as any,
  handleClose: (() => {}) as any,
});
