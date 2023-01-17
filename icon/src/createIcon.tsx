import React, { forwardRef } from 'react';
import { Path, G } from './nbSvg';

import { questionOutlineIconPath } from '../Icons/questionIconPath';
interface CreateIconOptions {
  StyledIcon?: any;
  /**
   * The icon `svg` viewBox
   * @default "0 0 24 24"
   */
  viewBox?: string;
  /**
   * The `svg` path or group element
   * @type React.ReactElement | React.ReactElement[]
   */
  path?: React.ReactElement | React.ReactElement[];
  /**
   * If the `svg` has a single path, simply copy the path's `d` attribute
   */
  d?: string;
  /**
   * The display name useful in the dev tools
   */
  displayName?: string;
  /**
   * Default props automatically passed to the component; overwritable
   */
  defaultProps?: any;
}

const ChildPath = ({ element, fill, stroke: pathStroke }: any) => {
  const pathStrokeColor = pathStroke || '';
  const fillColor = fill || '';

  if (!element) {
    return null;
  }

  return React.cloneElement(element, {
    fill: fillColor ? fillColor : 'currentColor',
    stroke: pathStrokeColor,
  });
};

export const createIcon = ({
  StyledIcon,
  path,
  d,
  ...initialProps
}: CreateIconOptions) => {
  const createdIcon = (props: any, ref: any) => {
    let children = path;
    if (d && (!path || Object.keys(path).length === 0)) {
      children = <Path fill="currentColor" d={d} />;
    }

    const finalProps = {
      ...initialProps,
      ...props,
    };

    const { focusable, stroke, color, size, ...resolvedProps } = finalProps;

    let colorProps = {};

    if (color) {
      colorProps = { ...colorProps, color: color };
    }
    if (stroke) {
      colorProps = { ...colorProps, color: stroke };
    }

    return (
      <StyledIcon
        {...resolvedProps}
        size={size}
        {...colorProps}
        focusable={focusable}
        accessibilityRole="image"
        ref={ref}
      >
        {React.Children.count(children) > 0 ? (
          <G>
            {React.Children.map(children, (child, i) => (
              <ChildPath
                key={child?.key ?? i}
                element={child}
                {...child?.props}
              />
            ))}
          </G>
        ) : (
          questionOutlineIconPath
        )}
      </StyledIcon>
    );
  };
  return forwardRef(createdIcon);
};
