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
    transform: [],
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
