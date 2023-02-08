import React, { forwardRef } from 'react';
import { flattenChildren } from '@universa11y/utils';

export const ButtonGroup = (
  StyledButtonGroup: any,
  StyledButtonGroupHSpacer: any,
  StyledButtonGroupVSpacer: any
) =>
  forwardRef(
    (
      {
        space,
        direction = 'row',
        isAttached,
        isDisabled,
        children,
        reversed,
        ...props
      }: any,
      ref: any
    ) => {
      let computedChildren;
      let childrenArray = React.Children.toArray(flattenChildren(children));
      childrenArray = reversed ? [...childrenArray].reverse() : childrenArray;

      if (childrenArray) {
        computedChildren = childrenArray.map((child: any, index: number) => {
          // let borderRadius,
          //   borderTopLeftRadius,
          //   borderTopRightRadius,
          //   borderBottomLeftRadius,
          //   borderBottomRightRadius,
          //   borderLeftWidth,
          //   borderTopWidth,
          //   height,
          //   width;

          if (typeof child === 'string' || typeof child === 'number') {
            return child;
          }

          // if (isAttached && childrenArray.length !== 1) {
          //   if (direction === 'column') {
          //     if (index !== 0) {
          //       borderTopWidth = 0;
          //     }
          //     if (index === 0) {
          //       borderBottomLeftRadius = 0;
          //       borderBottomRightRadius = 0;
          //     }
          //     if (index > 0 && index < children.length - 1) {
          //       borderRadius = 0;
          //     }
          //     if (index === children.length - 1) {
          //       borderTopLeftRadius = 0;
          //       borderTopRightRadius = 0;
          //     }
          //   } else {
          //     if (index !== 0) {
          //       borderLeftWidth = 0;
          //     }
          //     if (index === 0) {
          //       borderTopRightRadius = 0;
          //       borderBottomRightRadius = 0;
          //     }
          //     if (index > 0 && index < children.length - 1) {
          //       borderRadius = 0;
          //     }
          //     if (index === children.length - 1) {
          //       borderTopLeftRadius = 0;
          //       borderBottomLeftRadius = 0;
          //     }
          //   }
          // }
          // const updatedSx = {
          //   borderRadius,
          //   borderTopLeftRadius,
          //   borderTopRightRadius,
          //   borderBottomLeftRadius,
          //   borderBottomRightRadius,
          //   borderLeftWidth,
          //   borderTopWidth,
          //   height,
          //   width,
          // };

          const clonedChild = React.cloneElement(child, {
            ...child.props,
            isDisabled,
            // sx: updatedSx,
          });

          return (
            <React.Fragment key={child.key ?? `spaced-child-${index}`}>
              {clonedChild}
              {index < childrenArray.length - 1 &&
                (direction === 'column' ? (
                  <StyledButtonGroupHSpacer size={space} />
                ) : (
                  <StyledButtonGroupVSpacer size={space} />
                ))}
            </React.Fragment>
          );
        });
      }

      if (computedChildren)
        return (
          <StyledButtonGroup
            ref={ref}
            {...props}
            sx={{
              flexDirection: direction,
              space: isAttached ? undefined : space,
            }}
            // space={isAttached ? undefined : space}
          >
            {computedChildren}
          </StyledButtonGroup>
        );
      return null;
    }
  );
