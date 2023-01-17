import React, { forwardRef } from 'react';
import type { IHStackProps } from './types';
import { flattenChildren } from '../utils/getSpacedChild';

export function HStack<StyledHStackProps, StyledHStackSpacerProps>({
  StyledHStack,
  StyledHStackSpacer,
}: {
  StyledHStack: React.ComponentType<StyledHStackProps>;
  StyledHStackSpacer: React.ComponentType<StyledHStackSpacerProps>;
}) {
  return forwardRef(
    (
      { children, reversed, space, ...props }: StyledHStackProps & IHStackProps,
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
                <StyledHStackSpacer size={space} />
              )}
            </React.Fragment>
          );
        });

        return childrenArray;
      };
      return (
        <StyledHStack ref={ref} {...(props as StyledHStackProps)}>
          {getSpacedChildren(children)}
        </StyledHStack>
      );
    }
  );
}
