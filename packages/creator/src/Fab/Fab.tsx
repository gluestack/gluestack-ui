import React, { forwardRef } from 'react';
import { useFocus, useHover, useIsPressed } from '../ReactNativeAria';
import { useFocusRing } from '@react-native-aria/focus';
import type { PressableProps } from 'react-native';

function composeEventHandlers<E>(
  originalEventHandler?: null | ((event: E) => void),
  ourEventHandler?: (event: E) => void
) {
  return function handleEvent(event: E) {
    originalEventHandler?.(event);
    ourEventHandler?.(event);
  };
}
function Fab<StyledFab>(StyledFab: React.ComponentType<StyledFab>) {
  return forwardRef(
    ({ children, ...props }: StyledFab & PressableProps, ref: any) => {
      let { focusProps: focusRingProps }: any = useFocusRing();
      const { pressableProps, isPressed } = useIsPressed();
      let { isFocused, focusProps } = useFocus();
      const { isHovered, hoverProps }: any = useHover();

      return (
        <StyledFab
          ref={ref}
          {...(props as StyledFab)}
          states={{
            hover: isHovered,
            focus: isFocused,
            active: isPressed,
          }}
          onPressIn={composeEventHandlers(
            props?.onPressIn,
            pressableProps.onPressIn
          )}
          onPressOut={composeEventHandlers(
            props?.onPressOut,
            pressableProps.onPressOut
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
          // @ts-ignore - web only
          onFocus={composeEventHandlers(
            composeEventHandlers(props?.onFocus, focusProps.onFocus),
            focusRingProps.onFocus
          )}
          // @ts-ignore - web only
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
