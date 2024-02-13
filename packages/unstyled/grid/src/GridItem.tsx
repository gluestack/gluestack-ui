import React, { forwardRef, useEffect, useState } from 'react';
import type { IGridItemProps } from './types';
import { useContext } from 'react';
import { GridContext } from './Context';
import { Platform } from 'react-native';

export const GridItem = <T,>(StyledGridItem: any) =>
  forwardRef(
    ({ colSpan = 1, children, ...props }: T & IGridItemProps, ref?: any) => {
      const [flexBasisValue, setFlexBasisValue] = useState<
        number | string | null
      >(null);
      const { calculatedWidth, numColumns } = useContext(GridContext);

      useEffect(() => {
        if (calculatedWidth && numColumns) {
          const width = calculatedWidth / numColumns;
          const flexBasis =
            Platform.OS === 'web'
              ? `${((width * colSpan) / calculatedWidth) * 100}%`
              : width * colSpan;
          setFlexBasisValue(flexBasis);
        }
      }, [calculatedWidth, numColumns, colSpan]);

      return (
        <StyledGridItem ref={ref} {...props} flexBasis={flexBasisValue}>
          {children}
        </StyledGridItem>
      );
    }
  );
