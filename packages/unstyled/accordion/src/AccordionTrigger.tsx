import React, { forwardRef, useContext } from 'react';
import { AccordionItemContext } from './Context';
import { useHover, usePress } from '@react-native-aria/interactions';
import { useFocusRing, useFocus } from '@react-native-aria/focus';
import { composeEventHandlers } from '@gluestack-ui/utils';

export const AccordionTrigger = (StyledAccordionTrigger: any) =>
  forwardRef(
    (
      {
        children,
        isHovered: isHoveredProp,
        isFocused: isFocusedProp,
        isPressed: isPressedProp,
        isFocusVisible: isFocusVisibleProp,
        ...props
      }: any,
      ref?: any
    ) => {
      const { isDisabled, buttonProps, isExpanded } =
        useContext(AccordionItemContext);

      const { pressProps, isPressed } = usePress({
        isDisabled: isDisabled,
      });

      const { isHovered, hoverProps }: any = useHover();

      const { isFocusVisible, focusProps: focusRingProps }: any =
        useFocusRing();

      const { isFocused, focusProps } = useFocus();

      return (
        <StyledAccordionTrigger
          ref={ref}
          {...props}
          {...buttonProps}
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
        >
          {typeof children === 'function'
            ? children({
                hovered: isHovered,
                focused: isFocused,
                pressed: isPressed,
                disabled: isDisabled,
                focusVisible: isFocusVisible,
                isExpanded: isExpanded,
              })
            : children}
        </StyledAccordionTrigger>
      );
    }
  );
