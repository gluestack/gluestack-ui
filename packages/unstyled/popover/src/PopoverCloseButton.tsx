import React, { forwardRef } from 'react';
import { usePress, useHover } from '@react-native-aria/interactions';
import { useFocusRing, useFocus } from '@react-native-aria/focus';
import { composeEventHandlers } from '@gluestack-ui/utils';
import { usePopoverContent } from './PopoverContext';

const PopoverCloseButton = (StyledPopoverCloseButton: any) =>
  forwardRef(
    (
      {
        children,
        isDisabled,
        isHovered: isHoveredProp,
        isPressed: isPressedProp,
        isFocused: isFocusedProp,
        isFocusVisible: isFocusVisibleProp,
        ...props
      }: any,
      ref?: any
    ) => {
      const { value } = usePopoverContent('PopoverContext');
      const { handleClose } = value;

      const { hoverProps, isHovered } = useHover();
      const { pressProps, isPressed } = usePress({ isDisabled });
      const { focusProps, isFocused } = useFocus();
      const { isFocusVisible, focusProps: focusRingProps }: any =
        useFocusRing();

      const {
        onPressIn,
        onPressOut,
        onHoverIn,
        onHoverOut,
        onFocus,
        onBlur,
        ...resolvedProps
      } = props;

      return (
        <StyledPopoverCloseButton
          role="button"
          states={{
            hover: isHoveredProp || isHovered,
            focus: isFocusedProp || isFocused,
            active: isPressedProp || isPressed,
            disabled: isDisabled,
            focusVisible: isFocusVisibleProp || isFocusVisible,
          }}
          ref={ref}
          disabled={isDisabled}
          onPressIn={composeEventHandlers(onPressIn, pressProps.onPressIn)}
          onPressOut={composeEventHandlers(onPressOut, pressProps.onPressOut)}
          // @ts-ignore - web only
          onHoverIn={composeEventHandlers(onHoverIn, hoverProps.onHoverIn)}
          // @ts-ignore - web only
          onHoverOut={composeEventHandlers(onHoverOut, hoverProps.onHoverOut)}
          // @ts-ignore - web only
          onFocus={composeEventHandlers(
            composeEventHandlers(onFocus, focusProps.onFocus),
            focusRingProps.onFocus
          )}
          // @ts-ignore - web only
          onBlur={composeEventHandlers(
            composeEventHandlers(onBlur, focusProps.onBlur),
            focusRingProps.onBlur
          )}
          onPress={() => {
            handleClose();
          }}
          {...resolvedProps}
        >
          {children}
        </StyledPopoverCloseButton>
      );
    }
  );

export default PopoverCloseButton;
