import React, { forwardRef } from 'react';
import { flattenChildren } from '@gluestack-ui/utils';

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
        isReversed,
        ...props
      }: any,
      ref?: any
    ) => {
      let computedChildren;
      let childrenArray = React.Children.toArray(flattenChildren(children));
      childrenArray = isReversed ? [...childrenArray].reverse() : childrenArray;

      if (childrenArray) {
        computedChildren = childrenArray.map((child: any, index: number) => {
          if (typeof child === 'string' || typeof child === 'number') {
            return child;
          }

          const attachedStyles: any = {};

          if (index === 0) {
            if (direction === 'column') {
              attachedStyles.borderBottomLeftRadius = 0;
              attachedStyles.borderBottomRightRadius = 0;
            } else {
              attachedStyles.borderTopRightRadius = 0;
              attachedStyles.borderBottomRightRadius = 0;
            }
          } else if (index === children?.length - 1) {
            if (direction === 'column') {
              attachedStyles.borderTopLeftRadius = 0;
              attachedStyles.borderTopRightRadius = 0;
            } else {
              attachedStyles.borderTopLeftRadius = 0;
              attachedStyles.borderBottomLeftRadius = 0;
            }
          } else {
            attachedStyles.borderRadius = 0;
          }

          const childProps = {
            isDisabled,
            ...child.props,
            style: {
              ...(isAttached ? attachedStyles : {}),
              ...child.props.style,
            },
          };

          const clonedChild = React.cloneElement(child, {
            ...childProps,
          });

          return (
            <React.Fragment key={child.key ?? `spaced-child-${index}`}>
              {clonedChild}

              {index < childrenArray.length - 1 &&
                (direction === 'column' ? (
                  <StyledButtonGroupVSpacer space={!isAttached ? space : 0} />
                ) : (
                  <StyledButtonGroupHSpacer space={!isAttached ? space : 0} />
                ))}
            </React.Fragment>
          );
        });
      }

      if (computedChildren)
        return (
          <StyledButtonGroup flexDirection={direction} {...props} ref={ref}>
            {computedChildren}
          </StyledButtonGroup>
        );
      return null;
    }
  );
