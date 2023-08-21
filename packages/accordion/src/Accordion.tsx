import React, { forwardRef } from 'react';
import type { IAccordionProps } from './types';

export const Accordion = <T,>(StyledAccordion: any) =>
  forwardRef(({ children }: T & IAccordionProps, ref?: any) => {
    return <StyledAccordion ref={ref}>{children}</StyledAccordion>;
  });
