import React, { forwardRef } from 'react';
import { SliderContext } from './Context';
import { Platform } from 'react-native';
import { mergeRefs } from '@gluestack-ui/utils';

function SliderTrack<StyledSliderTrackProps>(
  StyledSliderTrack: React.ComponentType<StyledSliderTrackProps>
) {
  return forwardRef(({ children, style, ...props }: any, ref?: any) => {
    const {
      orientation,
      trackProps,
      onTrackLayout,
      sliderSize,
      isDisabled,
      isReversed,
    } = React.useContext(SliderContext);
    const positionProps = {
      height: orientation === 'vertical' ? '100%' : sliderSize,
      width: orientation !== 'vertical' ? '100%' : sliderSize,
      flexDirection: isReversed
        ? orientation === 'vertical'
          ? 'column'
          : 'row-reverse'
        : orientation === 'vertical'
        ? 'column-reverse'
        : 'row',
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
