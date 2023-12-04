import React, { forwardRef } from 'react';

export const AccordionTitleText = (StyledAccordionTitleText: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    return (
      <StyledAccordionTitleText ref={ref} {...props}>
        {children}
      </StyledAccordionTitleText>
    );
  });
