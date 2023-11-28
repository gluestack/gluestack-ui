import { useFocusRing, useFocus } from '@react-native-aria/focus';
import React, { memo } from 'react';
import { forwardRef } from 'react';
import type { PressableProps } from 'react-native';
import { useHover, usePress } from '@react-native-aria/interactions';
import { composeEventHandlers } from '@gluestack-ui/utils';
import { useTab } from './TabProvider';

export const Tab = <StyledTab,>(StyledTab: React.ComponentType<StyledTab>) =>
  memo(
    forwardRef(
      (
        {
          value,
          children,
          ...props
        }: StyledTab & PressableProps & { children?: any; value?: string },
        ref?: any
      ) => {
        const { focusProps: focusRingProps, isFocusVisible }: any =
          useFocusRing();
        const { pressProps, isPressed } = usePress({
          isDisabled: props.disabled ?? undefined,
        });
        const { isFocused, focusProps } = useFocus();
        const { isHovered, hoverProps }: any = useHover();
        const [isActive, setIsActive] = React.useState(false);

        const { onChange, currentActiveTab } = useTab('TabContext');

        React.useEffect(() => {
          setIsActive(value === currentActiveTab);
        }, [value, currentActiveTab]);

        return (
          <StyledTab
            role="tab"
            ref={ref}
            states={{
              hover: isHovered,
              focus: isFocused,
              active: isActive,
              focusVisible: isFocusVisible,
            }}
            {...(props as StyledTab)}
            onPressIn={composeEventHandlers(
              props?.onPressIn,
              pressProps.onPressIn
            )}
            onPressOut={() => onChange(value)}
            onPress={composeEventHandlers(props?.onPress, pressProps.onPress)}
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
                  active: isActive,
                  pressed: isPressed,
                  focused: isFocused,
                })
              : children}
          </StyledTab>
        );
      }
    )
  );
