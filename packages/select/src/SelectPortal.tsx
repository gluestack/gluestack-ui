import React, { forwardRef } from 'react';
import { SelectContext, SelectPortalContext } from './SelectContext';

export const SelectPortal = (Actionsheet: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    const { isOpen, handleClose, closeOnOverlayClick, ...portalProps } =
      React.useContext(SelectContext);

    return (
      <Actionsheet
        isOpen={isOpen}
        onClose={handleClose}
        closeOnOverlayClick={closeOnOverlayClick}
        {...props}
        ref={ref}
      >
        <SelectPortalContext.Provider
          value={{ handleClose: handleClose, ...portalProps }}
        >
          {children}
        </SelectPortalContext.Provider>
      </Actionsheet>
    );
  });
