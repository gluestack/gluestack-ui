import React, { memo, useEffect, forwardRef } from 'react';
import { useFocusRing, useFocus } from '@react-native-aria/focus';
import { useHover, usePress } from '@react-native-aria/interactions';
import { composeEventHandlers } from '@gluestack-ui/utils';
import { useTab } from './TabProvider';
import { useTabs } from './useTabs';

export const TabsTrigger = (StyledTabsTrigger: any) =>
  memo(
    forwardRef(
      (
        {
          value,
          children,
          isDisabled = false,
          isHovered: isHoveredProp,
          isFocused: isFocusedProp,
          isPressed: isPressedProp,
          isFocusVisible: isFocusVisibleProp,
          ...props
        }: any,
        ref?: any
      ) => {
        const { focusProps: focusRingProps, isFocusVisible }: any =
          useFocusRing();
        const { pressProps, isPressed } = usePress({
          isDisabled,
        });
        const { isFocused, focusProps } = useFocus();
        const { isHovered, hoverProps }: any = useHover();
        const { onValueChange, currentActiveTab, loop, orientation } =
          useTab('TabContext');
        const { tabProps } = useTabs(loop, orientation);

        useEffect(() => {
          if (isFocusVisible && !isDisabled) {
            onValueChange(value);
          }
        }, [isFocusVisible, onValueChange, value, isDisabled]);

        return (
          <StyledTabsTrigger
            role="tab"
            id={`tab-${value}`}
            aria-controls={`panel-${value}`}
            ref={ref}
            {...props}
            states={{
              hover: isHovered || isHoveredProp,
              focus: (isFocused && !isDisabled) || isFocusedProp,
              active:
                (value === currentActiveTab && !isDisabled) || isPressedProp,
              focusVisible:
                (isFocusVisible && !isDisabled) || isFocusVisibleProp,
              disabled: isDisabled,
            }}
            dataSet={{
              hover: isHoveredProp || isHovered ? 'true' : 'false',
              focus:
                isFocusedProp || (isFocused && !isDisabled) ? 'true' : 'false',
              active:
                isPressedProp || (value === currentActiveTab && !isDisabled)
                  ? 'true'
                  : 'false',
              focusVisible:
                isFocusVisibleProp || (isFocusVisible && !isDisabled)
                  ? 'true'
                  : 'false',
              disabled: isDisabled ? 'true' : 'false',
            }}
            disabled={isDisabled}
            tabIndex={!isDisabled ? 0 : -1}
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
                  active: value === currentActiveTab && !isDisabled,
                  pressed: isPressed,
                  focused: isFocused && !isDisabled,
                  disabled: isDisabled,
                  focusVisible: isFocusVisible && !isDisabled,
                })
              : children}
          </StyledTabsTrigger>
        );
      }
    )
  );
