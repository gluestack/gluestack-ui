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
const LeftThumbIndex = 0;
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
        scaleOnPressed = 1,
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
      // const [isFocused, setIsFocused] = React.useState(false)
      const [isPressed, setIsPressed] = React.useState(false);
      // const [isFocusVisible, setIsFocusVisible] = React.useState(false);
      // const [isHovered, setIsHovered] = React.useState(false);
      // const [isPressed, setIsPressed] = React.useState(false);
      const {
        state,
        trackLayout,
        orientation,
        isDisabled,
        isReversed,
        // isPressed,
        setIsHovered,
        // setIsPressed,
        setIsFocused,
        setIsFocusVisible,
        // isHoveredProp,
        // isDisabledProp,
        // isFocusedProp,
        // isFocusVisibleProp,
        // isPressedProp,
        trackRef,
      } = React.useContext(RangeSliderContext);
      // const handleFocus = (focusState: boolean, callback: any) => {
      //   setIsFocused(focusState);
      //   callback();
      // };
      const inputRef = React.useRef(null);
      // const { thumbProps, inputProps } = useSliderThumb(
      //   {
      //     index: LeftThumbIndex,
      //     trackLayout,
      //     inputRef,
      //     orientation: orientation,
      //   },
      //   state,
      //   isReversed
      // );

      let { thumbProps, inputProps } = useSliderThumb(
        {
          index: LeftThumbIndex,
          trackLayout,
          orientation,
          inputRef,
        },
        state
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
        state.getThumbPercent(LeftThumbIndex) * 100
      }%`;
      thumbStyles?.transform?.push({
        scale: state.isThumbDragging(LeftThumbIndex) ? scaleOnPressed : 1,
      });
      // thumbStyles?.transform?.push({
      //   translateX: trackLayout.width ? -trackLayout.width / 2 : 0,
      // });
      // transform: [{ translateX: layout.width ? -layout.width / 2 : 0 }],
      // left: `${state.getThumbPercent(LeftThumbIndex) * 100}%`,

      useEffect(() => {
        setIsPressed(state.isThumbDragging(LeftThumbIndex));
      }, [state, setIsPressed, isPressed]);

      React.useEffect(() => {
        setIsPressed(state.isThumbDragging(LeftThumbIndex));
      }, [state, setIsPressed, isPressed]);

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
            // @ts-ignore
            setThumbSize({
              height: layout?.nativeEvent?.layout?.height,
              width: layout?.nativeEvent?.layout?.width,
            });
          }}
          states={{
            hover: isHovered,
            disabled: isDisabled,
            focus: isFocused,
            focusVisible: isFocusVisible,
            active: isPressed,
          }}
          disabled={isDisabled}
          {...thumbProps}
          style={{
            ...style,
            ...thumbStyles,
          }}
          // style={{
          //   // @ts-ignore
          // }}
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
          ref={mergeRefs([mergeRefs([_ref, ref]), trackRef])}
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
            className={`thumb ${isFocusVisible ? 'focus' : ''} `}
          >
            {children}
            {Platform.OS === 'web' && (
              <VisuallyHidden>
                <input ref={inputRef} {...inputProps} {...focusProps} />
              </VisuallyHidden>
            )}
          </StyledRangeSliderThumbInteraction>
        </StyledRangeSliderThumb>
      );
    }
  );
}
export default RangeSliderThumb;
