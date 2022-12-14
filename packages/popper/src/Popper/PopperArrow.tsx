import React from 'react';
import { View, ViewStyle } from 'react-native';
import { getArrowStyles, popperDefaultData } from './utils';

// This is an internal implementation of PopoverArrow
const PopperArrow = React.forwardRef(
  (
    {
      height = popperDefaultData.defaultArrowHeight,
      width = popperDefaultData.defaultArrowWidth,

      //@ts-ignore - Will be passed by React.cloneElement from PopperContent
      arrowProps,
      //@ts-ignore - Will be passed by React.cloneElement from PopperContent
      actualPlacement,
      style,
      borderColor = '#52525b',
      backgroundColor = 'black',
      ...rest
    }: any,
    //  IPopoverArrowProps & IBoxProps<IPopoverArrowProps>,
    ref: any
  ) => {
    const additionalStyles = React.useMemo(
      () => getArrowStyles({ placement: actualPlacement, height, width }),
      [actualPlacement, height, width]
    );

    const triangleStyle: ViewStyle = React.useMemo(
      () => ({
        position: 'absolute',
        width,
        height,
      }),
      [width, height]
    );

    const arrowStyles = React.useMemo(
      () => [arrowProps?.style, triangleStyle, additionalStyles, style],
      [triangleStyle, additionalStyles, arrowProps?.style, style]
    );

    return (
      <View
        ref={ref}
        style={arrowStyles}
        borderColor={borderColor}
        backgroundColor={backgroundColor}
        zIndex={1}
        {...rest}
      />
    );
  }
);

export default PopperArrow;
