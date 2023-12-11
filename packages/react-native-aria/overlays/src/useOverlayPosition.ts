import type { PlacementAxis } from '@react-types/overlays';
import React, { RefObject } from 'react';
import type { Axis, SizeAxis } from '@react-types/overlays';
import {
  //@ts-ignore
  Dimensions,
} from 'react-native';
import type { Placement, PositionProps } from '@react-types/overlays';
//@ts-ignore
import { isRTL } from '@react-native-aria/utils';

import { APPROX_STATUSBAR_HEIGHT } from './utils';
const measureOffset = (ref: RefObject<any>) =>
  new Promise<IMeasureResult>((resolve) => {
    if (ref.current) {
      ref.current.measureInWindow(
        (x: number, y: number, width: number, height: number) => {
          resolve({ top: y, left: x, width, height });
        }
      );
    }
  });

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
  /** Determines whether the overlay should overlap with the trigger */
  shouldOverlapWithTrigger?: boolean;
}

type IMeasureResult = {
  top: number;
  left: number;
  height: number;
  width: number;
};

export function useOverlayPosition(props: AriaPositionProps) {
  let {
    targetRef,
    overlayRef,
    placement = 'bottom' as Placement,
    offset = 0,
    crossOffset = 0,
    isOpen = true,
    shouldFlip = true,
    shouldOverlapWithTrigger = false,
  } = props;

  let [position, setPosition] = React.useState<PositionResult>({
    position: {},
    arrowOffsetLeft: undefined,
    arrowOffsetTop: undefined,
    maxHeight: undefined,
    placement: undefined,
  });

  // Layout measurement happens asynchronously in RN. This causes initial flickr. Using opacity and setting it to 1 post calculation prevents that.
  let [rendered, setRendered] = React.useState(false);

  let updatePosition = async () => {
    const [overlayOffset, triggerOffset] = await Promise.all([
      measureOffset(overlayRef),
      measureOffset(targetRef),
    ]);

    // Sometimes measure returns height/width 0. Best solution would be to use onLayout callback, but that might diverege from React Aria's useOverlayPosition API. Decide later, this works for now
    if (
      !overlayOffset.width ||
      !overlayOffset.height ||
      !triggerOffset.width ||
      !triggerOffset.height
    ) {
      requestAnimationFrame(updatePosition);
      return;
    }

    const { height: windowHeight, width: windowWidth } = Dimensions.get(
      'window'
    );

    const positions = calculatePosition({
      placement: translateRTL(placement),
      targetNode: triggerOffset,
      overlayNode: overlayOffset,
      scrollNode: overlayOffset,
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
      shouldOverlapWithTrigger,
    });
    setPosition(positions);
    setRendered(true);
  };
  React.useEffect(() => {
    return () => {
      setRendered(false);
    };
  }, []);

  React.useLayoutEffect(() => {
    updatePosition();
  }, [
    placement,
    isOpen,
    offset,
    shouldFlip,
    crossOffset,
    shouldOverlapWithTrigger,
  ]);

  const style = {
    ...position.position,
  };

  if (position?.position?.top || position?.position?.top === 0) {
    style.top = (position?.position?.top || 0) + (APPROX_STATUSBAR_HEIGHT || 0);
  }

  const returnProps = {
    rendered,
    overlayProps: {
      style,
    },
    placement: position.placement,
    arrowProps: {
      style: {
        left: position.arrowOffsetLeft,
        top: (position?.arrowOffsetTop || 0) + (APPROX_STATUSBAR_HEIGHT || 0),
      },
    },
    updatePosition,
  };

  if (position.maxHeight !== undefined) {
    //@ts-ignore
    returnProps.overlayProps.style.maxHeight = position.maxHeight;
  }

  return returnProps;
}

function translateRTL(position: any) {
  if (isRTL()) {
    return position.replace('start', 'right').replace('end', 'left');
  }
  return position.replace('start', 'left').replace('end', 'right');
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
  placement: PlacementAxis | undefined;
}

