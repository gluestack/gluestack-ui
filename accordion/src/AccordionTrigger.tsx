import React, { forwardRef, useContext } from 'react';
import { IAccordionTriggerProps } from './types';
import { AccordionContext, AccordionItemContext } from './Context';
import { composeEventHandlers } from '@gluestack-ui/utils';

export const AccordionTrigger = <T,>(StyledAccordionTrigger: any) =>
  forwardRef(
    ({ children, ...props }: T & IAccordionTriggerProps, ref?: any) => {
      const { isDisabled, type, isCollapsible, setOpenItems, disabledItems } =
        useContext(AccordionContext);
      const { value } = useContext(AccordionItemContext);

      const toggleItem = (itemValue: string) => {
        if (isDisabled) return;

        if (type === 'single') {
          if (isCollapsible) {
            //Don't do anything if it's disabled
            if (disabledItems.includes(itemValue)) {
              return;
            }

            setOpenItems((prevOpenItems: string[]) => {
              const isItemAlreadyOpen = prevOpenItems.includes(itemValue);

              return isItemAlreadyOpen
                ? prevOpenItems.filter((index) => index !== itemValue)
                : [itemValue];
            });
          } else {
            // Don't do anything if it's disabled
            if (disabledItems.includes(itemValue)) {
              return;
            }

            setOpenItems((prevOpenItems: string[]) => {
              const isItemAlreadyOpen = prevOpenItems.includes(itemValue);

              return isItemAlreadyOpen ? prevOpenItems : [itemValue];
            });
          }
        } else {
          if (isCollapsible) {
            if (disabledItems.includes(itemValue)) {
              return;
            }
            setOpenItems((prevOpenItems: string[]) => {
              const isItemAlreadyOpen = prevOpenItems.includes(itemValue);
              return isItemAlreadyOpen
                ? prevOpenItems.filter((index) => index !== itemValue)
                : [...prevOpenItems, itemValue];
            });
          } else {
            if (disabledItems.includes(itemValue)) {
              return;
            }
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
