import React, { forwardRef } from 'react';

// import type { ISkeletonTextProps } from './types';

export const SkeletonText = (StyledSkeleton: any, StyledSkeletonText: any) =>
  forwardRef(
    (
      //@ts-ignore
      props: any,
      ref: any
    ) => {
      const { children, lines = 3, isLoaded, _line, ...resolvedProps } = props;

      const computedChildren = [];
      //generating an array of skeleton components (same length as noOfLines)
      for (let i = 0; i < lines; i++) {
        //check for last line (to change the width of last line)
        if (i === lines - 1 && lines !== 1) {
          computedChildren.push(
            //Using Skeleton component with required props
            <StyledSkeleton key={i} w="75%" {..._line} />
          );
        } else computedChildren.push(<StyledSkeleton key={i} {..._line} />);
      }
      return isLoaded ? (
        children
      ) : (
        <StyledSkeletonText {...resolvedProps} ref={ref}>
          {computedChildren}
        </StyledSkeletonText>
      );
    }
  );
