import React, { forwardRef } from 'react';
import {
  useFocus,
  useHover,
  useIsPressed,
} from '@gluestack-ui/react-native-aria';
import { useFocusRing } from '@react-native-aria/focus';
import { composeEventHandlers } from '@gluestack-ui/utils';

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
      const { pressableProps, isPressed } = useIsPressed();
      const { isFocused, focusProps } = useFocus();
      const { isHovered, hoverProps }: any = useHover();

      return (
        <StyledFab
          ref={ref}
          accessibilityRole={props?.accessibilityRole || 'button'}
          states={{
            hover: isHoveredProp || isHovered,
            focus: isFocusedProp || isFocused,
            active: isPressedProp || isPressed,
            disabled: isDisabled,
            focusVisible: isFocusVisibleProp || isFocusVisible,
          }}
          disabled={isDisabled}
          {...(props as StyledFab)}
          onPressIn={composeEventHandlers(
            props?.onPressIn,
            pressableProps.onPressIn
          )}
          onPressOut={composeEventHandlers(
            props?.onPressOut,
            pressableProps.onPressOut
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
