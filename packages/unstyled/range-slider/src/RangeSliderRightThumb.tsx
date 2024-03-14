import React, { forwardRef, useEffect } from 'react';
import { Platform } from 'react-native';
import { useSliderThumb } from '@react-native-aria/slider';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { RangeSliderContext } from './Context';
import { useHover } from '@react-native-aria/interactions';
import { mergeRefs } from '@gluestack-ui/utils';
import type { IRangeSliderThumbProps } from './types';
import { useFocusRing, useFocus } from '@react-native-aria/focus';
import { composeEventHandlers } from '@gluestack-ui/utils';

const positionMap = new Map([
  ['horizontal true', 'right'],
  ['horizontal false', 'left'],
  ['vertical true', 'top'],
  ['vertical false', 'bottom'],
]);
const RightThumbIndex = 1;

function RangeSliderThumb<
  StyledRangeSliderThumb,
  StyledRangeSliderThumbInteraction
>(
  StyledRangeSliderThumb: React.ComponentType<StyledRangeSliderThumb>,
  StyledRangeSliderThumbInteraction: React.ComponentType<StyledRangeSliderThumbInteraction>
) {
  return forwardRef(
    (
      {
        children,
        // FIX: Commenting to fix linting error
        // scaleOnPressed = 1,
        style,
        ...props
      }: StyledRangeSliderThumbInteraction &
        StyledRangeSliderThumbInteraction &
        IRangeSliderThumbProps & { children?: any; style?: any },
      ref?: any
    ) => {
      const [setThumbSize] = React.useState({
        height: 0,
        width: 0,
      });

      const _ref = React.useRef(null);
      const { isHovered } = useHover({}, _ref);

      const {
        state,
        trackLayout,
        orientation,
        isDisabled,
        isReversed,
        isPressed,
        setIsHovered,
        setIsPressed,
        setIsFocused,
        setIsFocusVisible,
        isHoveredProp,
        isDisabledProp,
        isFocusedProp,
        isFocusVisibleProp,
        isPressedProp,
      } = React.useContext(RangeSliderContext);

      const inputRef = React.useRef(null);
      const { thumbProps, inputProps } = useSliderThumb(
        {
          index: RightThumbIndex,
          trackLayout,
          inputRef,
          orientation: orientation,
        },
        state,
        isReversed
      );
      const { isFocusVisible, focusProps: focusRingProps }: any =
        useFocusRing();
      const { isFocused, focusProps } = useFocus();

      const thumbStyles: any = {
        // transform:
        //   orientation === 'vertical'
        //     ? [
        //         {
        //           translateY: isReversed
        //             ? -thumbSize?.height / 2
        //             : thumbSize?.height / 2,
        //         },
        //       ]
        //     : [
        //         {
        //           translateX: isReversed
        //             ? thumbSize?.height / 2
        //             : -thumbSize?.height / 2,
        //         },
        //       ],
      };
      thumbStyles[`${positionMap.get(`${orientation} ${isReversed}`)}`] = `${
        state.getThumbPercent(RightThumbIndex) * 100
      }%`;
      thumbStyles?.transform?.push({
        transform: {
          translateX: trackLayout.width ? -trackLayout.width / 2 : 0,
        },
        // scale: state.isThumbDragging(0) ? scaleOnPressed : 1,
      });

      useEffect(() => {
        setIsPressed(state.isThumbDragging(RightThumbIndex));
      }, [state, setIsPressed]);

      useEffect(() => {
        setIsFocused(isFocused);
      }, [isFocused, setIsFocused]);

      useEffect(() => {
        setIsFocusVisible(isFocusVisible);
      }, [isFocusVisible, setIsFocusVisible]);

      useEffect(() => {
        setIsHovered(isHovered);
      }, [isHovered, setIsHovered]);

      return (
        <StyledRangeSliderThumb
          onLayout={(layout: any) => {
            setThumbSize({
              height: layout?.nativeEvent?.layout?.height,
              width: layout?.nativeEvent?.layout?.width,
            });
          }}
          states={{
            hover: isHovered || isHoveredProp,
            disabled: isDisabled || isDisabledProp,
            focus: isFocused || isFocusedProp,
            focusVisible: isFocusVisible || isFocusVisibleProp,
            active: isPressed || isPressedProp,
          }}
          disabled={isDisabled}
          {...thumbProps}
          style={{
            ...style,
            ...thumbStyles,
          }}
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
          ref={mergeRefs([_ref, ref])}
          {...props}
        >
          {/* @ts-ignore */}
          <StyledRangeSliderThumbInteraction
            states={{
              hover: isHovered,
              focus: isFocused,
              focusVisible: isFocusVisible,
              disabled: isDisabled,
              active: isPressed,
            }}
          >
            {children}
            {Platform.OS === 'web' && (
              <VisuallyHidden>
                <input ref={inputRef} {...inputProps} />
              </VisuallyHidden>
            )}
          </StyledRangeSliderThumbInteraction>
        </StyledRangeSliderThumb>
      );
    }
  );
}
export default RangeSliderThumb;
