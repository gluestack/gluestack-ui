import React, { forwardRef, useContext } from 'react';
import { useHover, usePress } from '@react-native-aria/interactions';
import { useFocusRing, useFocus } from '@react-native-aria/focus';
import { composeEventHandlers } from '@gluestack-ui/utils';
import { CollapsibleContext } from './context';

export const CollapsibleTrigger = (StyledCollapsibleTrigger: any) =>
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
      const { isDisabled, isOpen, setIsOpen } = useContext(CollapsibleContext);

      const { pressProps, isPressed } = usePress({
        isDisabled: isDisabled || props.disabled,
      });

      const { isHovered, hoverProps }: any = useHover();

      const { isFocusVisible, focusProps: focusRingProps }: any =
        useFocusRing();

      const { isFocused, focusProps } = useFocus();

      return (
        <StyledCollapsibleTrigger
          ref={ref}
          {...props}
          states={{
            disabled: isDisabled || props.disabled,
            hover: isHoveredProp || isHovered,
            focus: isFocusedProp || isFocused,
            focusVisible: isFocusVisibleProp || isFocusVisible,
            active: isPressedProp || isPressed,
          }}
          disabled={isDisabled || props.disabled}
          onPress={composeEventHandlers(() => {
            setIsOpen(!isOpen);
          }, props.onPress)}
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
                disabled: isDisabled || props.disabled,
                focusVisible: isFocusVisible,
                open: isOpen,
              })
            : children}
        </StyledCollapsibleTrigger>
      );
    }
  );
