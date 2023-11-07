import React, { forwardRef, useContext, useMemo } from 'react';
import { AccordionContext, AccordionItemContext } from './Context';
import { IAccordionItemProps } from './types';

export const AccordionItem = <T,>(StyledAccordionItem: any) =>
  forwardRef(({ children, ...props }: T & IAccordionItemProps, ref?: any) => {
    const { isDisabledAccordion } = useContext(AccordionContext);
    const { isDisabled, value } = props;

    const context = useMemo(() => {
      return {
        value: value,
        isDisabled: isDisabled !== undefined ? isDisabled : isDisabledAccordion,
      };
    }, [value, isDisabled, isDisabledAccordion]);

    return (
      <AccordionItemContext.Provider value={context}>
        <StyledAccordionItem ref={ref} {...props}>
          {children}
        </StyledAccordionItem>
      </AccordionItemContext.Provider>
    );
  });
