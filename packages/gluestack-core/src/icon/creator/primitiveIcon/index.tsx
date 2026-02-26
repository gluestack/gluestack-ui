import React from 'react';
import { Svg } from 'react-native-svg';
import { createIcon } from '../createIcon';

export { Svg };
export type IPrimitiveIcon = {
  height?: number | string;
  width?: number | string;
  fill?: string;
  color?: string;
  size?: number | string;
  stroke?: string;
  as?: React.ElementType;
  className?: string;
  classNameColor?: string;
  style?: any;
};

export const PrimitiveIcon = React.forwardRef<
  React.ComponentRef<typeof Svg>,
  IPrimitiveIcon
>(
  (
    {
      height,
      width,
      fill,
      color,
      classNameColor,
      size,
      stroke = 'currentColor',
      as: AsComp,
      style,
      ...props
    },
    ref
  ) => {
    color = color ?? classNameColor;
    const sizeProps = React.useMemo(() => {
      if (size) return { size };
      // NativeWind v5 passes className-derived dimensions via the style prop.
      // Extract height/width from style as fallback for components like Lucide icons
      // that require explicit size props and don't read from the style object.
      const styleObj = (Array.isArray(style) ? style[0] : style) as any;
      const h = height ?? styleObj?.height;
      const w = width ?? styleObj?.width;
      if (h && w) return { height: h, width: w };
      if (h) return { height: h };
      if (w) return { width: w };
      return {};
    }, [size, height, width, style]);

    let colorProps = {};
    if (fill) {
      colorProps = { ...colorProps, fill: fill };
    }
    if (stroke !== 'currentColor') {
      colorProps = { ...colorProps, stroke: stroke };
    } else if (stroke === 'currentColor' && color !== undefined) {
      colorProps = { ...colorProps, stroke: color };
    }

    if (AsComp) {
      return (
        <AsComp
          ref={ref}
          {...props}
          style={style}
          {...sizeProps}
          {...colorProps}
        />
      );
    }
    return (
      <Svg ref={ref} height={height} width={width} {...colorProps} {...props} />
    );
  }
);

export const UIIcon = createIcon({
  Root: PrimitiveIcon,
});