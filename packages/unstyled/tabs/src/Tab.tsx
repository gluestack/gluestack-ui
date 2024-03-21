import { useFocusRing, useFocus } from '@react-native-aria/focus';
import React, { memo, useEffect } from 'react';
import { forwardRef } from 'react';
import type { PressableProps } from 'react-native';
import { useHover, usePress } from '@react-native-aria/interactions';
import { composeEventHandlers } from '@gluestack-ui/utils';
import { useTab } from './TabProvider';
import { useTabs } from './useTabs';

export const Tab = <StyledTab,>(StyledTab: React.ComponentType<StyledTab>) =>
  memo(
    forwardRef(
      (
        {
          value,
          children,
          ...props
        }: StyledTab &
          PressableProps & {
            children?: any;
            value?: string;
            onSelect: (key: string) => void;
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

        const { onChange, currentActiveTab } = useTab('TabContext');

        const { tabProps } = useTabs();

        useEffect(() => {
          if (isFocusVisible) {
            onChange(value);
          }
        }, [isFocusVisible, onChange, value]);

        return (
          <StyledTab
            accessiblityRole="tab"
            ref={ref}
            states={{
              hover: isHovered,
              focus: isFocused,
              active: value === currentActiveTab,
              focusVisible: isFocusVisible,
            }}
            dataSet={{
              hover: isHovered ? 'true' : 'false',
              focus: isFocused ? 'true' : 'false',
              active: value === currentActiveTab ? 'true' : 'false',
              focusVisible: isFocusVisible ? 'true' : 'false',
            }}
            tabIndex={value === currentActiveTab ? 0 : -1}
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
            {...tabProps}
          >
            {typeof children === 'function'
              ? children({
                  hovered: isHovered,
                  active: value === currentActiveTab,
                  pressed: isPressed,
                  focused: isFocused,
                })
              : children}
          </StyledTab>
        );
      }
    )
  );
