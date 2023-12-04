import { useFocusRing, useFocus } from '@react-native-aria/focus';
import React, { forwardRef } from 'react';
import type { PressableProps } from 'react-native';
import { useHover, usePress } from '@react-native-aria/interactions';
import { composeEventHandlers } from '@gluestack-ui/utils';

function Pressable<T>(StyledPressable: React.ComponentType<T>) {
  return forwardRef(
    (
      {
        children,
        ...props
      }: T &
        Omit<PressableProps, 'children'> & { tabIndex?: 0 | -1 } & {
          children?:
            | (({
                hovered,
                pressed,
                focused,
                focusVisible,
                disabled,
              }: {
                hovered?: boolean;
                pressed?: boolean;
                focused?: boolean;
                focusVisible?: boolean;
                disabled?: boolean;
              }) => React.ReactNode)
            | React.ReactNode;
        },
      ref?: any
    ) => {
      const { focusProps: focusRingProps, isFocusVisible }: any =
        useFocusRing();
      const { pressProps, isPressed } = usePress({
        isDisabled: props.disabled ?? undefined,
      });
      const { isFocused, focusProps } = useFocus();
      const { isHovered, hoverProps }: any = useHover();
      return (
        <StyledPressable
          ref={ref}
          states={{
            hover: isHovered,
            focus: isFocused,
            active: isPressed,
            disabled: props.disabled,
            focusVisible: isFocusVisible,
          }}
          {...(props as T)}
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
            ? children({
                hovered: isHovered,
                focused: isFocused,
                pressed: isPressed,
                disabled: props.disabled ?? undefined,
                focusVisible: isFocusVisible,
              })
            : children}
        </StyledPressable>
      );
    }
  );
}
export default Pressable;
