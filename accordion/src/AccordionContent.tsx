import React, { forwardRef, useContext, useState, useEffect } from 'react';
import { AccordionContext, AccordionItemContext } from './Context';

export const AccordionContent = (StyledAccordionContent: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const { openItems } = useContext(AccordionContext);
    const { value } = useContext(AccordionItemContext);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
      setExpanded(openItems.includes(value));
    }, [openItems, value, setExpanded]);

    return expanded ? (
      <StyledAccordionContent ref={ref} {...props}>
        {children}
      </StyledAccordionContent>
    ) : null;
  });
