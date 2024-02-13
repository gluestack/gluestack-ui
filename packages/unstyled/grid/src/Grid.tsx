import React, { forwardRef, useState, useEffect, useMemo } from 'react';
import type { IGridProps } from './types';
import { GridContext } from './Context';

export const Grid = <T,>(StyledParent: any, StyledGrid: any) =>
  forwardRef(
    (
      {
        children,
        numColumns = 12,
        rowSpacing = 10,
        columnSpacing = 10,
        ...props
      }: T & IGridProps,
      ref?: any
    ) => {
      const [containerWidth, setContainerWidth] = useState(0);
      const [calculatedWidth, setCalculatedWidth] = useState<number | null>(
        null
      );

      useEffect(() => {
        if (containerWidth && columnSpacing && columnSpacing > 0) {
          const width = containerWidth + columnSpacing;
          setCalculatedWidth(width);
        }
      }, [containerWidth, columnSpacing]);

      const contextValue = useMemo(() => {
        return {
          numColumns,
          calculatedWidth,
        };
      }, [numColumns, calculatedWidth]);

      return (
        <GridContext.Provider value={contextValue}>
          <StyledParent
            onLayout={(event: any) => {
              const width = event.nativeEvent.layout.width;
              setContainerWidth(width);
            }}
          >
            <StyledGrid
              ref={ref}
              {...props}
              width={calculatedWidth}
              ml={-columnSpacing}
              mt={-rowSpacing}
              sx={{
                _gridItem: {
                  pl: columnSpacing,
                  pt: rowSpacing,
                },
              }}
            >
              {children}
            </StyledGrid>
          </StyledParent>
        </GridContext.Provider>
      );
    }
  );
