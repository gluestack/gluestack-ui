import type { PlacementAxis } from "@react-types/overlays";
import React, { RefObject } from "react";
import type { Axis, SizeAxis } from "@react-types/overlays";
import {
  I18nManager,
  //@ts-ignore
  Dimensions,
} from "react-native";
import type { Placement, PositionProps } from "@react-types/overlays";

interface ParsedPlacement {
  placement: PlacementAxis;
  crossPlacement: PlacementAxis;
  axis: Axis;
  crossAxis: Axis;
  size: SizeAxis;
  crossSize: SizeAxis;
}
interface AriaPositionProps extends PositionProps {
  /**
   * Element that that serves as the positioning boundary.
   * @default document.body
   */
  boundaryElement?: any;
  /**
   * The ref for the element which the overlay positions itself with respect to.
   */
  targetRef: RefObject<any>;
  /**
   * The ref for the overlay element.
   */
  overlayRef: RefObject<any>;
  /**
   * A ref for the scrollable region within the overlay.
   * @default overlayRef
   */
  scrollRef?: RefObject<any>;
  /**
   * Whether the overlay should update its position automatically.
   * @default true
   */
  shouldUpdatePosition?: boolean;
  /** Handler that is called when the overlay should close. */
  onClose?: () => void;
}

export function useOverlayPosition(
  props: AriaPositionProps & { preventCollision?: boolean }
) {
  const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

  let {
    targetRef,
    overlayRef,
    placement = "bottom" as Placement,
    offset = 0,
    crossOffset = 0,
    shouldFlip = true,
    preventCollision = true,
  } = props;

  const [elementStyles, setElementStyle] = React.useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,

    // Keep opacity 0 to prevent initial rendering
    opacity: 0,
  });

  const [triggerElementOffset, settriggerElementOffset] = React.useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  React.useLayoutEffect(() => {
    function setInitialOffsets() {
      if (targetRef && targetRef.current) {
        targetRef.current.measureInWindow(
          (left: number, top: number, width: number, height: number) => {
            settriggerElementOffset({ left, top, width, height });
          }
        );
      }
      if (overlayRef && overlayRef.current) {
        overlayRef.current.measureInWindow(
          (left: number, top: number, width: number, height: number) => {
            setElementStyle({ left, top, width, height, opacity: 1 });
          }
        );
      }
    }

    // Sometimes returned values are 0, 0 so calling it here instead of using setTimeout
    if (props.isOpen) {
      requestAnimationFrame(setInitialOffsets);
    } else {
      setElementStyle({ ...elementStyles, opacity: 0 });
    }
  }, [targetRef, overlayRef, props.isOpen]);

  let overlayPosition = React.useMemo(
    () =>
      calculatePositions({
        placement: translateRTL(placement),
        targetNode: triggerElementOffset,
        overlayNode: elementStyles,
        scrollNode: {
          top: 0,
          left: 0,
          width: windowWidth,
          height: windowHeight,
        },
        padding: 0,
        shouldFlip,
        boundaryElement: {
          top: 0,
          left: 0,
          width: windowWidth,
          height: windowHeight,
        },
        offset,
        crossOffset,
        preventCollision,
      }),
    [
      triggerElementOffset,
      elementStyles,
      placement,
      offset,
      shouldFlip,
      windowHeight,
      windowWidth,
      crossOffset,
    ]
  );

  return {
    overlayProps: {
      style: {
        ...overlayPosition.position,
        maxHeight: overlayPosition.maxHeight,
        opacity: elementStyles.opacity,
      },
    },
    placement: overlayPosition.placement,
    arrowProps: {
      style: {
        left: overlayPosition.arrowOffsetLeft,
        top: overlayPosition.arrowOffsetTop,
      },
    },
    updatePosition: () => {},
  };
}

