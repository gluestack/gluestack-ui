import React, { forwardRef, useContext, useEffect } from 'react';
import { AccordionItemContext } from './Context';

export const AccordionTitleText = (StyledAccordionTitleText: any) =>
  forwardRef(
    (
      {
        children,
        ...props
      }: {
        children: string;
        props: any;
      },
      ref?: any
    ) => {
      const { setTitleText } = useContext(AccordionItemContext);

      useEffect(() => {
        if (typeof children === 'string') {
          setTitleText(children);
        }
      }, [children, setTitleText]);

      return (
        <StyledAccordionTitleText ref={ref} {...props}>
          {children}
        </StyledAccordionTitleText>
      );
    }
  );
