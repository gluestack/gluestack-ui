import { useFocusRing } from '@react-native-aria/focus';
import React, { forwardRef } from 'react';
import { UIContext } from '../UIProvider';
import { useFocus, useHover, useIsPressed } from '../ReactNativeAria';

function composeEventHandlers<E>(
  originalEventHandler?: null | ((event: E) => void),
  ourEventHandler?: (event: E) => void
) {
  return function handleEvent(event: E) {
    originalEventHandler?.(event);
    ourEventHandler?.(event);
  };
}

const Pressable = ({ children, ...props }: any, ref: any) => {
  // ref: any
  let { focusProps: focusRingProps }: any = useFocusRing();
  const { pressableProps, isPressed } = useIsPressed();
  let { isFocused, focusProps } = useFocus();
  const { isHovered, hoverProps }: any = useHover();
  const { Pressable: StyledPressable } = React.useContext(UIContext);

  return (
    <StyledPressable
      ref={ref}
      states={{
        hover: isHovered,
        focus: isFocused,
        active: isPressed,
      }}
      {...props}
      onPressIn={composeEventHandlers(
        props?.onPressIn,
        pressableProps.onPressIn
      )}
      onPressOut={composeEventHandlers(
        props?.onPressOut,
        pressableProps.onPressOut
      )}
      // @ts-ignore - web only
      onHoverIn={composeEventHandlers(props?.onHoverIn, hoverProps.onHoverIn)}
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
    </StyledPressable>
  );
};

export default forwardRef(Pressable);
