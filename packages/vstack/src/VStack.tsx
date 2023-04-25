import React, { forwardRef } from 'react';
import type { IVStackProps } from './types';
import { flattenChildren } from '@gluestack-ui/utils';

export function VStack<StyledVStackProps, StyledVStackSpacerProps>(
  Root: React.ComponentType<StyledVStackProps>,
  Spacer: React.ComponentType<StyledVStackSpacerProps>
) {
  return forwardRef(
    (
      { children, reversed, space, ...props }: StyledVStackProps & IVStackProps,
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
        <Root ref={ref} {...(props as StyledVStackProps)}>
          {getSpacedChildren(children)}
        </Root>
      );
    }
  );
}
