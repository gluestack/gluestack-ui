/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef } from 'react';
import { usePopoverContent } from './PopoverContext';
import { getArrowStyles } from './utils';

const PopoverArrow = (StyledPopoverArrow: any) =>
  forwardRef((props: any, ref?: any) => {
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

    const ArrowStyle = React.useMemo(() => {
      return {
        top: arrowProps?.style?.top - arrowHeight / 2,
        left: arrowProps?.style?.left - arrowWidth / 2,
      };
    }, [
      arrowHeight,
      arrowWidth,
      arrowProps?.style?.top,
      arrowProps?.style?.left,
    ]);

    React.useEffect(() => {
      const ArrowComponent = (
        <StyledPopoverArrow
          ref={ref}
          onLayout={(event: any) => {
            const { height, width } = event.nativeEvent.layout;
            updateArrowSize({ height, width });
          }}
          {...props}
          {...ArrowStyle}
          key={actualPlacement + 'arrow'}
          initial={{
            opacity: 0,
            y:
              actualPlacement === 'top'
                ? 2
                : actualPlacement === 'bottom'
                ? -2
                : 0,
            x:
              actualPlacement === 'right'
                ? -2
                : actualPlacement === 'left'
                ? 2
                : 0,
            rotate: '45deg',
          }}
          animate={{
            opacity: 1,
            y: 0,
            x: 0,
            rotate: '45deg',
          }}
          exit={{
            opacity: 0,
            rotate: '45deg',
          }}
          style={[
            props?.style,
            ArrowStyle,
            {
              // To avoid border radius case
              top:
                placement === 'right bottom' || placement === 'left bottom'
                  ? ArrowStyle?.top > 4
                    ? ArrowStyle?.top - 4
                    : ArrowStyle?.top
                  : ArrowStyle?.top,
            },
            additionalStyles,
          ]}
          dataSet={{ flip: isFlipped }}
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
    ]);

    return null;
  });

export default PopoverArrow;
