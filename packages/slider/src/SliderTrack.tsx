import React, { forwardRef } from 'react';
import { SliderContext } from './Context';

function SliderTrack<StyledSliderTrackProps>(
  StyledSliderTrack: React.ComponentType<StyledSliderTrackProps>
) {
  return forwardRef(({ children, style, ...props }: any, ref?: any) => {
    const { orientation, trackProps, onTrackLayout, sliderSize, isDisabled } =
      React.useContext(SliderContext);
    const positionProps = {
      height: orientation ? '100%' : sliderSize,
      width: !orientation ? '100%' : sliderSize,
    };
    return (
      <StyledSliderTrack
        onLayout={onTrackLayout}
        ref={ref}
        {...trackProps}
        style={{ ...style, ...positionProps }}
        {...props}
        isDisabled={isDisabled}
        states={{ disabled: isDisabled }}
        disabled={isDisabled}
        focusable={false}
      >
        {children}
      </StyledSliderTrack>
    );
  });
}
export default SliderTrack;
