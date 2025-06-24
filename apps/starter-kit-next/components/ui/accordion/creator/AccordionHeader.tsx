import React, { forwardRef } from 'react';

export const AccordionHeader = (StyledAccordionHeader: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledAccordionHeader ref={ref} {...props}>
        {children}
      </StyledAccordionHeader>
    );
  });
