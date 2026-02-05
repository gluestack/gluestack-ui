import React, { forwardRef } from 'react';
import { AlertDialogContext } from './Context';
import { useHover, usePress } from '@gluestack-ui/utils/aria';
import { composeEventHandlers } from '@gluestack-ui/utils/common';
import { useFocusRing, useFocus } from '@gluestack-ui/utils/aria';
// @ts-ignore

const AlertDialogCloseButton = (StyledAlertDialogCloseButton: any) =>
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
      const { hoverProps, isHovered } = useHover();
      const { pressProps: pressableProps, isPressed } = usePress({
        isDisabled,
      });
      const { focusProps, isFocused } = useFocus();
      const { isFocusVisible, focusProps: focusRingProps }: any =
        useFocusRing();

      const {
        // _icon,
        onPressIn,
        onPressOut,
        onHoverIn,
        onHoverOut,
        onFocus,
        onBlur,
        ...resolvedProps
      } = props;
      const { handleClose } = React.useContext(AlertDialogContext);

      return (
        <StyledAlertDialogCloseButton
          role="button"
          ref={ref}
          onPressIn={composeEventHandlers(onPressIn, pressableProps.onPressIn)}
          onPressOut={composeEventHandlers(
            onPressOut,
            pressableProps.onPressOut
          )}
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
          onPress={handleClose}
          states={{
            hover: isHoveredProp || isHovered,
            focus: isFocusedProp || isFocused,
            active: isPressedProp || isPressed,
            disabled: isDisabled,
            focusVisible: isFocusVisibleProp || isFocusVisible,
          }}
          // data attributes for uniwind
          data-hover={isHoveredProp || isHovered ? 'true' : 'false'}
          data-focus={isFocusedProp || isFocused ? 'true' : 'false'}
          data-active={isPressedProp || isPressed ? 'true' : 'false'}
          data-disabled={isDisabled ? 'true' : 'false'}
          data-focus-visible={isFocusVisibleProp || isFocusVisible ? 'true' : 'false'}
          // data attributes for nativewind
          dataSet={{
            hover: isHoveredProp || isHovered ? 'true' : 'false',
            focus: isFocusedProp || isFocused ? 'true' : 'false',
            active: isPressedProp || isPressed ? 'true' : 'false',
            disabled: isDisabled ? 'true' : 'false',
            focusVisible:
              isFocusVisibleProp || isFocusVisible ? 'true' : 'false',
          }}
          disabled={isDisabled}
          {...resolvedProps}
        >
          {children}
        </StyledAlertDialogCloseButton>
      );
    }
  );

export default AlertDialogCloseButton;
