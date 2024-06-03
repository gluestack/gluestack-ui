import React, { forwardRef } from 'react';
import { SliderContext } from './Context';
import { Platform } from 'react-native';
import { mergeRefs } from '@gluestack-ui/utils';

function SliderFilledTrack<StyledSliderFilledTrack>(
  StyledSliderFilledTrack: React.ComponentType<StyledSliderFilledTrack>
) {
  return forwardRef(
    (
      {
        _experimentalSliderFilledTrack = false,
        _experimentalSliderFilledTrackValue = 0,
        style,
        ...props
      }: any,
      ref?: any
    ) => {
      const _ref = React.useRef(null);

      const {
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
          return trackLayout.height * state.getThumbPercent(0);
        } else {
          return trackLayout.width * state.getThumbPercent(0);
        }
      };

      const sliderTrackPosition = getSliderTrackPosition();

      let positionProps =
        orientation === 'vertical'
          ? { height: sliderTrackPosition }
          : { width: sliderTrackPosition };

      if (_experimentalSliderFilledTrack) {
        positionProps =
          orientation === 'vertical'
            ? { height: _experimentalSliderFilledTrackValue }
            : { width: _experimentalSliderFilledTrackValue };
      }

      return (
        <StyledSliderFilledTrack
          {...props}
          ref={mergeRefs([_ref, ref])}
          style={[style, positionProps]}
          states={{
            hover: isHovered,
            disabled: isDisabled,
            focus: isFocused,
            focusVisible: isFocusVisible,
            active: isPressed,
          }}
          dataSet={{
            hover: isHovered ? 'true' : 'false',
            disabled: isDisabled ? 'true' : 'false',
            focus: isFocused ? 'true' : 'false',
            focusVisible: isFocusVisible ? 'true' : 'false',
            active: isPressed ? 'true' : 'false',
          }}
          disabled={isDisabled}
          tabIndex={Platform.OS === 'web' ? -1 : undefined}
        />
      );
    }
  );
}
export default SliderFilledTrack;