const calculatePosition = (opts: any): PositionResult => {
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
    shouldOverlapWithTrigger,
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
    shouldOverlapWithTrigger
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
  shouldOverlapWithTrigger: boolean
): PositionResult {
  let placementInfo = parsePlacement(placementInput);
  let { size, crossAxis, crossSize, placement, crossPlacement } = placementInfo;
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
  let normalizedOffset = offset;
  let space = getAvailableSpace(
    boundaryDimensions,
    containerOffsetWithBoundary,
    childOffset,
    margins,
    padding + offset,
    placementInfo
  );

  if (flip && scrollSize[size] > space) {
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
      normalizedOffset = offset;
    }
  }

  let delta = getDelta(
    crossAxis,
    position[crossAxis],
    overlaySize[crossSize],
    boundaryDimensions,
    padding
  );
  position[crossAxis] += delta;

  let maxHeight = getMaxHeight(
    position,
    boundaryDimensions,
    containerOffsetWithBoundary,
    childOffset,
    margins,
    padding
  );

  overlaySize.height = Math.min(overlaySize.height, maxHeight);

  position = computePosition(
    childOffset,
    boundaryDimensions,
    overlaySize,
    placementInfo,
    normalizedOffset,
    crossOffset,
    containerOffsetWithBoundary,
    isContainerPositioned
  );

  delta = getDelta(
    crossAxis,
    position[crossAxis],
    overlaySize[crossSize],
    boundaryDimensions,
    padding
  );
  position[crossAxis] += delta;

  let arrowPosition: Position = {};
  arrowPosition[crossAxis] =
    childOffset[crossAxis] - position[crossAxis] + childOffset[crossSize] / 2;

  if (shouldOverlapWithTrigger) {
    position[FLIPPED_DIRECTION[placementInfo.placement]] =
      position[FLIPPED_DIRECTION[placementInfo.placement]] - childOffset[size];
  }

  return {
    position,
    maxHeight,
    arrowOffsetLeft: arrowPosition.left,
    arrowOffsetTop: arrowPosition.top,
    placement: placementInfo.placement,
  };
}

function getDelta(
  axis: Axis,
  offset: number,
  size: number,
  containerDimensions: Dimensions,
  padding: number
) {
  //@ts-ignore
  let containerScroll = containerDimensions[axis];
  //@ts-ignore
  let containerHeight = containerDimensions[AXIS_SIZE[axis]];

  let startEdgeOffset = offset - padding - containerScroll;
  let endEdgeOffset = offset + padding - containerScroll + size;

  if (startEdgeOffset < 0) {
    return -startEdgeOffset;
  } else if (endEdgeOffset > containerHeight) {
    return Math.max(containerHeight - endEdgeOffset, -startEdgeOffset);
  } else {
    return 0;
  }
}

function getMaxHeight(
  position: Position,
  boundaryDimensions: Dimensions,
  _containerOffsetWithBoundary: Offset,
  childOffset: Offset,
  _margins: Position,
  _padding: number
) {
  return position.top != null
    ? // We want the distance between the top of the overlay to the bottom of the boundary
      Math.max(
        0,
        boundaryDimensions.height - // this is the bottom of the boundary
          position.top // this is the top of the overlay
      )
    : // We want the distance between the top of the trigger to the top of the boundary
      Math.max(
        0,
        childOffset.top - // this is the top of the trigger
          0 // this is the top of the boundary
      );
}

function computePosition(
  childOffset: any,
  boundaryDimensions: Dimensions,
  overlaySize: Offset,
  placementInfo: ParsedPlacement,
  offset: number,
  crossOffset: number,
  _containerOffsetWithBoundary: Offset,
  _isContainerPositioned: boolean
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

  if (crossPlacement === 'center') {
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

  // Floor these so the position isn't placed on a partial pixel, only whole pixels. Shouldn't matter if it was floored or ceiled, so chose one.
  if (placement === axis) {
    // If the container is positioned (non-static), then we use the container's actual
    // height, as `bottom` will be relative to this height.  But if the container is static,
    // then it can only be the `document.body`, and `bottom` will be relative to _its_
    // container, which should be as large as boundaryDimensions.
    const containerHeight = boundaryDimensions[size];
    position[FLIPPED_DIRECTION[axis]] = Math.floor(
      containerHeight - childOffset[axis] + offset
    );
  } else {
    position[axis] = Math.floor(childOffset[axis] + childOffset[size] + offset);
  }

  return position;
}

function getAvailableSpace(
  boundaryDimensions: Dimensions,
  _containerOffsetWithBoundary: Offset,
  childOffset: any,
  _margins: Position,
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
  top: 'top',
  bottom: 'top',
  left: 'left',
  right: 'left',
};

const FLIPPED_DIRECTION: any = {
  top: 'bottom',
  bottom: 'top',
  left: 'right',
  right: 'left',
};

const CROSS_AXIS: any = {
  top: 'left',
  left: 'top',
};

const AXIS_SIZE: any = {
  top: 'height',
  left: 'width',
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

const PARSED_PLACEMENT_CACHE: any = {};

function parsePlacement(input: Placement): ParsedPlacement {
  if (PARSED_PLACEMENT_CACHE[input]) {
    return PARSED_PLACEMENT_CACHE[input];
  }

  let [placement, crossPlacement] = input.split(' ');
  let axis: Axis = AXIS[placement] || 'right';
  let crossAxis: Axis = CROSS_AXIS[axis];

  if (!AXIS[crossPlacement]) {
    crossPlacement = 'center';
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
