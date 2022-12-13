import React from "react";
import { useOverlayPosition } from "@react-native-aria/overlays";
import { createContext } from "../utils/createContext";
import { View, StyleSheet, ViewStyle, Text } from "react-native";
import type { IPopperProps, PopperContext } from "./types";
import { getArrowStyles, getContainerStyle, popperDefaultData } from "./utils";

const [PopperProvider, usePopperContext] =
  createContext<PopperContext>("PopperContext");

const Popper = (
  props: IPopperProps & {
    triggerRef: any;
    onClose: any;
    setOverlayRef?: (overlayRef: any) => void;
  }
) => {
  return <PopperProvider {...props}>{props.children}</PopperProvider>;
};

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
    } = usePopperContext("PopperContent");
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
        child.type.displayName === "PopperArrow"
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
            position: "absolute",
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
      borderColor = "#52525b",
      backgroundColor = "black",
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
        position: "absolute",
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

PopperArrow.displayName = "PopperArrow";
Popper.Content = PopperContent;
Popper.Arrow = PopperArrow;

export { Popper };
