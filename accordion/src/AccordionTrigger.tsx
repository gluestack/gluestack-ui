import React, { forwardRef, useContext } from 'react';
import { IAccordionTriggerProps } from './types';
import { AccordionContext, AccordionItemContext } from './Context';
import { useHover, usePress } from '@react-native-aria/interactions';
import { useFocusRing, useFocus } from '@react-native-aria/focus';
import { composeEventHandlers } from '@gluestack-ui/utils';

export const AccordionTrigger = <T,>(StyledAccordionTrigger: any) =>
  forwardRef(
    (
      {
        children,
        isHovered: isHoveredProp,
        isFocused: isFocusedProp,
        isPressed: isPressedProp,
        isFocusVisible: isFocusVisibleProp,
        ...props
      }: T & IAccordionTriggerProps,
      ref?: any
    ) => {
      const { type, isCollapsible, setOpenItems, openItems } =
        useContext(AccordionContext);

      const { value, isDisabled } = useContext(AccordionItemContext);

      const { pressProps, isPressed } = usePress({
        isDisabled: isDisabled,
      });
      const { isHovered, hoverProps }: any = useHover();
      const { isFocusVisible, focusProps: focusRingProps }: any =
        useFocusRing();

      const { isFocused, focusProps } = useFocus();

      const toggleItem = () => {
        if (isDisabled || !value) {
          return;
        }

        if (type === 'single') {
          if (isCollapsible) {
            setOpenItems((prevOpenItems: string[]) => {
              const isItemAlreadyOpen = prevOpenItems.includes(value);

              return isItemAlreadyOpen
                ? prevOpenItems.filter((index) => index !== value)
                : [value];
            });
          } else {
            setOpenItems((prevOpenItems: string[]) => {
              const isItemAlreadyOpen = prevOpenItems.includes(value);

              return isItemAlreadyOpen ? prevOpenItems : [value];
            });
          }
        } else {
          if (isCollapsible) {
            setOpenItems((prevOpenItems: string[]) => {
              const isItemAlreadyOpen = prevOpenItems.includes(value);
              return isItemAlreadyOpen
                ? prevOpenItems.filter((index) => index !== value)
                : [...prevOpenItems, value];
            });
          } else {
            setOpenItems((prevOpenItems: string[]) => {
              const isItemAlreadyOpen = prevOpenItems.includes(value);
              return isItemAlreadyOpen
                ? prevOpenItems
                : [...prevOpenItems, value];
            });
          }
        }
      };

      return (
        <StyledAccordionTrigger
          ref={ref}
          {...props}
          aria-expanded={openItems.includes(value)}
          onPress={() => composeEventHandlers(props?.onPress, toggleItem())}
          states={{
            disabled: isDisabled,
            hover: isHoveredProp || isHovered,
            focus: isFocusedProp || isFocused,
            focusVisible: isFocusVisibleProp || isFocusVisible,
            active: isPressedProp || isPressed,
          }}
          disabled={isDisabled}
          onPressIn={composeEventHandlers(
            props?.onPressIn,
            pressProps.onPressIn
          )}
          onPressOut={composeEventHandlers(
            props?.onPressOut,
            pressProps.onPressOut
          )}
          // @ts-ignore - web only
          onHoverIn={composeEventHandlers(
            props?.onHoverIn,
            hoverProps.onHoverIn
          )}
          // @ts-ignore - web only
          onHoverOut={composeEventHandlers(
            props?.onHoverOut,
            hoverProps.onHoverOut
          )}
          onFocus={composeEventHandlers(
            composeEventHandlers(props?.onFocus, focusProps.onFocus),
            focusRingProps.onFocus
          )}
          onBlur={composeEventHandlers(
            composeEventHandlers(props?.onBlur, focusProps.onBlur),
            focusRingProps.onBlur
          )}
          onKeyDown={(e: KeyboardEvent) => {
            if (e.code === 'Space') {
              toggleItem();
            }
          }}
        >
          {typeof children === 'function'
            ? children({
                hovered: isHovered,
                focused: isFocused,
                pressed: isPressed,
                disabled: isDisabled,
                focusVisible: isFocusVisible,
                isExpanded: openItems.includes(value),
              })
            : children}
        </StyledAccordionTrigger>
      );
    }
  );
