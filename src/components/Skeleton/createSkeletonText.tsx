import React, { forwardRef } from 'react';
import { Stack } from '../Stack';

const defaultProps = {
  _line: {
    h: 12,
    borderRadius: '$full',
  },
  _stack: {
    space: 3,
    w: '100%',
  },
};

export default function createSkeletonText(Skeleton: any) {
  return forwardRef(
    (
      {
        children,
        startColor,
        endColor,
        lines,
        isLoaded,
        _line,
        _stack,
        ...props
      }: any,
      ref?: any
    ) => {
      const computedChildren = [];
      //generating an array of skeleton components (same length as noOfLines)
      for (let i = 0; i < lines; i++) {
        //check for last line (to change the width of last line)
        if (i === lines - 1 && lines !== 1) {
          computedChildren.push(
            //Using Skeleton component with required props
            <Skeleton
              key={i}
              endColor={endColor}
              startColor={startColor}
              w="75%"
              {...defaultProps._line}
              {..._line}
              h={12}
            />
          );
        } else
          computedChildren.push(
            <Skeleton
              key={i}
              endColor={endColor}
              startColor={startColor}
              {...defaultProps._line}
              {..._line}
              h={12}
            />
          );
      }
      return isLoaded ? (
        children
      ) : (
        <Stack {...defaultProps._stack} {...props} ref={ref} {..._stack}>
          {computedChildren}
        </Stack>
      );
    }
  );
}
