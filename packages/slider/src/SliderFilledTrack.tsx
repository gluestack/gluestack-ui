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
    } = React.useContext(SliderContext);

    const getSliderTrackPosition = () => {
      if (orientation === 'vertical') {
        return isReversed === 'true'
          ? trackLayout.height - trackLayout.height * state.getThumbPercent(0)
          : trackLayout.height * state.getThumbPercent(0);
      } else {
        return isReversed === 'true'
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
          hover: isHovered,
          disabled: isDisabled,
          focus: isFocused,
          focusVisible: isFocusVisible,
          active: isPressed,
        }}
        disabled={isDisabled}
        focusable={Platform.OS === 'web' ? false : undefined}
      />
    );
  });
}
export default SliderFilledTrack;
