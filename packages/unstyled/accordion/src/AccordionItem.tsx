import React, { forwardRef, useContext, useMemo, useState } from 'react';
import { AccordionContext, AccordionItemContext } from './Context';
import { IAccordionItemProps } from './types';
import { useAccordionItem } from '@react-native-aria/accordion';

export const AccordionItem = <T,>(StyledAccordionItem: any) =>
  forwardRef(({ children, ...props }: T & IAccordionItemProps, ref?: any) => {
    const [titleText, setTitleText] = useState('');
    const { state, isDisabledAccordion, selectedValues } =
      useContext(AccordionContext);

    const { isDisabled, value } = props;

    const { regionProps, buttonProps, isExpanded } = useAccordionItem(state, {
      value,
      isExpanded: selectedValues.includes(value),
      isDisabled: isDisabled !== undefined ? isDisabled : isDisabledAccordion,
    });

    const context = useMemo(() => {
      return {
        isDisabled: isDisabled !== undefined ? isDisabled : isDisabledAccordion,
        isExpanded,
        value,
        buttonProps,
        regionProps,
        titleText,
        setTitleText,
      };
    }, [
      isDisabled,
      isDisabledAccordion,
      isExpanded,
      value,
      buttonProps,
      regionProps,
      titleText,
    ]);

    return (
      <AccordionItemContext.Provider value={context}>
        <StyledAccordionItem ref={ref} {...props}>
          {children}
        </StyledAccordionItem>
      </AccordionItemContext.Provider>
    );
  });