function translateRTL(position: any) {
  if (I18nManager.isRTL) {
    return position.replace("start", "right").replace("end", "left");
  }
  return position.replace("start", "left").replace("end", "right");
}
interface Position {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

interface Dimensions {
  width: number;
  height: number;
  top: number;
  left: number;
  scroll: Position;
}

interface Offset {
  top: number;
  left: number;
  width: number;
  height: number;
}

export interface PositionResult {
  position?: Position;
  arrowOffsetLeft?: number;
  arrowOffsetTop?: number;
  maxHeight?: number;
  placement: PlacementAxis;
}

export interface PositionResult {
  position?: Position;
  arrowOffsetLeft?: number;
  arrowOffsetTop?: number;
  maxHeight?: number;
  placement: PlacementAxis;
}

const calculatePositions = (opts: any) => {
  let {
    placement,
    targetNode,
    overlayNode,
    scrollNode,
    padding,
    shouldFlip,
    boundaryElement,
    offset,
    crossOffset,
    preventCollision,
  } = opts;

  let childOffset: Offset = targetNode;
  let isContainerPositioned = false;
  let overlaySize: Offset = overlayNode;
  let margins = { top: 0, bottom: 0, left: 0, right: 0 };
  let scrollSize = scrollNode;
  let boundaryDimensions = boundaryElement;

  let containerOffsetWithBoundary: Offset = overlayNode;

  return calculatePositionInternal(
    placement,
    childOffset,
    overlaySize,
    scrollSize,
    margins,
    padding,
    shouldFlip,
    boundaryDimensions,
    containerOffsetWithBoundary,
    offset,
    crossOffset,
    isContainerPositioned,
    preventCollision
  );
};

function calculatePositionInternal(
  placementInput: Placement,
  childOffset: any,
  overlaySize: Offset,
  scrollSize: Offset,
  margins: Position,
  padding: number,
  flip: boolean,
  boundaryDimensions: Dimensions,
  containerOffsetWithBoundary: Offset,
  offset: number,
  crossOffset: number,
  isContainerPositioned: boolean,
  preventCollision: boolean
): PositionResult {
  let placementInfo = parsePlacement(placementInput);
  let {
    size,
    crossAxis,
    crossSize,
    placement,
    crossPlacement,
    axis,
  } = placementInfo;
  let position = computePosition(
    childOffset,
    boundaryDimensions,
    overlaySize,
    placementInfo,
    offset,
    crossOffset,
    containerOffsetWithBoundary,
    isContainerPositioned
  );

  let space = getAvailableSpace(
    boundaryDimensions,
    containerOffsetWithBoundary,
    childOffset,
    margins,
    padding + offset,
    placementInfo
  );

  if (flip && overlaySize[size] > space) {
    let flippedPlacementInfo = parsePlacement(
      `${FLIPPED_DIRECTION[placement]} ${crossPlacement}` as Placement
    );
    let flippedPosition = computePosition(
      childOffset,
      boundaryDimensions,
      overlaySize,
      flippedPlacementInfo,
      offset,
      crossOffset,
      containerOffsetWithBoundary,
      isContainerPositioned
    );
    let flippedSpace = getAvailableSpace(
      boundaryDimensions,
      containerOffsetWithBoundary,
      childOffset,
      margins,
      padding + offset,
      flippedPlacementInfo
    );

    // If the available space for the flipped position is greater than the original available space, flip.
    if (flippedSpace > space) {
      placementInfo = flippedPlacementInfo;
      position = flippedPosition;
    }
  }

  if (preventCollision) {
    // Check collisions with edges - Worst case scenerio

    // If popover colliding with right side of window
    position.left = Math.min(
      position.left,
      boundaryDimensions.width - containerOffsetWithBoundary.width
    );

    // If popover colliding with bottom of window
    position.top = Math.min(
      position.top,
      boundaryDimensions.height - containerOffsetWithBoundary.height
    );

    // If popover colliding with top of window
    position.top = Math.max(position.top, 0);

    // If popover colliding with left side of window
    position.left = Math.max(position.left, 0);
  }

  let arrowPosition: Position = {};
  arrowPosition[crossAxis] =
    childOffset[crossAxis] - position[crossAxis] + childOffset[crossSize] / 2;

  return {
    position,
    arrowOffsetLeft: arrowPosition.left,
    arrowOffsetTop: arrowPosition.top,
    placement: placementInfo.placement,
  };
}

function computePosition(
  childOffset: any,
  boundaryDimensions: Dimensions,
  overlaySize: Offset,
  placementInfo: ParsedPlacement,
  offset: number,
  crossOffset: number,
  containerOffsetWithBoundary: Offset,
  isContainerPositioned: boolean
) {
  let {
    placement,
    crossPlacement,
    axis,
    crossAxis,
    size,
    crossSize,
  } = placementInfo;
  let position: any = {};
  //@ts-ignore
  position[crossAxis] = childOffset[crossAxis];

  if (crossPlacement === "center") {
    position[crossAxis] +=
      (childOffset[crossSize] - overlaySize[crossSize]) / 2;
  } else if (crossPlacement !== crossAxis) {
    position[crossAxis] += childOffset[crossSize] - overlaySize[crossSize];
  }

  position[crossAxis] += crossOffset;

  // this is button center position - the overlay size + half of the button to align bottom of overlay with button center
  let minViablePosition =
    childOffset[crossAxis] +
    childOffset[crossSize] / 2 -
    overlaySize[crossSize];
  // this is button position of center, aligns top of overlay with button center
  let maxViablePosition = childOffset[crossAxis] + childOffset[crossSize] / 2;

  // clamp it into the range of the min/max positions
  position[crossAxis] = Math.min(
    Math.max(minViablePosition, position[crossAxis]),
    maxViablePosition
  );

  if (placement === axis) {
    const containerHeight = containerOffsetWithBoundary[size];
    position[axis] = Math.floor(childOffset[axis] - containerHeight - offset);
  } else {
    position[axis] = Math.floor(childOffset[axis] + childOffset[size] + offset);
  }

  return position;
}

function getAvailableSpace(
  boundaryDimensions: Dimensions,
  containerOffsetWithBoundary: Offset,
  childOffset: any,
  margins: Position,
  padding: number,
  placementInfo: ParsedPlacement
) {
  let { placement, axis, size } = placementInfo;
  if (placement === axis) {
    return Math.max(0, childOffset[axis] - padding);
  }

  return Math.max(
    0,
    boundaryDimensions[size] - childOffset[axis] - childOffset[size] - padding
  );
}

const AXIS: any = {
  top: "top",
  bottom: "top",
  left: "left",
  right: "left",
};

const FLIPPED_DIRECTION: any = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left",
};

