/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef } from 'react';
import { usePopoverContent } from './PopoverContext';
import {
  applyCrossOffsetToArrowStyle,
  applyOffsetToArrowEdgeStyles,
  getArrowStyles,
} from './utils';

const PopoverArrow = (StyledPopoverArrow: any) =>
  forwardRef((props: any, ref?: any) => {
    const {
      offset: offsetProp = 0,
      crossOffset: crossOffsetProp = 0,
      ...rest
    } = props;

    const {
      value: {
        placement,
        actualPlacement,
        updateArrowSize,
        arrowHeight,
        arrowWidth,
        arrowProps,
        updateArrowElement,
        isFlipped,
      },
    } = usePopoverContent('PopoverContext');

    const additionalStyles = React.useMemo(() => {
      return getArrowStyles({
        height: arrowHeight,
        width: arrowWidth,
        actualPlacement,
      });
    }, [arrowHeight, arrowWidth, placement, actualPlacement]);

    React.useEffect(() => {
      const arrowStyle = applyCrossOffsetToArrowStyle(
        arrowProps?.style ?? {},
        actualPlacement,
        crossOffsetProp
      );

      const adjustedTop =
        placement === 'right bottom' || placement === 'left bottom'
          ? arrowStyle.top > 4
            ? arrowStyle.top - 4
            : arrowStyle.top
          : arrowStyle.top;

      const edgeStyles = applyOffsetToArrowEdgeStyles(
        additionalStyles,
        actualPlacement,
        offsetProp
      );

      const ArrowComponent = (
        <StyledPopoverArrow
          ref={ref}
          onLayout={(event: any) => {
            const { height, width } = event.nativeEvent.layout;
            updateArrowSize({ height, width });
          }}
          {...rest}
          style={[
            rest?.style,
            arrowStyle,
            {
              top: adjustedTop,
            },
            edgeStyles,
          ]}
          // data attributes for uniwind
          data-flip={isFlipped ? 'true' : 'false'}
          // data attributes for nativewind
          dataSet={{ flip: isFlipped ? 'true' : 'false' }}
          states={{
            flip: isFlipped,
          }}
        />
      );

      updateArrowElement(ArrowComponent);
    }, [
      additionalStyles,
      placement,
      arrowHeight,
      arrowWidth,
      actualPlacement,
      JSON.stringify(arrowProps?.style),
      crossOffsetProp,
      offsetProp,
      isFlipped,
    ]);

    return null;
  });

export default PopoverArrow;
