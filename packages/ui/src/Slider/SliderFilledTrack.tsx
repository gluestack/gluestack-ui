import React, { forwardRef } from 'react';
import { SliderContext } from './Context';
import { UIContext } from '../UIProvider';

const SliderFilledTrack = forwardRef((props: any, ref?: any) => {
  const { isReversed, state, trackLayout, orientation, sliderSize } =
    React.useContext(SliderContext);

  const sliderTrackPosition = isReversed
    ? orientation === 'vertical'
      ? trackLayout.height - trackLayout.height * state.getThumbPercent(0)
      : trackLayout.width - trackLayout.width * state.getThumbPercent(0)
    : state.getThumbPercent(0) * 100 + '%';

  const { StyledSliderFilledTrack } = React.useContext(UIContext);

  const positionProps = {
    style:
      orientation === 'vertical'
        ? { height: sliderTrackPosition, width: sliderSize }
        : { width: sliderTrackPosition, height: sliderSize },
  };

  return (
    <StyledSliderFilledTrack {...props} ref={ref} sx={{ ...positionProps }} />
  );
});

export default SliderFilledTrack;
