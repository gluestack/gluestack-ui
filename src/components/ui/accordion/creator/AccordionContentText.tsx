import React, { forwardRef } from 'react';

export const AccordionContentText = (StyledAccordionContentText: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledAccordionContentText ref={ref} {...props}>
        {children}
      </StyledAccordionContentText>
    );
  });
