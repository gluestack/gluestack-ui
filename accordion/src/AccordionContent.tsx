import React, { forwardRef, useContext, useState, useEffect } from 'react';
import { AccordionContext, AccordionItemContext } from './Context';

export const AccordionContent = (StyledAccordionContent: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const { state } = useContext(AccordionContext);
    const { value, regionProps } = useContext(AccordionItemContext);

    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
      state.collection.forEach((item: any) => {
        if (item.key === value) {
          setExpanded(item.isExpanded);
        }
      });
    }, [state.collection, value, setExpanded]);

    return expanded ? (
      <StyledAccordionContent ref={ref} {...props} {...regionProps}>
        {children}
      </StyledAccordionContent>
    ) : null;
  });
