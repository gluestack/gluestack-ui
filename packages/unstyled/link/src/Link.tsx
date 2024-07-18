import React, { forwardRef, useMemo } from 'react';
import { useLink } from './useLink';
import { mergeRefs } from '@gluestack-ui/utils';

import { composeEventHandlers } from '@gluestack-ui/utils';

import { useFocusRing, useFocus } from '@react-native-aria/focus';
import { useHover, usePress } from '@react-native-aria/interactions';
import { LinkContext } from './Context';

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
        isExternal,
        href,
        onPress,
        ...props
      }: any,
      ref?: any
    ) => {
      const { isFocusVisible, focusProps: focusRingProps }: any =
        useFocusRing();
      const { pressProps, isPressed } = usePress({ isDisabled });
      const { isFocused, focusProps } = useFocus();
      const { isHovered, hoverProps }: any = useHover();

      const _ref = React.useRef(null);

      const { linkProps } = useLink({
        isExternal,
        href,
        onPress,
        _ref,
        isDisabled,
      });

      const contextValue = useMemo(() => {
        return {
          isHovered: isHoveredProp || isHovered,
          isFocused: isFocusedProp || isFocused,
          isPressed: isPressedProp || isPressed,
          isDisabled: isDisabled,
          isFocusVisible: isFocusVisibleProp || isFocusVisible,
        };
      }, [
        isHoveredProp,
        isHovered,
        isFocusedProp,
        isFocused,
        isPressedProp,
        isPressed,
        isDisabled,
        isFocusVisibleProp,
        isFocusVisible,
      ]);
      return (
        <LinkContext.Provider value={contextValue}>
          <StyledLink
            ref={mergeRefs([_ref, ref])}
            states={{
              hover: isHoveredProp || isHovered,
              focus: isFocusedProp || isFocused,
              active: isPressedProp || isPressed,
              disabled: isDisabled,
              focusVisible: isFocusVisibleProp || isFocusVisible,
            }}
            dataSet={{
              hover: isHoveredProp || isHovered ? 'true' : 'false',
              focus: isFocusedProp || isFocused ? 'true' : 'false',
              active: isPressedProp || isPressed ? 'true' : 'false',
              disabled: isDisabled ? 'true' : 'false',
              focusVisible:
                isFocusVisibleProp || isFocusVisible ? 'true' : 'false',
            }}
            disabled={isDisabled}
            {...linkProps}
            {...props}
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
            {children}
          </StyledLink>
        </LinkContext.Provider>
      );
    }
  );
