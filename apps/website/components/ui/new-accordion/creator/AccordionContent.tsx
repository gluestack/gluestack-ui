import React, { forwardRef, useContext } from 'react';
import { AccordionItemContext } from './Context';
import AnimatedHeight from './AnimatedHeight';

export const AccordionContent = (StyledAccordionContent: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const { regionProps, isExpanded } = useContext(AccordionItemContext);

    return (
      <AnimatedHeight hide={!isExpanded}>
        <StyledAccordionContent ref={ref} {...props} {...regionProps}>
          {children}
        </StyledAccordionContent>
      </AnimatedHeight>
    );
  });
