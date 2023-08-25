// import { useAccordionContext } from './Context';
import { IAccordionItemProps } from './types';
import React, { forwardRef } from 'react';

export const AccordionItemContext = React.createContext<any>(undefined);

export const AccordionItem = <T,>(StyledAccordionItem: any) =>
  forwardRef(({ children, ...props }: T & IAccordionItemProps, ref?: any) => {
    // const { accordionValue, setAccordionValue } = useAccordionContext();

    //  come back later once

    const uniqueId = function () {
      return Date.now().toString(36) + Math.random().toString(36).substring(2);
    };

    const context = {
      accordionValue: props.accordionValue ? props.accordionValue : uniqueId(),
    };

    // useEffect(() => {
    //   if (props?.accordionValue) {
    //     setAccordionValue(props?.accordionValue);
    //   } else {
    //     setAccordionValue(uniqueId());
    //   }
    // }, []);

    return (
      // <AccordionProvider>
      <AccordionItemContext.Provider value={context}>
        <StyledAccordionItem ref={ref} {...props}>
          {children}
        </StyledAccordionItem>
      </AccordionItemContext.Provider>
      // </AccordionProvider>
    );
  });
