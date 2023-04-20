import { useFocusRing } from '@react-native-aria/focus';
import React, { forwardRef } from 'react';
import type { PressableProps } from 'react-native';
import {
  useFocus,
  useHover,
  useIsPressed,
} from '@gluestack-ui/react-native-aria';
import { composeEventHandlers } from '@gluestack-ui/utils';

function Pressable<T>(StyledPressable: React.ComponentType<T>) {
  return forwardRef(
    (
      {
        children,
        ...props
      }: T &
        Omit<PressableProps, 'children'> & {
          children?:
            | (({
                isHovered,
                isPressed,
                isFocused,
              }: {
                isHovered?: boolean;
                isPressed?: boolean;
                isFocused?: boolean;
              }) => React.ReactNode)
            | React.ReactNode;
        },
      ref?: any
    ) => {
      const { focusProps: focusRingProps, isFocusVisible }: any =
        useFocusRing();
      const { pressableProps, isPressed } = useIsPressed();
      const { isFocused, focusProps } = useFocus();
      const { isHovered, hoverProps }: any = useHover();

      return (
        <StyledPressable
          ref={ref}
          states={{
            hover: isHovered,
            focus: isFocused,
            active: isPressed,
            focusvisible: isFocusVisible,
          }}
          {...(props as T)}
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
          {typeof children === 'function'
            ? children({ isHovered, isPressed, isFocused })
            : children}
        </StyledPressable>
      );
    }
  );
}
export default Pressable;
