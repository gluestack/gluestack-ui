import React, { forwardRef } from 'react';
import { useSliderState } from '@react-stately/slider';
import { useLayout } from '@gluestack-ui/hooks';
import type { IRangeSliderProps } from './types';
import { RangeSliderContext } from './Context';
import { useSlider } from '@react-aria/slider';
import { useFormControlContext } from '@gluestack-ui/form-control';

function RangeSlider<StyledSliderProps>(
  StyledRangeSlider: React.ComponentType<StyledSliderProps>
) {
  return forwardRef(
    (
      {
        orientation = 'horizontal',
        isReversed = false,
        'isHovered': isHoveredProp,
        'isDisabled': isDisabledProp,
        'isFocused': isFocusedProp,
        'isFocusVisible': isFocusVisibleProp,
        'isPressed': isPressedProp,
        // @ts-ignore
        'aria-label': ariaLabel = 'Slider',
        children,
        ...props
      }: StyledSliderProps & IRangeSliderProps,
      ref?: any
    ) => {
      const formControlContext = useFormControlContext();

      const { isDisabled, isReadOnly, ...newProps } = {
        ...formControlContext,
        ...props,
        'aria-label': ariaLabel,
      } as any;
      let trackRef = React.useRef(null);
      // @ts-ignore
      if (props.value && props?.value?.prop?.constructor === Array) {
        //@ts-ignore - React Native Aria slider accepts array of values
        newProps.value = props.value;
      }

      if (
        props.defaultValue &&
        // @ts-ignore
        props?.defaultValue?.prop?.constructor === Array
      ) {
        //@ts-ignore - React Native Aria slider accepts array of values
        newProps.defaultValue = props.defaultValue;
      }
      props = newProps;

      const { onLayout, layout: trackLayout } = useLayout();
      const updatedProps: IRangeSliderProps = Object.assign({}, props);

      if (isReadOnly || isDisabled) {
        updatedProps.isDisabled = true;
      }

      const state = useSliderState({
        ...updatedProps,
        //@ts-ignore
        numberFormatter: { format: (e) => e },
        minValue: props.minValue,
        maxValue: props.maxValue,
        orientation: orientation ?? 'horizontal',
        // orientation: 'vertical',
        onChange: (val: any) => {
          console.log(val, 'values >>>>>>');
          props.onChange && props.onChange(val);
        },
        onChangeEnd: (val: any) => {
          props.onChangeEnd && props.onChangeEnd(val);
        },
      });
      const { groupProps, trackProps, outputProps } = useSlider(
        props as unknown as any,
        state,
        trackRef
      );
      const [isFocused, setIsFocused] = React.useState(false);
      const [isFocusVisible, setIsFocusVisible] = React.useState(false);
      const [isHovered, setIsHovered] = React.useState(false);
      const [isPressed, setIsPressed] = React.useState(false);
      const contextValue = React.useMemo(() => {
        return {
          trackLayout,
          state,
          orientation: orientation,
          isDisabled: isDisabled,
          isFocused: isFocused,
          setIsFocused: setIsFocused,
          isFocusVisible: isFocusVisible,
          setIsFocusVisible: setIsFocusVisible,
          outputProps,
          isPressed: isPressed,
          setIsPressed: setIsPressed,
          isHovered: isHovered,
          setIsHovered: setIsHovered,
          isReversed: isReversed,
          trackProps,
          trackRef,
          isReadOnly: isReadOnly,
          onTrackLayout: onLayout,
          isHoveredProp,
          isDisabledProp,
          isFocusedProp,
          isFocusVisibleProp,
          isPressedProp,
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [
        trackProps,
        trackRef,
        trackLayout,
        state,
        orientation,
        isDisabled,
        isReversed,
        isReadOnly,
        onLayout,
        isFocused,
        setIsFocused,
        isFocusVisible,
        setIsFocusVisible,
        isPressed,
        setIsPressed,
        isHoveredProp,
        isDisabledProp,
        isFocusedProp,
        isFocusVisibleProp,
        isPressedProp,
      ]);
      // console.log(groupProps, 'GROUPPPP');
      return (
        <RangeSliderContext.Provider value={contextValue}>
          <StyledRangeSlider
            {...(props as StyledSliderProps)}
            ref={ref}
            states={{
              hover: isHovered || isHoveredProp,
              disabled: isDisabled || isDisabledProp,
              focus: isFocused || isFocusedProp,
              focusVisible: isFocusVisible || isFocusVisibleProp,
              active: isPressed || isPressedProp,
            }}
            orientation={orientation ?? 'horizontal'}
            isReversed={isReversed ?? false}
            {...groupProps}
          >
            {children}
          </StyledRangeSlider>
        </RangeSliderContext.Provider>
      );
    }
  );
}
export default RangeSlider;
