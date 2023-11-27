import React, { forwardRef, useMemo } from 'react';
import type { IAccordionProps } from './types';
import { AccordionContext } from './Context';
import { useAccordion } from './useAccordion';

export const Accordion = <T,>(StyledAccordion: any) =>
  forwardRef(
    (
      {
        type = 'single',
        isCollapsible = true,
        isDisabled = false,
        children,
        ...props
      }: T & IAccordionProps,
      ref?: any
    ) => {
      const { state } = useAccordion({
        type,
        isCollapsible,
        isDisabledAccordion: isDisabled,
        ...props,
      });
      const contextValue = useMemo(() => {
        return {
          state,
          isDisabledAccordion: isDisabled,
        };
      }, [isDisabled, state]);
      return (
        <AccordionContext.Provider value={contextValue}>
          <StyledAccordion ref={ref} {...props}>
            {children}
          </StyledAccordion>
        </AccordionContext.Provider>
      );
    }
  );