const CROSS_AXIS: any = {
  top: "left",
  left: "top",
};

const AXIS_SIZE: any = {
  top: "height",
  left: "width",
};

interface Position {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

interface Dimensions {
  width: number;
  height: number;
  top: number;
  left: number;
  scroll: Position;
}

interface Offset {
  top: number;
  left: number;
  width: number;
  height: number;
}

export interface PositionResult {
  position?: Position;
  arrowOffsetLeft?: number;
  arrowOffsetTop?: number;
  maxHeight?: number;
  placement: PlacementAxis;
}

const PARSED_PLACEMENT_CACHE: any = {};

function parsePlacement(input: Placement): ParsedPlacement {
  if (PARSED_PLACEMENT_CACHE[input]) {
    return PARSED_PLACEMENT_CACHE[input];
  }

  let [placement, crossPlacement] = input.split(" ");
  let axis: Axis = AXIS[placement] || "right";
  let crossAxis: Axis = CROSS_AXIS[axis];

  if (!AXIS[crossPlacement]) {
    crossPlacement = "center";
  }

  let size = AXIS_SIZE[axis];
  let crossSize = AXIS_SIZE[crossAxis];
  PARSED_PLACEMENT_CACHE[input] = {
    placement,
    crossPlacement,
    axis,
    crossAxis,
    size,
    crossSize,
  };
  return PARSED_PLACEMENT_CACHE[input];
}
