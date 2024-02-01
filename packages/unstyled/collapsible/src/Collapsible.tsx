import React, { forwardRef, useMemo } from 'react';
import type { ICollapsibleProps } from './types';
import { CollapsibleContext } from './context';

import { useControlledState } from '@react-stately/utils';

export const Collapsible = <T,>(StyledCollapsible: any) =>
  forwardRef(
    (
      {
        isOpen: isOpenProp,
        isDisabled,
        defaultIsOpen = false,
        onOpenChange,
        children,
        ...props
      }: T & ICollapsibleProps,
      ref?: any
    ) => {
      const [isOpen, setIsOpen] = useControlledState(
        isOpenProp,
        defaultIsOpen,
        (incomingValue: any) => {
          onOpenChange && onOpenChange(incomingValue);
        }
      );

      const contextValue = useMemo(() => {
        return {
          isOpen,
          setIsOpen,
          isDisabled,
        };
      }, [isOpen, setIsOpen, isDisabled]);

      return (
        <CollapsibleContext.Provider value={contextValue}>
          <StyledCollapsible ref={ref} {...props}>
            {children}
          </StyledCollapsible>
        </CollapsibleContext.Provider>
      );
    }
  );
