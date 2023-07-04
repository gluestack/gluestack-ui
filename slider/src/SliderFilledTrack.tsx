import React, { forwardRef } from 'react';
import { SliderContext } from './Context';
import { Platform } from 'react-native';
import { useHover } from '@react-native-aria/interactions';
import { mergeRefs } from '@gluestack-ui/utils';

function SliderFilledTrack<StyledSliderFilledTrack>(
  StyledSliderFilledTrack: React.ComponentType<StyledSliderFilledTrack>
) {
  return forwardRef(({ style, ...props }: any, ref?: any) => {
    const _ref = React.useRef(null);
    const { isHovered } = useHover({}, _ref);

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

    const positionProps =
      orientation === 'vertical'
        ? { height: sliderTrackPosition, width: sliderSize }
        : { width: sliderTrackPosition, height: sliderSize };
    return (
      <StyledSliderFilledTrack
        {...props}
        ref={mergeRefs([_ref, ref])}
        style={{ ...style, ...positionProps }}
        states={{
          hover: isHovered,
          disabled: isDisabled,
        }}
        disabled={isDisabled}
        focusable={Platform.OS === 'web' ? false : undefined}
      />
    );
  });
}
export default SliderFilledTrack;
