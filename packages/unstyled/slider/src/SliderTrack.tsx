import React, { forwardRef } from 'react';
import { SliderContext } from './Context';
import { mergeRefs } from '@gluestack-ui/utils';
import { useHover } from '@react-native-aria/interactions';

function SliderTrack<StyledSliderTrackProps>(
  StyledSliderTrack: React.ComponentType<StyledSliderTrackProps>
) {
  return forwardRef(({ children, style, ...props }: any, ref?: any) => {
    const _ref = React.useRef(null);
    const { isHovered } = useHover({}, _ref);
    const {
      trackProps,
      onTrackLayout,
      isFocused,
      isFocusVisible,
      isDisabled,
      isPressed,
    } = React.useContext(SliderContext);

    return (
      <StyledSliderTrack
        onLayout={onTrackLayout}
        ref={mergeRefs([_ref, ref])}
        {...trackProps}
        style={style}
        {...props}
        isDisabled={isDisabled}
        tabIndex={-1}
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
      >
        {children}
      </StyledSliderTrack>
    );
  });
}
export default SliderTrack;
