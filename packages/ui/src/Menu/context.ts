import React from 'react';
export const MenuContext = React.createContext({
  closeOnSelect: true as boolean,
  handleClose: (() => {}) as any,
  isOpen: false as boolean,
});
