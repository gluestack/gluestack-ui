import React, { forwardRef } from 'react';
import type { IVStackProps } from './types';
import { flattenChildren } from '../utils/getSpacedChild';

export const VStack = (StyledVStack: any, StyledVStackSpacer: any) =>
  forwardRef(
    ({ children, reversed, space, ...props }: IVStackProps, ref: any) => {
      const getSpacedChildren = (children: any) => {
        let childrenArray = React.Children.toArray(flattenChildren(children));
        childrenArray = reversed ? [...childrenArray].reverse() : childrenArray;
        childrenArray = childrenArray.map((child: any, index: number) => {
          return (
            <React.Fragment key={child.key ?? `spaced-child-${index}`}>
              {child}
              {index < childrenArray.length - 1 && (
                <StyledVStackSpacer size={space} />
              )}
            </React.Fragment>
          );
        });

        return childrenArray;
      };
      return (
        <StyledVStack ref={ref} {...props}>
          {getSpacedChildren(children)}
        </StyledVStack>
      );
    }
  );
