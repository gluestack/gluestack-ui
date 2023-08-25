import React, { forwardRef } from 'react';
import type { IAccordionProps } from './types';
import { useAccordionContext } from './Context';

export const Accordion = <T,>(StyledAccordion: any) =>
  forwardRef(({ children, ...props }: T & IAccordionProps, ref?: any) => {
    const { setType, setIsCollapsible, setIsDisabled } = useAccordionContext();
    setType(props.type === 'multiple' ? props.type : 'single');
    setIsCollapsible(
      props.isCollapsible === false ? props.isCollapsible : true
    );
    setIsDisabled(props.isDisabled === true ? props.isDisabled : false);
    return (
      <StyledAccordion ref={ref} {...props}>
        {children}
      </StyledAccordion>
    );
  });
