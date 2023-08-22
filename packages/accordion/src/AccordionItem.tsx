import { useState } from 'react';
import { IAccordionItemProps } from './types';
import React, { forwardRef } from 'react';
export const AccordionItemContext = React.createContext({});

export const AccordionItem = <T,>(StyledAccordionItem: any) =>
  forwardRef(({ children, ...props }: T & IAccordionItemProps, ref?: any) => {
    const [visibleContent, setVisibleContent] = useState(false);

    return (
      <AccordionItemContext.Provider
        value={{
          visibleContent,
          setVisibleContent,
        }}
      >
        <StyledAccordionItem ref={ref} {...props}>
          {children}
        </StyledAccordionItem>
      </AccordionItemContext.Provider>
    );
  });
