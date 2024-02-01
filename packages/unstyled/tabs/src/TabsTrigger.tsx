import { useFocusRing, useFocus } from '@react-native-aria/focus';
import React, { memo, useEffect } from 'react';
import { forwardRef } from 'react';
import type { PressableProps } from 'react-native';
import { useHover, usePress } from '@react-native-aria/interactions';
import { composeEventHandlers } from '@gluestack-ui/utils';
import { useTab } from './TabProvider';
import { useTabs } from './useTabs';

export const TabsTrigger = <StyledTabsTrigger,>(
  StyledTabsTrigger: React.ComponentType<StyledTabsTrigger>
) =>
  memo(
    forwardRef(
      (
        {
          value,
          children,
          isDisabled,
          ...props
        }: StyledTabsTrigger &
          PressableProps & {
            children?: any;
            value?: string;
            isDisabled?: boolean;
            onSelect: (key: string) => void;
          },
        ref?: any
      ) => {
        const { focusProps: focusRingProps, isFocusVisible }: any =
          useFocusRing();
        const { pressProps, isPressed } = usePress({
          isDisabled,
        });
        const { isFocused, focusProps } = useFocus();
        const { isHovered, hoverProps }: any = useHover();
        const { onValueChange, currentActiveTab, loop } = useTab('TabContext');
        const { tabProps } = useTabs(loop);

        useEffect(() => {
          if (isFocusVisible) {
            onValueChange(value);
          }
        }, [isFocusVisible, onValueChange, value]);

        return (
          <StyledTabsTrigger
            role="tab"
            ref={ref}
            states={{
              hover: isHovered,
              focus: isFocused && !isDisabled,
              active: value === currentActiveTab,
              focusVisible: isFocusVisible && !isDisabled,
              disabled: isDisabled,
            }}
            disabled={isDisabled ? true : false}
            focusable={!isDisabled}
            // opacity={isDisabled ? 0.5 : 1}
            // importantForAccessibility={
            //   isDisabled ? 'no-hide-descendants' : 'auto'
            // }
            // accessibilityState={{ disabled: isDisabled }}
            tabIndex={value === currentActiveTab ? 0 : -1}
            {...(props as StyledTabsTrigger)}
            onPressIn={composeEventHandlers(
              props?.onPressIn,
              pressProps.onPressIn
            )}
            onPressOut={() => onValueChange(value)}
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
            {...tabProps}
          >
            {typeof children === 'function'
              ? children({
                  hovered: isHovered,
                  active: value === currentActiveTab,
                  pressed: isPressed,
                  focused: isFocused && !isDisabled,
                })
              : children}
          </StyledTabsTrigger>
        );
      }
    )
  );
