import React, { forwardRef, useContext } from 'react';
import { useAccordionContext } from './Context';
import { AccordionItemContext } from './AccordionItem';
// import { useAccordionItemContext } from './AccordionItemContext';
// import { AccordionItemContext } from './AccordionItem';

// import { AccordionItemContext } from './AccordionItem';

export const AccordionContent = (StyledAccordionContent: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const { openItems } = useAccordionContext();
    const { accordionValue } = useContext(AccordionItemContext);

    const expanded = openItems.includes(accordionValue);

    return expanded ? (
      <StyledAccordionContent ref={ref} {...props}>
        {children}
      </StyledAccordionContent>
    ) : null;
  });
