import React, { forwardRef, useState, useMemo } from 'react';
import { GridContainerContext } from './Context';

export const GridContainer = (StyledParent: any) =>
  forwardRef(
    (
      {
        children,
        numColumns = 12,
        spacing = 0,
        rowSpacing,
        columnSpacing,
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
          columnSpacing,
          spacing,
          rowSpacing,
        };
      }, [numColumns, calculatedWidth, columnSpacing, spacing, rowSpacing]);

      return (
        <GridContainerContext.Provider value={contextValue}>
          <StyledParent
            ref={ref}
            onLayout={(event: any) => {
              const width =
                event.nativeEvent.layout.width +
                (columnSpacing ?? spacing ?? 0);
              setCalculatedWidth(width);
            }}
            {...props}
          >
            {children}
          </StyledParent>
        </GridContainerContext.Provider>
      );
    }
  );
