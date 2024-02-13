import React, { forwardRef, useState, useMemo } from 'react';
import { GridContext } from './Context';

export const Grid = (StyledParent: any, StyledGrid: any) =>
  forwardRef(
    (
      {
        children,
        numColumns = 12,
        spacing = 0,
        rowSpacing,
        columnSpacing,
        flexDirection = 'row',
        ...props
      }: any,
      ref?: any
    ) => {
      const [calculatedWidth, setCalculatedWidth] = useState<number | null>(
        null
      );

      const contextValue = useMemo(() => {
        return {
          numColumns,
          calculatedWidth,
          flexDirection,
          columnSpacing,
          spacing,
          rowSpacing,
        };
      }, [
        numColumns,
        calculatedWidth,
        flexDirection,
        columnSpacing,
        spacing,
        rowSpacing,
      ]);

      return (
        <GridContext.Provider value={contextValue}>
          <StyledParent
            onLayout={(event: any) => {
              const width =
                event.nativeEvent.layout.width +
                (columnSpacing ?? spacing ?? 0);
              setCalculatedWidth(width);
            }}
          >
            {calculatedWidth && (
              <StyledGrid
                ref={ref}
                {...props}
                flexDirection={flexDirection}
                width={calculatedWidth}
                ml={(columnSpacing ?? spacing) * -1}
                mt={(rowSpacing ?? spacing) * -1}
              >
                {children}
              </StyledGrid>
            )}
          </StyledParent>
        </GridContext.Provider>
      );
    }
  );
