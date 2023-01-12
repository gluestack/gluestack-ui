import React, { forwardRef } from 'react';
import { flattenChildren } from '../utils/getSpacedChild';

function isObject(item: any) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

function mergeDeep(target: any, ...sources: any): any {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}

export const ButtonGroup = (
  StyledButtonGroup: any,
  StyledButtonGroupSpacer: any
) =>
  forwardRef(
    (
      {
        children,
        reversed,
        direction = 'column',
        isAttached = true,
        ...props
      }: any,
      ref: any
    ) => {
      // let direction = variant;
      const getSpacedChildren = (childrens: any) => {
        let childrenArray = React.Children.toArray(flattenChildren(childrens));
        childrenArray = reversed ? [...childrenArray].reverse() : childrenArray;
        childrenArray = childrenArray.map((child: any, index: number) => {
          let borderRadius,
            borderTopLeftRadius,
            borderTopRightRadius,
            borderBottomLeftRadius,
            borderBottomRightRadius,
            borderRightWidth,
            borderLeftWidth,
            borderTopWidth,
            borderBottomWidth,
            height,
            width;
          // flexDirection = direction;

          if (isAttached) {
            borderRadius = 0;

            if (index === 0) {
              if (direction === 'column') {
                borderTopLeftRadius = 4;
                borderTopRightRadius = 4;
                borderBottomWidth = 0;
              } else {
                borderRightWidth = 0;
                borderTopLeftRadius = 4;
                borderBottomLeftRadius = 4;
              }
            } else if (index === children?.length - 1) {
              if (direction === 'column') {
                borderBottomLeftRadius = 4;
                borderBottomRightRadius = 4;
                borderTopWidth = 0;
              } else {
                borderLeftWidth = 0;
                borderTopRightRadius = 4;
                borderBottomRightRadius = 4;
              }
            }
          } else {
            if (direction === 'column') {
              height = '$2';
            } else {
              width = '$2';
            }
          }

          const updatedSx = {
            style: {
              borderRadius,
              borderTopLeftRadius,
              borderTopRightRadius,
              borderBottomLeftRadius,
              borderBottomRightRadius,
              borderRightWidth,
              borderLeftWidth,
              borderBottomWidth,
              borderTopWidth,
              height,
              width,
            },
          };

          mergeDeep(updatedSx, child.props.sx);

          const clonedChild = React.cloneElement(
            child,
            {
              ...child.props,
              sx: updatedSx,
            },
            null
          );

          // sx = { style: {} };
          return (
            <React.Fragment key={child.key ?? `spaced-child-${index}`}>
              {clonedChild}
              {/* {child} */}
              {index < childrenArray.length - 1 && (
                <StyledButtonGroupSpacer variant={direction} />
              )}
            </React.Fragment>
          );
        });

        return childrenArray;
      };

      let newSx = { style: { flexDirection: direction } };
      if (props.sx && props.sx.style) {
        props.sx.style.flexDirection = direction;
      } else {
        props['sx'] = newSx;
      }
      return (
        <StyledButtonGroup ref={ref} {...props}>
          {getSpacedChildren(children)}
        </StyledButtonGroup>
      );
    }
  );
