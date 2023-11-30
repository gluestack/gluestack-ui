import React, { forwardRef, useMemo } from 'react';
import type { IAccordionProps } from './types';
import { AccordionContext } from './Context';
// import { useAccordion } from '@react-native-aria/accordion';
import { useAccordion } from './useAccordion';

// import { useControllableState } from '@gluestack-ui/hooks';
import { useControlledState } from '@react-stately/utils';

export const Accordion = <T,>(StyledAccordion: any) =>
  forwardRef(
    (
      {
        type = 'single',
        isCollapsible = true,
        isDisabled = false,
        value,
        defaultValue,
        onValueChange,
        children,
        ...props
      }: T & IAccordionProps,
      ref?: any
    ) => {
      // const [selectedValues, setSelectedValues] = useControllableState({
      //   value,
      //   defaultValue,
      //   onChange: (incomingValue: any) => {
      //     onValueChange && onValueChange(incomingValue);
      //   },
      // });

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
        ...props,
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
