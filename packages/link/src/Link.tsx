import React, { forwardRef, useEffect } from 'react';
import { useLink } from './useLink';
import { mergeRefs } from '@gluestack-ui/utils';

import { composeEventHandlers } from '@gluestack-ui/utils';

import { useFocusRing, useFocus } from '@react-native-aria/focus';
import { useHover, usePress } from '@react-native-aria/interactions';
import { Platform } from 'react-native';

const usePressed = (onPressIn: () => any, onPressOut: () => any) => {
  if (Platform.OS === 'web') {
    return {
      pressEvents: {
        onMouseDown: onPressIn,
        onMouseUp: onPressOut,
        onTouchStart: onPressIn,
        onTouchEnd: onPressOut,
      },
    };
  }
  return {
    pressEvents: {
      onPressIn,
      onPressOut,
    },
  };
};

export const Link = <LinkProps,>(StyledLink: React.ComponentType<LinkProps>) =>
  forwardRef(
    (
      {
        children,
        isDisabled,
        isHovered: isHoveredProp,
        isPressed: isPressedProp,
        isFocused: isFocusedProp,
        isFocusVisible: isFocusVisibleProp,
        onPress,
        ...props
      }: any,
      ref?: any
    ) => {
      const { isFocusVisible, focusProps: focusRingProps }: any =
        useFocusRing();
      const { pressProps, isPressed } = usePress({ isDisabled });
      const { pressEvents } = usePressed(
        // @ts-ignore
        composeEventHandlers(props?.onPressIn, pressProps.onPressIn),
        composeEventHandlers(props?.onPressOut, pressProps.onPressOut)
      );
      const { isFocused, focusProps } = useFocus();
      const _ref = React.useRef(null);
      const { isHovered, hoverProps }: any = useHover({}, ref);
      const { linkProps } = useLink({
        isExternal: props?.isExternal,
        href: props?.href,
        onPress,
        _ref,
      });

      // return (
      //   <div
      //     onMouseOver={() => {
      //       console.log('hello mouse over');
      //     }}
      //   >
      //     hello
      //   </div>
      // );
      // console.log(pressProps, isPressed, pressEvents, 'helleo');
      return (
        <StyledLink
          ref={mergeRefs([_ref, ref])}
          states={{
            hover: isHoveredProp || isHovered,
            focus: isFocusedProp || isFocused,
            active: isPressedProp || isPressed,
            disabled: isDisabled,
            focusVisible: isFocusVisibleProp || isFocusVisible,
          }}
          disabled={isDisabled}
          {...props}
          {...linkProps}
          {...pressEvents}
          onMouseOver={() => {
            console.log('hello mouse over');
          }}
          // onPressIn={composeEventHandlers(
          //   props?.onPressIn,
          //   pressProps.onPressIn
          // )}
          // onPressOut={composeEventHandlers(
          //   props?.onPressOut,
          //   pressProps.onPressOut
          // )}
          // @ts-ignore - web only
          // onHoverIn={
          //   // () => {
          //   //   console.log('hello');
          //   // }
          //   composeEventHandlers(props?.onHoverIn, hoverProps.onHoverIn)
          // }
          // @ts-ignore - web only
          // onHoverOut={composeEventHandlers(
          //   props?.onHoverOut,
          //   hoverProps.onHoverOut
          // )}
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
        </StyledLink>
      );
    }
  );
