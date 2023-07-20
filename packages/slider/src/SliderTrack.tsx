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
    const { trackProps, onTrackLayout, isDisabled } =
      React.useContext(SliderContext);

    return (
      <StyledSliderTrack
        onLayout={onTrackLayout}
        ref={mergeRefs([_ref, ref])}
        {...trackProps}
        style={{ ...style }}
        {...props}
        isDisabled={isDisabled}
        focusable={false}
        states={{ hover: isHovered, disabled: isDisabled }}
        disabled={isDisabled}
      >
        {children}
      </StyledSliderTrack>
    );
  });
}
export default SliderTrack;
