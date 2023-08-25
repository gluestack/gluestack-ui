import { IAccordionTriggerProps } from './types';
import React, { forwardRef, useContext } from 'react';

// import { AccordionItemContext } from './AccordionItem';

import { composeEventHandlers } from '@gluestack-ui/utils';
import { useAccordionContext } from './Context';
import { AccordionItemContext } from './AccordionItem';
// import { useAccordionItemContext } from './AccordionItemContext';
// import { AccordionItemContext } from './AccordionItem';
export const AccordionTrigger = <T,>(StyledAccordionTrigger: any) =>
  forwardRef(
    ({ children, ...props }: T & IAccordionTriggerProps, ref?: any) => {
      const { toggleItem, type, isCollapsible, isDisabled } =
        useAccordionContext();
      const { accordionValue } = useContext(AccordionItemContext);

      return (
        <StyledAccordionTrigger
          {...props}
          onPress={() => {
            composeEventHandlers(
              props?.onPress,
              toggleItem(type, isCollapsible, isDisabled, accordionValue)
            );
          }}
          disabled={isDisabled}
          ref={ref}
        >
          {children}
        </StyledAccordionTrigger>
      );
    }
  );
