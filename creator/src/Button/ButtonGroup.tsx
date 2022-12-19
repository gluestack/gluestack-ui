import React, { forwardRef } from 'react';
import { flattenChildren } from '../utils/getSpacedChild';

export const ButtonGroup = (
  StyledButtonGroup: any,
  StyledButtonGroupSpacer: any
) =>
  forwardRef(({ children, reversed, space, ...props }: any, ref: any) => {
    const getSpacedChildren = (children: any) => {
      let childrenArray = React.Children.toArray(flattenChildren(children));
      childrenArray = reversed ? [...childrenArray].reverse() : childrenArray;
      childrenArray = childrenArray.map((child: any, index: number) => {
        return (
          <React.Fragment key={child.key ?? `spaced-child-${index}`}>
            {child}
            {index < childrenArray.length - 1 && (
              <StyledButtonGroupSpacer size={space} />
            )}
          </React.Fragment>
        );
      });

      return childrenArray;
    };
    return (
      <StyledButtonGroup ref={ref} {...props}>
        {getSpacedChildren(children)}
      </StyledButtonGroup>
    );
  });
