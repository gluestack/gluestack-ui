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
      }: StyledSliderProps & ISliderProps,
      ref?: any
    ) => {
      const formControlContext = useFormControlContext();
      const [isFocused, setIsFocused] = React.useState(false);
      const [isFocusVisible, setIsFocusVisible] = React.useState(false);
      const [isHovered, setIsHovered] = React.useState(false);
      const [isPressed, setIsPressed] = React.useState(false);
      const { isDisabled, isReadOnly, ...newProps } = {
        ...formControlContext,
        ...props,
        'aria-label': ariaLabel,
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
        trackLayout,
        isReversed
      );
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
          isPressed: isPressed,
          setIsPressed: setIsPressed,
          isHovered: isHovered,
          setIsHovered: setIsHovered,
          isReversed: isReversed,
          trackProps,
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

      return (
        <SliderContext.Provider value={contextValue}>
          <StyledSlider
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
          >
            {children}
          </StyledSlider>
        </SliderContext.Provider>
      );
    }
  );
}
export default Slider;
