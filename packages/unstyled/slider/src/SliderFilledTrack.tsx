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
        isHoveredProp,
        isDisabledProp,
        isFocusedProp,
        isFocusVisibleProp,
        isPressedProp,
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
            hover: isHovered || isHoveredProp,
            disabled: isDisabled || isDisabledProp,
            focus: isFocused || isFocusedProp,
            focusVisible: isFocusVisible || isFocusVisibleProp,
            active: isPressed || isPressedProp,
          }}
          dataSet={{
            hover: isHovered || isHoveredProp ? 'true' : 'false',
            disabled: isDisabled || isDisabledProp ? 'true' : 'false',
            focus: isFocused || isFocusedProp ? 'true' : 'false',
            focusVisible:
              isFocusVisible || isFocusVisibleProp ? 'true' : 'false',
            active: isPressed || isPressedProp ? 'true' : 'false',
          }}
          disabled={isDisabled}
          tabIndex={Platform.OS === 'web' ? -1 : undefined}
        />
      );
    }
  );
}
export default SliderFilledTrack;
