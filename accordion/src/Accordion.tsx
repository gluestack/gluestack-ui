import React, { forwardRef, useEffect, useMemo } from 'react';
import type { IAccordionProps } from './types';
import { AccordionContext } from './Context';

export const Accordion = <T,>(StyledAccordion: any) =>
  forwardRef(
    (
      {
        type = 'single',
        isCollapsible = true,
        isDisabled = false,
        children,
        ...props
      }: T & IAccordionProps,
      ref?: any
    ) => {
      const { onValueChange } = props;
      const [openItems, setOpenItems] = React.useState<string[]>([]);

      useEffect(() => {
        if (props.value) {
          if (type === 'single' && typeof props.value === 'string') {
            setOpenItems([props.value]);
          } else if (type === 'multiple' && Array.isArray(props.value)) {
            setOpenItems((props.value as string[]).map((item: any) => item));
          }
        } else {
          setOpenItems([]);
        }
        if (!props.value) {
          if (props.defaultValue) {
            if (type === 'single' && typeof props.defaultValue === 'string') {
              setOpenItems([props.defaultValue]);
            } else if (
              type === 'multiple' &&
              Array.isArray(props.defaultValue)
            ) {
              setOpenItems(
                (props.defaultValue as string[]).map((item: any) => item)
              );
            }
          } else {
            setOpenItems([]);
          }
        }
      }, [props.defaultValue, props.value, type, setOpenItems]);

      useEffect(() => {
        if (onValueChange) {
          onValueChange(openItems);
        }
      }, [openItems, onValueChange]);

      const contextValue = useMemo(() => {
        return {
          type: type,
          isCollapsible: isCollapsible,
          openItems,
          setOpenItems,

          isDisabledAccordion: isDisabled,
        };
      }, [type, isCollapsible, openItems, setOpenItems, isDisabled]);

      return (
        <AccordionContext.Provider value={contextValue}>
          <StyledAccordion
            ref={ref}
            {...props}
            states={{
              disabled: isDisabled,
            }}
          >
            {children}
          </StyledAccordion>
        </AccordionContext.Provider>
      );
    }
  );
