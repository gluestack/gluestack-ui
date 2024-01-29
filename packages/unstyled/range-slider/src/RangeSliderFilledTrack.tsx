import React, { forwardRef } from 'react';
import { RangeSliderContext } from './Context';
import { Platform } from 'react-native';
import { mergeRefs } from '@gluestack-ui/utils';

function RangeSliderFilledTrack<StyledSliderFilledTrack>(
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
      } = React.useContext(RangeSliderContext);

      const getSliderTrackPosition = () => {
        if (orientation === 'vertical') {
          return (
            trackLayout.height -
            (trackLayout.height * state.getThumbPercent(0) +
              (trackLayout.height -
                trackLayout.height * state.getThumbPercent(1)))
          );
        } else {
          return (
            trackLayout.width -
            (trackLayout.width * state.getThumbPercent(0) +
              (trackLayout.width -
                trackLayout.width * state.getThumbPercent(1)))
          );

          // return trackLayout.width * state.getThumbPercent(0);
        }
      };

      const sliderTrackPosition = getSliderTrackPosition();

      let positionProps =
        orientation === 'vertical'
          ? {
              height: Math.abs(sliderTrackPosition),
              bottom: trackLayout?.height * state.getThumbPercent(0),
              position: 'absolute',
            }
          : {
              width: sliderTrackPosition,
              left: trackLayout?.width * state.getThumbPercent(0),
            };
      // if (_experimentalSliderFilledTrack) {
      //   // @ts-ignore
      //   positionProps =
      //     orientation === 'vertical'
      //       ? { height: _experimentalSliderFilledTrackValue }
      //       : { width: _experimentalSliderFilledTrackValue };
      // }
      return (
        <StyledSliderFilledTrack
          {...props}
          ref={mergeRefs([_ref, ref])}
          style={{
            ...style,
            ...positionProps,
            // backgroundColor: 'red',
            // height: 100,
          }}
          states={{
            hover: isHovered || isHoveredProp,
            disabled: isDisabled || isDisabledProp,
            focus: isFocused || isFocusedProp,
            focusVisible: isFocusVisible || isFocusVisibleProp,
            active: isPressed || isPressedProp,
          }}
          disabled={isDisabled}
          tabIndex={Platform.OS === 'web' ? -1 : undefined}
        />
      );
    }
  );
}
export default RangeSliderFilledTrack;
