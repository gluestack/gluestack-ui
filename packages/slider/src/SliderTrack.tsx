import React, { forwardRef } from 'react';
import { SliderContext } from './Context';
import { Platform } from 'react-native';
import { useHover } from '@react-native-aria/interactions';
import { mergeRefs } from '@gluestack-ui/utils';

function SliderTrack<StyledSliderTrackProps>(
  StyledSliderTrack: React.ComponentType<StyledSliderTrackProps>
) {
  return forwardRef(({ children, style, ...props }: any, ref?: any) => {
    const _ref = React.useRef(null);
    const { isHovered } = useHover({}, _ref);

    const { orientation, trackProps, onTrackLayout, sliderSize, isDisabled } =
      React.useContext(SliderContext);
    const positionProps = {
      height: orientation ? '100%' : sliderSize,
      width: !orientation ? '100%' : sliderSize,
    };
    return (
      <StyledSliderTrack
        onLayout={onTrackLayout}
        ref={mergeRefs([_ref, ref])}
        {...trackProps}
        style={{ ...style, ...positionProps }}
        {...props}
        isDisabled={isDisabled}
        states={{ hover: isHovered, disabled: isDisabled }}
        focusable={Platform.OS === 'web' ? false : undefined}
        disabled={isDisabled}
      >
        {children}
      </StyledSliderTrack>
    );
  });
}
export default SliderTrack;
