import React, { forwardRef } from 'react';
import type { IVStackProps } from './types';
import { flattenChildren } from '../utils/getSpacedChild';

export function VStack<StyledVStackProps, StyledVStackSpacerProps>(
  StyledVStack: React.ComponentType<StyledVStackProps>,
  StyledVStackSpacer: React.ComponentType<StyledVStackSpacerProps>
) {
  return forwardRef(
    (
      { children, reversed, space, ...props }: StyledVStackProps & IVStackProps,
      ref: any
    ) => {
      const getSpacedChildren = (children: any) => {
        let childrenArray = React.Children.toArray(flattenChildren(children));
        childrenArray = reversed ? [...childrenArray].reverse() : childrenArray;
        childrenArray = childrenArray.map((child: any, index: number) => {
          return (
            <React.Fragment key={child.key ?? `spaced-child-${index}`}>
              {child}
              {index < childrenArray.length - 1 && (
                //@ts-ignore
                <StyledVStackSpacer size={space} />
              )}
            </React.Fragment>
          );
        });

        return childrenArray;
      };
      return (
        <StyledVStack ref={ref} {...(props as StyledVStackProps)}>
          {getSpacedChildren(children)}
        </StyledVStack>
      );
    }
  );
}
