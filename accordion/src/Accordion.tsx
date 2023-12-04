import React, { forwardRef, useMemo } from 'react';
import type { IAccordionProps } from './types';
import { AccordionContext } from './Context';
import { useAccordion } from '@react-native-aria/accordion';
import { useControlledState } from '@react-stately/utils';

export const Accordion = <T,>(StyledAccordion: any) =>
  forwardRef(
    (
      {
        type = 'single',
        isCollapsible = true,
        isDisabled = false,
        value,
        defaultValue = [],
        onValueChange,
        children,
        ...props
      }: T & IAccordionProps,
      ref?: any
    ) => {
      const [selectedValues, setSelectedValues] = useControlledState(
        value,
        defaultValue,
        (incomingValue: any) => {
          onValueChange && onValueChange(incomingValue);
        }
      );

      const { state } = useAccordion({
        type,
        isCollapsible,
        selectedValues,
        setSelectedValues,
      });

      const contextValue = useMemo(() => {
        return {
          state,
          isDisabledAccordion: isDisabled,
          selectedValues,
        };
      }, [state, isDisabled, selectedValues]);

      return (
        <AccordionContext.Provider value={contextValue}>
          <StyledAccordion ref={ref} {...props}>
            {children}
          </StyledAccordion>
        </AccordionContext.Provider>
      );
    }
  );
