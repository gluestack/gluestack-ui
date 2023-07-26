import React, { forwardRef } from 'react';
import { SliderContext } from './Context';
import { Platform } from 'react-native';
import { mergeRefs } from '@gluestack-ui/utils';

function SliderFilledTrack<StyledSliderFilledTrack>(
  StyledSliderFilledTrack: React.ComponentType<StyledSliderFilledTrack>
) {
  return forwardRef(({ style, ...props }: any, ref?: any) => {
    const _ref = React.useRef(null);

    const {
      isReversed,
      state,
      trackLayout,
      orientation,
      isDisabled,
      isFocused,
      isHovered,
      isPressed,
      isFocusVisible,
      isHoveredProp,
      isDisabledProp,
      isFocusedProp,
      isFocusVisibleProp,
      isPressedProp,
    } = React.useContext(SliderContext);

    const getSliderTrackPosition = () => {
      if (orientation === 'vertical') {
        return isReversed
          ? trackLayout.height - trackLayout.height * state.getThumbPercent(0)
          : trackLayout.height * state.getThumbPercent(0);
      } else {
        return isReversed
          ? trackLayout.width - trackLayout.width * state.getThumbPercent(0)
          : trackLayout.width * state.getThumbPercent(0);
      }
    };

    const sliderTrackPosition = getSliderTrackPosition();

    const positionProps =
      orientation === 'vertical'
        ? { height: sliderTrackPosition }
        : { width: sliderTrackPosition };
    return (
      <StyledSliderFilledTrack
        {...props}
        ref={mergeRefs([_ref, ref])}
        style={{ ...style, ...positionProps }}
        states={{
          hover: isHovered || isHoveredProp,
          disabled: isDisabled || isDisabledProp,
          focus: isFocused || isFocusedProp,
          focusVisible: isFocusVisible || isFocusVisibleProp,
          active: isPressed || isPressedProp,
        }}
        disabled={isDisabled}
        focusable={Platform.OS === 'web' ? false : undefined}
      />
    );
  });
}
export default SliderFilledTrack;
