import React, { forwardRef } from 'react';
import { G } from './nbSvg';
import { UIContext } from '@gluestack-ui/provider';

const SVGIcon = ({ children, ...props }: any, ref?: any) => {
  const { StyledSvg } = React.useContext(UIContext);
  const { focusable, stroke, color, size, ...resolvedProps } = props;
  const strokeHex = stroke || '';
  const colorHex = color || '';

  return (
    <StyledSvg
      {...resolvedProps}
      size={size}
      color={colorHex}
      stroke={strokeHex}
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
      ) : null}
    </StyledSvg>
  );
};

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
export default forwardRef(SVGIcon);
