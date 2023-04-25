import React, { forwardRef } from 'react';
import type { IHStackProps } from './types';
import { flattenChildren } from '@gluestack-ui/utils';

export function HStack<StyledHStackProps, StyledHStackSpacerProps>(
  Root: React.ComponentType<StyledHStackProps>,
  Spacer: React.ComponentType<StyledHStackSpacerProps>
) {
  return forwardRef(
    (
      { children, reversed, space, ...props }: StyledHStackProps & IHStackProps,
      ref?: any
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
                <Spacer size={space} />
              )}
            </React.Fragment>
          );
        });

        return childrenArray;
      };
      return (
        <Root ref={ref} {...(props as StyledHStackProps)}>
          {getSpacedChildren(children)}
        </Root>
      );
    }
  );
}
