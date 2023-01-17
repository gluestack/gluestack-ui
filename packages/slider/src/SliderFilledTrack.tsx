import React, { forwardRef } from 'react';
import { SliderContext } from './src/Context';

function SliderFilledTrack<StyledSliderFilledTrack>(
  StyledSliderFilledTrack: React.ComponentType<StyledSliderFilledTrack>
) {
  return forwardRef((props: StyledSliderFilledTrack, ref?: any) => {
    const {
      isReversed,
      state,
      trackLayout,
      orientation,
      sliderSize,
      isDisabled,
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

    const positionProps = {
      style:
        orientation === 'vertical'
          ? { height: sliderTrackPosition, width: sliderSize }
          : { width: sliderTrackPosition, height: sliderSize },
    };

    return (
      <StyledSliderFilledTrack
        {...props}
        ref={ref}
        sx={{ ...positionProps }}
        states={{
          disabled: isDisabled,
        }}
        disabled={isDisabled}
      />
    );
  });
}
export default SliderFilledTrack;
