import React, { forwardRef } from 'react';
import type { IVStackProps } from './types';
import { UIContext } from '../UIProvider';
import { flattenChildren } from '../utils/getSpacedChild';

export const VStack = forwardRef(
  ({ children, reversed, space, ...props }: IVStackProps) => {
    const { VStack: StyledVStack, VStackSpacer: StyledVStackSpacer } =
      React.useContext(UIContext);

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
      <StyledVStack {...props}>{getSpacedChildren(children)}</StyledVStack>
    );
  }
);
