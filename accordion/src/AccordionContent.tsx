import React, { forwardRef, useContext } from 'react';
import { AccordionItemContext } from './Context';

export const AccordionContent = (StyledAccordionContent: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const { regionProps, isExpanded } = useContext(AccordionItemContext);

    return isExpanded ? (
      <StyledAccordionContent ref={ref} {...props} {...regionProps}>
        {children}
      </StyledAccordionContent>
    ) : null;
  });
