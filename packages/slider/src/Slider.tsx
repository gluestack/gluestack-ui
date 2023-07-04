import React, { forwardRef } from 'react';
import { useSliderState } from '@react-stately/slider';
import { useLayout } from '@gluestack-ui/hooks';
import type { ISliderProps } from './types';
import { SliderContext } from './Context';
import { useSlider } from '@react-native-aria/slider';
import { useFormControlContext } from '@gluestack-ui/form-control';

function Slider<StyledSliderProps>(
  StyledSlider: React.ComponentType<StyledSliderProps>
) {
  return forwardRef(
    (
      {
        orientation = 'horizontal',
        isReversed,
        thumbSize = 16,
        sliderTrackHeight = 8,
        children,
        ...props
      }: StyledSliderProps & ISliderProps,
      ref?: any
    ) => {
      const formControlContext = useFormControlContext();
      const { isDisabled, isReadOnly, ...newProps } = {
        ...formControlContext,
        ...props,
        'aria-label': props.accessibilityLabel ?? 'Slider',
      } as any;

      if (typeof props.value === 'number') {
        //@ts-ignore - React Native Aria slider accepts array of values
        newProps.value = [props.value];
      }

      if (typeof props.defaultValue === 'number') {
        //@ts-ignore - React Native Aria slider accepts array of values
        newProps.defaultValue = [props.defaultValue];
      }

      props = newProps;

      const { onLayout, layout: trackLayout } = useLayout();
      const updatedProps: ISliderProps = Object.assign({}, props);

      if (isReadOnly || isDisabled) {
        updatedProps.isDisabled = true;
      }

      const state = useSliderState({
        ...updatedProps,
        //@ts-ignore
        numberFormatter: { format: (e) => e },
        minValue: props.minValue,
        maxValue: props.maxValue,
        onChange: (val: any) => {
          props.onChange && props.onChange(val[0]);
        },
        onChangeEnd: (val: any) => {
          props.onChangeEnd && props.onChangeEnd(val[0]);
        },
      });

      const { trackProps } = useSlider(
        props as unknown as any,
        state,
        trackLayout
      );

      const contextValue = React.useMemo(() => {
        return {
          trackLayout,
          state,
          orientation: orientation,
          isDisabled: isDisabled,
          isReversed: isReversed,
          trackProps,
          isReadOnly: isReadOnly,
          onTrackLayout: onLayout,
          thumbSize: thumbSize,
          sliderSize: sliderTrackHeight,
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [
        trackLayout,
        state,
        orientation,
        isDisabled,
        isReversed,
        isReadOnly,
        onLayout,
        thumbSize,
        sliderTrackHeight,
      ]);
      return (
        <SliderContext.Provider value={contextValue}>
          <StyledSlider {...(props as StyledSliderProps)} ref={ref}>
            {children}
          </StyledSlider>
        </SliderContext.Provider>
      );
    }
  );
}
export default Slider;
