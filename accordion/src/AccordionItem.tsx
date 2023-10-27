import React, { forwardRef, useEffect, useContext } from 'react';
import { AccordionContext, AccordionItemContext } from './Context';
import { IAccordionItemProps } from './types';

export const AccordionItem = <T,>(StyledAccordionItem: any) =>
  forwardRef(({ children, ...props }: T & IAccordionItemProps, ref?: any) => {
    const { setDisabledItems } = useContext(AccordionContext);

    useEffect(() => {
      setDisabledItems(
        props.isDisabled
          ? (prevDisabledItems: string[]) => [...prevDisabledItems, props.value]
          : (prevDisabledItems: string[]) =>
              prevDisabledItems.filter((i) => i !== props.value)
      );
    }, [props.isDisabled, props.value, setDisabledItems]);

    const context = {
      value: props.value,
    };

    return (
      <AccordionItemContext.Provider value={context}>
        <StyledAccordionItem ref={ref} {...props}>
          {children}
        </StyledAccordionItem>
      </AccordionItemContext.Provider>
    );
  });
