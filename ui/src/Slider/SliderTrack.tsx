import React from 'react';
import { SliderContext } from './Context';
import { UIContext } from '../UIProvider';

const SliderTrack = ({ children, ...props }: any, ref?: any) => {
  const { orientation, trackProps, onTrackLayout, sliderSize } =
    React.useContext(SliderContext);

  const { StyledSliderTrack } = React.useContext(UIContext);

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
};

export default React.forwardRef(SliderTrack);
