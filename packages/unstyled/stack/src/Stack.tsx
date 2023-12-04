import React, { forwardRef } from 'react';
import type { IStackProps } from './types';
import { flattenChildren } from '@gluestack-ui/utils';

export function Stack<
  StyledStackProps,
  StyledStackHSpacerProps,
  StyledStackVSpacerProps
>(
  Root: React.ComponentType<StyledStackProps>,
  HSpacer: React.ComponentType<StyledStackHSpacerProps>,
  VSpacer: React.ComponentType<StyledStackVSpacerProps>
) {
  return forwardRef(
    (
      {
        children,
        reversed,
        space,
        direction,
        ...props
      }: StyledStackProps & IStackProps,
      ref?: any
    ) => {
      const getSpacedChildren = (children: any) => {
        let childrenArray = React.Children.toArray(flattenChildren(children));
        childrenArray = reversed ? [...childrenArray].reverse() : childrenArray;
        childrenArray = childrenArray.map((child: any, index: number) => {
          return (
            <React.Fragment key={child.key ?? `spaced-child-${index}`}>
              {child}
              {index < childrenArray.length - 1 &&
                (direction === 'column' ? (
                  //@ts-ignore
                  <HSpacer size={space} />
                ) : (
                  //@ts-ignore
                  <VSpacer size={space} />
                ))}
            </React.Fragment>
          );
        });

        return childrenArray;
      };
      return (
        <Root
          ref={ref}
          {...(props as StyledStackProps)}
          sx={{
            flexDirection: direction,
          }}
        >
          {getSpacedChildren(children)}
        </Root>
      );
    }
  );
}
