import React, { forwardRef, useContext } from 'react';
import { AccordionItemContext } from './Context';

export const AccordionContent = (StyledAccordionContent: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const { regionProps, isExpanded } = useContext(AccordionItemContext);

    // Animation is now handled in the style file layer, not in core
    // This allows users to customize animations by modifying the style file
    return (
      <StyledAccordionContent ref={ref} {...props} {...regionProps}>
        {children}
      </StyledAccordionContent>
    );
  });
