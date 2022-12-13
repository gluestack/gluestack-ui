import React, { forwardRef } from 'react';
import { Platform } from 'react-native';
import { useSliderThumb } from '@react-native-aria/slider';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { SliderContext } from './Context';
import { useHover } from '@react-native-aria/interactions';
import { mergeRefs } from '../utils';
import { UIContext } from '../UIProvider';

function SliderThumb(
  { children, onFocus, onBlur, scaleOnPressed = 1, ...props }: any,
  ref: any
) {
  const [isPressed, setIsPressed] = React.useState(false);

  const [isFocused, setIsFocused] = React.useState(false);
  const handleFocus = (focusState: boolean, callback: any) => {
    setIsFocused(focusState);
    callback();
  };

  const _ref = React.useRef(null);
  const { isHovered } = useHover({}, _ref);

  const { state, trackLayout, orientation, thumbSize } =
    React.useContext(SliderContext);
  const inputRef = React.useRef(null);
  const { thumbProps, inputProps } = useSliderThumb(
    {
      index: 0,
      trackLayout,
      inputRef,
      orientation,
    },
    state
  );

  React.useEffect(() => {
    setIsPressed(state.isThumbDragging(0));
  }, [state]);

  const { StyledSliderThumb, StyledSliderThumbInteraction } =
    React.useContext(UIContext);

  const thumbStyles: any = {
    bottom:
      orientation === 'vertical'
        ? `${state.getThumbPercent(0) * 100}%`
        : undefined,
    left:
      orientation !== 'vertical'
        ? `${state.getThumbPercent(0) * 100}%`
        : undefined,
    transform:
      orientation === 'vertical'
        ? [{ translateY: parseInt(thumbSize) / 2 }]
        : [{ translateX: -parseInt(thumbSize) / 2 }],
  };

  thumbStyles.transform.push({
    scale: state.isThumbDragging(0) ? scaleOnPressed : 1,
  });

  return (
    <StyledSliderThumb
      states={{
        hover: isHovered,
        focus: isFocused,
        press: isPressed,
      }}
      {...thumbProps}
      sx={{ style: { ...thumbStyles } }}
      onFocus={(e: any) => {
        handleFocus(true, onFocus ? () => onFocus(e) : () => {});
      }}
      onBlur={(e: any) => {
        handleFocus(false, onBlur ? () => onBlur(e) : () => {});
      }}
      // {...(isReadOnly && _readOnly)}
      // {...(isDisabled && _disabled)}
      ref={mergeRefs([_ref, ref])}
      {...props}
    >
      <StyledSliderThumbInteraction
        states={{
          hover: isHovered,
        }}
      >
        {children}
        {Platform.OS === 'web' && (
          <VisuallyHidden>
            <input ref={inputRef} {...inputProps} />
          </VisuallyHidden>
        )}
      </StyledSliderThumbInteraction>
    </StyledSliderThumb>
  );
}

SliderThumb.displayName = 'SliderThumb';

export default forwardRef(SliderThumb);
