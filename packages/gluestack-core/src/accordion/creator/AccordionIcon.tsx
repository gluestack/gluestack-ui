import React, { forwardRef } from 'react';

export const AccordionIcon = (StyledAccordionIcon: any) =>
  forwardRef((props: any, ref?: any) => {
    return <StyledAccordionIcon {...props} ref={ref} />;
  });
