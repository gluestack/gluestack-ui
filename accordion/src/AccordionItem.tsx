import React, { forwardRef, useContext, useMemo } from 'react';
import { AccordionContext, AccordionItemContext } from './Context';
import { IAccordionItemProps } from './types';
import { useAccordionItem } from './useAccordionItem';

export const AccordionItem = <T,>(StyledAccordionItem: any) =>
  forwardRef(({ children, ...props }: T & IAccordionItemProps, ref?: any) => {
    const { state, isDisabledAccordion } = useContext(AccordionContext);
    const { isDisabled, value } = props;

    const { regionProps, buttonProps } = useAccordionItem(state, props);
    const context = useMemo(() => {
      return {
        isDisabled: isDisabled !== undefined ? isDisabled : isDisabledAccordion,
        value,
        buttonProps,
        regionProps,
      };
    }, [isDisabled, isDisabledAccordion, value, buttonProps, regionProps]);

    return (
      <AccordionItemContext.Provider value={context}>
        <StyledAccordionItem ref={ref} {...props}>
          {children}
        </StyledAccordionItem>
      </AccordionItemContext.Provider>
    );
  });
