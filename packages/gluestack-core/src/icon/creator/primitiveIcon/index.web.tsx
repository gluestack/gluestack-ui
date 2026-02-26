import React from 'react';
import { createIcon } from '../createIcon';

const accessClassName = (style: any): string | undefined => {
  if (!style) return undefined;
  // NativeWind v5 (react-native-css) passes style as an array: [prevStyle, { $$css: true, <propKey>: classString }]
  // Search for the $$css object regardless of its position in the array.
  const styleObject = Array.isArray(style)
    ? style.find((s: any) => s && typeof s === 'object' && '$$css' in s)
    : style;
  if (!styleObject) return undefined;
  const keys = Object.keys(styleObject);
  if (keys.length < 2) return undefined;
  return styleObject[keys[1]];
};

const Svg = React.forwardRef<
  React.ComponentRef<'svg'>,
  React.ComponentPropsWithoutRef<'svg'>
>(({ style, className, ...props }, ref) => {
  const calculateClassName = React.useMemo(() => {
    return className === undefined ? accessClassName(style) : className;
  }, [className, style]);
  return <svg ref={ref} {...props} className={calculateClassName} />;
});

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

const PrimitiveIcon = React.forwardRef<
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
      stroke,
      as: AsComp,
      ...props
    },
    ref
  ) => {
    color = color ?? classNameColor;
    const sizeProps = React.useMemo(() => {
      if (size) return { size };
      if (height && width) return { height, width };
      if (height) return { height };
      if (width) return { width };
      return {};
    }, [size, height, width]);

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
      return <AsComp ref={ref} {...props} {...sizeProps} {...colorProps} />;
    }
    return (
      <Svg ref={ref} height={height} width={width} {...colorProps} {...props} />
    );
  }
);

const UIIcon = createIcon({
  Root: PrimitiveIcon,
});

export { PrimitiveIcon, Svg, UIIcon };