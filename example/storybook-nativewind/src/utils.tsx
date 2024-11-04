import React from 'react';
import Svg from 'react-native-svg';

// Transform code To Remove Wrapper And Function Name
export function transformedCode(
  code: string,
  type: 'jsx' | 'function' = 'jsx',
  componentName?: string
) {
  if (type === 'function') {
    return `function App() {
      ${code}
    return <Wrapper><${componentName} /></Wrapper>;
  };`;
  }
  return `function App() {
    return <Wrapper>${code}</Wrapper>;
  };`;
}

export function transformedThemedCode(
  code: string,
  type: 'jsx' | 'function' = 'jsx',
  componentName?: string
) {
  if (type === 'function') {
    return `function App() {
      ${code}
    return <GluestackUIProvider><${componentName} /></GluestackUIProvider>;
  };`;
  }
  return `function App() {
    return <GluestackUIProvider>${code}</GluestackUIProvider>;
  };`;
}

export function transformedCodeWithoutWrapper(
  code: string,
  type: 'jsx' | 'function' = 'jsx',
  componentName?: string
) {
  if (type === 'function') {
    return `function App() {
      ${code}
    return <${componentName} />;
  };`;
  }
  return `function App() {
    return ${code};
  };`;
}

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
  React.ElementRef<typeof Svg>,
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
