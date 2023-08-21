import React, { forwardRef } from 'react';
import { AccordionItemContext } from './AccordionItem';

export const AccordionContent = (StyledAccordionContent: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const { visibleContent } = React.useContext<any>(AccordionItemContext);
    return visibleContent ? (
      <StyledAccordionContent ref={ref} {...props}>
        {children}
      </StyledAccordionContent>
    ) : null;
  });
