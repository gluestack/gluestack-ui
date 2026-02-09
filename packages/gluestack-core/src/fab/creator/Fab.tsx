import React, { forwardRef } from 'react';
import { useHover, usePress } from '@gluestack-ui/utils/aria';
import { useFocusRing, useFocus } from '@gluestack-ui/utils/aria';
import { composeEventHandlers } from '@gluestack-ui/utils/common';

function Fab<StyledFab>(StyledFab: React.ComponentType<StyledFab>) {
  return forwardRef(
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
      const { isFocusVisible, focusProps: focusRingProps }: any =
        useFocusRing();
      const { pressProps, isPressed } = usePress({ isDisabled });
      const { isFocused, focusProps } = useFocus();
      const { isHovered, hoverProps }: any = useHover();

      return (
        <StyledFab
          ref={ref}
          role={props?.role || 'button'}
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
          {...(props as StyledFab)}
          onPressIn={composeEventHandlers(
            props?.onPressIn,
            pressProps.onPressIn
          )}
          onPressOut={composeEventHandlers(
            props?.onPressOut,
            pressProps.onPressOut
          )}
          onHoverIn={composeEventHandlers(
            props?.onHoverIn,
            hoverProps.onHoverIn
          )}
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
          {children}
        </StyledFab>
      );
    }
  );
}
export default Fab;
