import React, { forwardRef } from 'react';
import { useContext } from 'react';
import { GridContainerContext } from './Context';

export const Grid = (StyledGrid: any) =>
  forwardRef(
    ({ children, flexDirection = 'row', ...props }: any, ref?: any) => {
      const { calculatedWidth, columnSpacing, spacing, rowSpacing } =
        useContext(GridContainerContext);

      return (
        <>
          {calculatedWidth && (
            <StyledGrid
              ref={ref}
              flexDirection={flexDirection}
              width={calculatedWidth}
              mx={(columnSpacing ?? spacing) / -2}
              my={(rowSpacing ?? spacing) / -2}
              {...props}
            >
              {children}
            </StyledGrid>
          )}
        </>
      );
    }
  );
