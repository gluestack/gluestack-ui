import React, { forwardRef } from 'react';
import { SliderContext } from './Context';

function SliderTrack<StyledSliderTrackProps>(
  StyledSliderTrack: React.ComponentType<StyledSliderTrackProps>
) {
  return forwardRef(({ children, style, ...props }: any, ref?: any) => {
    const {
      orientation,
      trackProps,
      onTrackLayout,
      sliderSize,
      isDisabled,
      isReversed,
    } = React.useContext(SliderContext);
    const positionProps = {
      height: orientation === 'vertical' ? '100%' : sliderSize,
      width: orientation !== 'vertical' ? '100%' : sliderSize,
      flexDirection: isReversed
        ? orientation === 'vertical'
          ? 'column'
          : 'row-reverse'
        : orientation === 'vertical'
        ? 'column-reverse'
        : 'row',
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
      >
        {children}
      </StyledSliderTrack>
    );
  });
}
export default SliderTrack;
