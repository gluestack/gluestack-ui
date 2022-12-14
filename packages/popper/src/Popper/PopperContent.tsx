import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useOverlayPosition } from '@react-native-aria/overlays';
import { usePopperContext } from './PopperContext';
import { getContainerStyle, popperDefaultData } from './utils';

const PopperContent = React.forwardRef(
  ({ children, style, ...rest }: any, ref: any) => {
    const {
      triggerRef,
      shouldFlip,
      crossOffset,
      offset,
      placement: placementProp,
      onClose,
      shouldOverlapWithTrigger,
      setOverlayRef,
    } = usePopperContext('Popper');
    const overlayRef = React.useRef(null);

    const { overlayProps, rendered, arrowProps, placement } =
      useOverlayPosition({
        targetRef: triggerRef,
        overlayRef,
        shouldFlip: shouldFlip,
        crossOffset: crossOffset,
        offset: offset,
        placement: placementProp as any,
        containerPadding: 0,
        onClose: onClose,
        shouldOverlapWithTrigger,
      });

    const restElements: React.ReactNode[] = [];
    let arrowElement: React.ReactElement | null = null;

    React.useEffect(() => {
      setOverlayRef && setOverlayRef(overlayRef);
    }, [overlayRef, setOverlayRef]);

    // Might have performance impact if there are a lot of siblings!
    // Shouldn't be an issue with popovers since it would have atmost 2. Arrow and Content.
    React.Children.forEach(children, (child) => {
      if (
        React.isValidElement(child) &&
        // @ts-ignore
        child.type.displayName === 'PopperArrow'
      ) {
        arrowElement = React.cloneElement(child, {
          // @ts-ignore
          arrowProps,
          actualPlacement: placement,
        });
      } else {
        restElements.push(child);
      }
    });

    let arrowHeight = 0;
    let arrowWidth = 0;

    if (arrowElement) {
      arrowHeight = popperDefaultData.defaultArrowHeight;
      arrowWidth = popperDefaultData.defaultArrowWidth;

      //@ts-ignore
      if (arrowElement.props.height) {
        //@ts-ignore
        arrowHeight = arrowElement.props.height;
      }

      //@ts-ignore
      if (arrowElement.props.width) {
        //@ts-ignore
        arrowWidth = arrowElement.props.width;
      }
    }

    const containerStyle = React.useMemo(
      () =>
        getContainerStyle({
          placement,
          arrowHeight,
          arrowWidth,
        }),
      [arrowHeight, arrowWidth, placement]
    );

    const overlayStyle = React.useMemo(
      () =>
        StyleSheet.create({
          overlay: {
            ...overlayProps.style,
            // To handle translucent android StatusBar
            // marginTop: Platform.select({ android: top, default: 0 }),
            opacity: rendered ? 1 : 0,
            position: 'absolute',
          },
        }),
      [rendered, overlayProps.style]
    );
    return (
      <View ref={overlayRef} collapsable={true} style={overlayStyle.overlay}>
        {arrowElement}
        <View
          style={StyleSheet.flatten([containerStyle, style])}
          {...rest}
          ref={ref}
        >
          {restElements}
        </View>
      </View>
    );
  }
);

export default PopperContent;
