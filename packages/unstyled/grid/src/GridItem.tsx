import React, { forwardRef, useEffect, useState } from 'react';
import { useContext } from 'react';
import { GridContext } from './Context';
import { Platform } from 'react-native';

export const GridItem = (StyledGridItem: any) =>
  forwardRef(({ colSpan = 1, children, ...props }: any, ref?: any) => {
    const [flexBasisValue, setFlexBasisValue] = useState<
      number | string | null
    >('auto');

    const {
      calculatedWidth,
      numColumns,
      flexDirection,
      columnSpacing,
      spacing,
      rowSpacing,
    } = useContext(GridContext);

    useEffect(() => {
      if (
        !flexDirection?.includes('column') &&
        calculatedWidth &&
        numColumns > 0 &&
        colSpan > 0
      ) {
        const width = calculatedWidth / numColumns;

        const flexBasis =
          Platform.OS === 'web'
            ? `${Math.min(((width * colSpan) / calculatedWidth) * 100, 100)}%`
            : Math.min(width * colSpan, calculatedWidth);

        setFlexBasisValue(flexBasis);
      }
    }, [calculatedWidth, numColumns, colSpan, flexDirection]);

    return (
      <StyledGridItem
        width={Platform.OS === 'web' ? 'auto' : '100%'}
        px={(columnSpacing ?? spacing) / 2}
        py={(rowSpacing ?? spacing) / 2}
        ref={ref}
        flexBasis={flexBasisValue}
        {...props}
      >
        {children}
      </StyledGridItem>
    );
  });
