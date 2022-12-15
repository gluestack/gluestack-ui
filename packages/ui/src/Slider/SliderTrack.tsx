import React, { forwardRef } from 'react';
import { SliderContext } from './Context';

const SliderTrack = (StyledSliderTrack: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const { orientation, trackProps, onTrackLayout, sliderSize } =
      React.useContext(SliderContext);

    const positionProps = {
      style: {
        height: orientation ? '100%' : sliderSize,
        width: !orientation ? '100%' : sliderSize,
      },
    };
    return (
      <StyledSliderTrack
        onLayout={onTrackLayout}
        ref={ref}
        {...trackProps}
        sx={{ ...positionProps }}
        {...props}
      >
        {children}
      </StyledSliderTrack>
    );
  });

export default SliderTrack;
