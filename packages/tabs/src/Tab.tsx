import { useFocusRing } from '@react-native-aria/focus';
import React, { memo } from 'react';
import { forwardRef } from 'react';
import type { PressableProps } from 'react-native';
import {
  useFocus,
  useHover,
  useIsPressed,
} from '@universa11y/react-native-aria';
import { composeEventHandlers } from '@universa11y/utils';
import { useTab } from './TabProvider';

export const Tab = <StyledTab,>(StyledTab: React.ComponentType<StyledTab>) =>
  memo(
    forwardRef(
      (
        {
          value,
          ...props
        }: StyledTab & PressableProps & { children?: any; value?: string },
        ref?: any
      ) => {
        const { focusProps: focusRingProps, isFocusVisible }: any =
          useFocusRing();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { pressableProps, isPressed } = useIsPressed();
        const { isFocused, focusProps } = useFocus();
        const { isHovered, hoverProps }: any = useHover();
        const [isActive, setIsActive] = React.useState(false);

        const { onChange, currentActiveTab } = useTab('TabContext');

        React.useEffect(() => {
          setIsActive(value === currentActiveTab);
        }, [value, currentActiveTab]);

        return (
          <StyledTab
            accessibilityRole="tab"
            ref={ref}
            states={{
              hover: isHovered,
              focus: isFocused,
              active: isActive,
              focusvisible: isFocusVisible,
            }}
            {...(props as StyledTab)}
            onPressIn={composeEventHandlers(
              props?.onPressIn,
              pressableProps.onPressIn
            )}
            onPressOut={() => onChange(value)}
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
            // sx={{
            //   style: {
            //     bg: isActive ? '$red500' : '$transparent',
            //     borderRadius: isActive ? '$full' : '$none',
            //   },
            // }}
          />
        );
      }
    )
  );
