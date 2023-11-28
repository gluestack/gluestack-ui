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
      isHoveredProp,
      isDisabledProp,
      isFocusedProp,
      isFocusVisibleProp,
      isPressedProp,
    } = React.useContext(SliderContext);

    return (
      <StyledSliderTrack
        onLayout={onTrackLayout}
        ref={mergeRefs([_ref, ref])}
        {...trackProps}
        style={{ ...style }}
        {...props}
        isDisabled={isDisabled}
        tabIndex={-1}
        states={{
          hover: isHovered || isHoveredProp,
          disabled: isDisabled || isDisabledProp,
          focus: isFocused || isFocusedProp,
          focusVisible: isFocusVisible || isFocusVisibleProp,
          active: isPressed || isPressedProp,
        }}
        disabled={isDisabled}
      >
        {children}
      </StyledSliderTrack>
    );
  });
}
export default SliderTrack;
