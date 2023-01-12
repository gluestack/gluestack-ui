import { useFocusRing } from '@react-native-aria/focus';
import React, { forwardRef } from 'react';
import { useFocus, useHover, useIsPressed } from '../ReactNativeAria';
import { composeEventHandlers } from '../utils';

const Pressable = (StyledPressable: any) =>
  forwardRef(
    (
      {
        children,
        isHovered: isHoveredProp,
        isPressed: isPressedProp,
        isFocused: isFocusedProp,
        ...props
      }: any,
      ref: any
    ) => {
      const { isFocusVisible, focusProps: focusRingProps }: any =
        useFocusRing();
      const { pressableProps, isPressed } = useIsPressed();
      const { isFocused, focusProps } = useFocus();
      const { isHovered, hoverProps }: any = useHover();

      return (
        <StyledPressable
          ref={ref}
          states={{
            hover: isHoveredProp || isHovered,
            focus: isFocusedProp || isFocused,
            active: isPressedProp || isPressed,
            focusvisible: isFocusVisible,
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
          {typeof children !== 'function'
            ? children
            : children({
                isHovered: isHoveredProp || isHovered,
                isFocused: isFocusedProp || isFocused,
                isPressed: isPressedProp || isPressed,
                isFocusVisible,
              })}
        </StyledPressable>
      );
    }
  );

export default Pressable;
