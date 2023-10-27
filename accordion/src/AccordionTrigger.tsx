import React, { forwardRef, useContext } from 'react';
import { IAccordionTriggerProps } from './types';
import { AccordionContext, AccordionItemContext } from './Context';
import { composeEventHandlers } from '@gluestack-ui/utils';

export const AccordionTrigger = <T,>(StyledAccordionTrigger: any) =>
  forwardRef(
    ({ children, ...props }: T & IAccordionTriggerProps, ref?: any) => {
      const {
        isDisabledAccordion,
        type,
        isCollapsible,
        setOpenItems,
        disabledItems,
      } = useContext(AccordionContext);
      const { value } = useContext(AccordionItemContext);

      const toggleItem = (itemValue: string) => {
        if (isDisabledAccordion) return;
        if (disabledItems.includes(itemValue)) {
          return;
        }
        if (type === 'single') {
          if (isCollapsible) {
            setOpenItems((prevOpenItems: string[]) => {
              const isItemAlreadyOpen = prevOpenItems.includes(itemValue);

              return isItemAlreadyOpen
                ? prevOpenItems.filter((index) => index !== itemValue)
                : [itemValue];
            });
          } else {
            setOpenItems((prevOpenItems: string[]) => {
              const isItemAlreadyOpen = prevOpenItems.includes(itemValue);

              return isItemAlreadyOpen ? prevOpenItems : [itemValue];
            });
          }
        } else {
          if (isCollapsible) {
            setOpenItems((prevOpenItems: string[]) => {
              const isItemAlreadyOpen = prevOpenItems.includes(itemValue);
              return isItemAlreadyOpen
                ? prevOpenItems.filter((index) => index !== itemValue)
                : [...prevOpenItems, itemValue];
            });
          } else {
            setOpenItems((prevOpenItems: string[]) => {
              const isItemAlreadyOpen = prevOpenItems.includes(itemValue);
              return isItemAlreadyOpen
                ? prevOpenItems
                : [...prevOpenItems, itemValue];
            });
          }
        }
      };

      return (
        <StyledAccordionTrigger
          {...props}
          onPress={() =>
            composeEventHandlers(props?.onPress, toggleItem(value))
          }
          ref={ref}
        >
          {children}
        </StyledAccordionTrigger>
      );
    }
  );
