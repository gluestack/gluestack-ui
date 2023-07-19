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
      orientation,
      trackProps,
      onTrackLayout,
      sliderSize,
      isDisabled,
      isReversed,
    } = React.useContext(SliderContext);
    const positionProps = {
      // height: orientation === 'vertical' ? '100%' : sliderSize,
      // width: orientation !== 'vertical' ? '100%' : sliderSize,
      flexDirection: isReversed
        ? orientation === 'vertical'
          ? 'column'
          : 'row-reverse'
        : orientation === 'vertical'
        ? 'column-reverse'
        : 'row',
    };

    const variantProps = {
      variant: orientation || 'horizontal',
    };

    const sizeProps = {};

    return (
      <StyledSliderTrack
        onLayout={onTrackLayout}
        ref={mergeRefs([_ref, ref])}
        {...trackProps}
        style={{ ...style, ...positionProps }}
        {...props}
        isDisabled={isDisabled}
        focusable={false}
        states={{ hover: isHovered, disabled: isDisabled }}
        disabled={isDisabled}
        {...variantProps}
        {...sizeProps}
        // sliderSize="lg"
      >
        {children}
      </StyledSliderTrack>
    );
  });
}
export default SliderTrack;
