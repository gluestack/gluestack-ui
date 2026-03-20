const getDiagonalLength = (arrowHeight: number, arrowWidth: number) => {
  return Math.pow(arrowHeight * arrowHeight + arrowWidth * arrowWidth, 0.5);
};

type ArrowStyleProps = {
  height: number;
  width: number;
  actualPlacement: 'top' | 'bottom' | 'left' | 'right';
};

export const getContainerStyle = ({
  placement,
  arrowHeight,
}: {
  placement: string;
  arrowHeight: number;
}) => {
  const diagonalLength = getDiagonalLength(arrowHeight, arrowHeight) / 2;

  if (placement === 'top') {
    return { marginBottom: diagonalLength };
  }

  if (placement === 'bottom') {
    return { marginTop: diagonalLength };
  }

  if (placement === 'left') {
    return { marginRight: diagonalLength };
  }

  if (placement === 'right') {
    return { marginLeft: diagonalLength };
  }

  return {};
};

export const getArrowStyles = ({
  height,
  width,
  actualPlacement,
}: ArrowStyleProps) => {
  const additionalStyles: any = {
    transform: [{ rotate: '45deg'} , {translateY: height / 2}],
  };

  const diagonalLength = getDiagonalLength(height, width);

  if (actualPlacement === 'top' && width) {
    additionalStyles.transform.push({ translateX: -width / 2 });
    additionalStyles.bottom = Math.ceil((diagonalLength - height) / 2);
  }

  if (actualPlacement === 'bottom' && width) {
    additionalStyles.transform.push({ translateX: -width / 2 });
    additionalStyles.top = Math.ceil((diagonalLength - height) / 2);
  }

  if (actualPlacement === 'left' && height) {
    additionalStyles.transform.push({ translateY: -height / 2 });
    additionalStyles.right = Math.ceil((diagonalLength - height) / 2);
  }

  if (actualPlacement === 'right' && height) {
    additionalStyles.transform.push({ translateY: -height / 2 });
    additionalStyles.left = Math.ceil((diagonalLength - height) / 2);
  }

  return additionalStyles;
};

type PopoverArrowAxisPlacement = 'top' | 'bottom' | 'left' | 'right';

const toAxisPlacement = (
  actualPlacement: string | undefined
): PopoverArrowAxisPlacement => {
  if (
    actualPlacement === 'top' ||
    actualPlacement === 'bottom' ||
    actualPlacement === 'left' ||
    actualPlacement === 'right'
  ) {
    return actualPlacement;
  }
  return 'bottom';
};

/** Nudge along the cross axis: `left` for top/bottom, `top` for left/right. */
export const applyCrossOffsetToArrowStyle = (
  arrowStyle: Record<string, any>,
  actualPlacement: string | undefined,
  crossOffset: number
) => {
  if (!crossOffset) {
    return { ...arrowStyle };
  }
  const next = { ...arrowStyle };
  const ap = toAxisPlacement(actualPlacement);
  if (ap === 'top' || ap === 'bottom') {
    if (typeof next.left === 'number') {
      next.left += crossOffset;
    }
  } else if (typeof next.top === 'number') {
    next.top += crossOffset;
  }
  return next;
};

/** Nudge along the main axis on the edge props from `getArrowStyles`. */
export const applyOffsetToArrowEdgeStyles = (
  edgeStyles: Record<string, any>,
  actualPlacement: string | undefined,
  offset: number
) => {
  if (!offset) {
    return { ...edgeStyles };
  }
  const next = { ...edgeStyles };
  const ap = toAxisPlacement(actualPlacement);
  if (ap === 'bottom' && typeof next.top === 'number') {
    next.top += offset;
  } else if (ap === 'top' && typeof next.bottom === 'number') {
    next.bottom += offset;
  } else if (ap === 'right' && typeof next.left === 'number') {
    next.left += offset;
  } else if (ap === 'left' && typeof next.right === 'number') {
    next.right += offset;
  }
  return next;
};
