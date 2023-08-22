import { IAccordionTriggerProps } from './types';
import React, { forwardRef } from 'react';
import { AccordionItemContext } from './AccordionItem';

export const AccordionTrigger = <T,>(StyledAccordionTrigger: any) =>
  forwardRef(
    (
      { children, isDisabled, ...props }: T & IAccordionTriggerProps,
      ref?: any
    ) => {
      const { visibleContent, setVisibleContent } =
        React.useContext<any>(AccordionItemContext);

      return (
        <StyledAccordionTrigger
          onPress={() => {
            setVisibleContent(!visibleContent);
          }}
          disabled={isDisabled}
          ref={ref}
          {...props}
        >
          {children}
        </StyledAccordionTrigger>
      );
    }
  );
