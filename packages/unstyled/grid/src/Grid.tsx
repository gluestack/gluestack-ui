import React, { forwardRef } from 'react';
import { useContext } from 'react';
import { GridContainerContext } from './Context';

export const Grid = (StyledGrid: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const { calculatedWidth, columnSpacing, spacing, rowSpacing } =
      useContext(GridContainerContext);

    return (
      <>
        {calculatedWidth && (
          <StyledGrid
            ref={ref}
            style={{
              marginHorizontal: (columnSpacing ?? spacing) / -2,
              marginVertical: (rowSpacing ?? spacing) / -2,
            }}
            {...props}
          >
            {children}
          </StyledGrid>
        )}
      </>
    );
  });
