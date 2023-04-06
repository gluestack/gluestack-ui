import React from 'react';
import { composeEventHandlers } from '@gluestack-ui/utils';
import {
  useHover,
  useIsPressed,
  usePressed,
} from '@gluestack-ui/react-native-aria';
import { useFocusRing } from '@react-native-aria/focus';
import { useMenuItem } from '@react-native-aria/menu';

export function MenuItem({
  StyledMenuItem,
  item,
  state,
  onAction,
  onClose,
}: any) {
  // Get props for the menu item element
  const ref = React.useRef(null);
  const { menuItemProps } = useMenuItem(
    {
      key: item.key,
      onAction,
      onClose,
    },
    state,
    ref
  );

  // Handle focus events so we can apply highlighted
  // style to the focused menu item

  const { focusProps: focusRingProps, isFocusVisible }: any = useFocusRing();
  const { pressableProps, isPressed } = useIsPressed();
  const { isHovered, hoverProps }: any = useHover();
  const isFocused = state.selectionManager.focusedKey === item.key;
  const { children, ...rest } = item.props;

  const { pressEvents } = usePressed(
    composeEventHandlers(rest?.onPressIn, pressableProps.onPressIn),
    composeEventHandlers(rest?.onPressOut, pressableProps.onPressOut)
  );
  return (
    <StyledMenuItem
      {...menuItemProps}
      ref={ref}
      states={{
        hover: isHovered,
        focus: isFocused,
        active: isPressed,
        focusvisible: isFocusVisible,
      }}
      {...rest}
      {...pressEvents}
      // @ts-ignore - web only
      onHoverIn={composeEventHandlers(rest?.onHoverIn, hoverProps.onHoverIn)}
      // @ts-ignore - web only
      onHoverOut={composeEventHandlers(rest?.onHoverOut, hoverProps.onHoverOut)}
      // @ts-ignore - web only
      onFocus={composeEventHandlers(
        composeEventHandlers(rest?.onFocus),
        focusRingProps.onFocus
      )}
      // @ts-ignore - web only
      onBlur={composeEventHandlers(
        composeEventHandlers(rest?.onBlur),
        focusRingProps.onBlur
      )}
    >
      {children}
    </StyledMenuItem>
  );
}
