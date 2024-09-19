'use client';
import React, { useMemo } from 'react';
import { createFab } from '@gluestack-ui/fab';
import { Platform, Text } from 'react-native';
import { Pressable } from 'react-native';
import { Svg } from 'react-native-svg';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/nativewind-utils/withStyleContext';
import { withStyleContextAndStates } from '@gluestack-ui/nativewind-utils/withStyleContextAndStates';
import { cssInterop } from 'nativewind';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';

type IPrimitiveIcon = React.ComponentPropsWithoutRef<typeof Svg> & {
  height?: number | string;
  width?: number | string;
  fill?: string;
  color?: string;
  size?: number | string;
  stroke?: string;
  as?: React.ElementType;
  className?: string;
  classNameColor?: string;
};

const PrimitiveIcon = React.forwardRef<
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
      ...props
    },
    ref
  ) => {
    color = color ?? classNameColor;
    const sizeProps = useMemo(() => {
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

const SCOPE = 'FAB';
const UIFab = createFab({
  Root:
    Platform.OS === 'web'
      ? withStyleContext(Pressable, SCOPE)
      : withStyleContextAndStates(Pressable, SCOPE),
  Label: Text,
  Icon: PrimitiveIcon,
});

cssInterop(UIFab, { className: 'style' });
cssInterop(UIFab.Label, { className: 'style' });
//@ts-ignore
cssInterop(UIFab.Icon, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      height: true,
      width: true,
      //@ts-ignore
      fill: true,
      color: 'classNameColor',
      stroke: true,
    },
  },
});

const fabStyle = tva({
  base: 'group/fab bg-primary-500 rounded-full z-20 p-4 flex-row items-center justify-center absolute hover:bg-primary-600 active:bg-primary-700 disabled:opacity-40 disabled:pointer-events-all disabled:cursor-not-allowed data-[focus=true]:web:outline-none data-[focus-visible=true]:web:ring-2 data-[focus-visible=true]:web:ring-indicator-info shadow-hard-2',
  variants: {
    size: {
      sm: 'px-2.5 py-2.5',
      md: 'px-3 py-3',
      lg: 'px-4 py-4',
    },
    placement: {
      'top right': 'top-4 right-4',
      'top left': 'top-4 left-4',
      'bottom right': 'bottom-4 right-4',
      'bottom left': 'bottom-4 left-4',
      'top center': 'top-4 self-center',
      'bottom center': 'bottom-4 self-center',
    },
  },
});

const fabLabelStyle = tva({
  base: 'text-typography-50 font-normal font-body tracking-md text-left mx-2',
  variants: {
    isTruncated: {
      true: '',
    },
    bold: {
      true: 'font-bold',
    },
    underline: {
      true: 'underline',
    },
    strikeThrough: {
      true: 'line-through',
    },
    size: {
      '2xs': 'text-2xs',
      'xs': 'text-xs',
      'sm': 'text-sm',
      'md': 'text-base',
      'lg': 'text-lg',
      'xl': 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
    },
    sub: {
      true: 'text-xs',
    },
    italic: {
      true: 'italic',
    },
    highlight: {
      true: 'bg-yellow-500',
    },
  },
  parentVariants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
});

const fabIconStyle = tva({
  base: 'text-typography-50 hover:text-typography-0 active:text-typography-0 fill-none',
  variants: {
    size: {
      '2xs': 'h-3 w-3',
      'xs': 'h-3.5 w-3.5',
      'sm': 'h-4 w-4',
      'md': 'w-[18px] h-[18px]',
      'lg': 'h-5 w-5',
      'xl': 'h-6 w-6',
    },
  },
});

type IFabProps = Omit<React.ComponentPropsWithoutRef<typeof UIFab>, 'context'> &
  VariantProps<typeof fabStyle>;

const Fab = React.forwardRef<React.ElementRef<typeof UIFab>, IFabProps>(
  ({ size = 'md', placement = 'bottom right', className, ...props }, ref) => {
    return (
      <UIFab
        ref={ref}
        {...props}
        className={fabStyle({ size, placement, class: className })}
        context={{ size }}
      />
    );
  }
);

type IFabLabelProps = React.ComponentPropsWithoutRef<typeof UIFab.Label> &
  VariantProps<typeof fabLabelStyle>;

const FabLabel = React.forwardRef<
  React.ElementRef<typeof UIFab.Label>,
  IFabLabelProps
>(
  (
    {
      size,
      isTruncated = false,
      bold = false,
      underline = false,
      strikeThrough = false,
      className,
      ...props
    },
    ref
  ) => {
    const { size: parentSize } = useStyleContext(SCOPE);
    return (
      <UIFab.Label
        ref={ref}
        {...props}
        className={fabLabelStyle({
          parentVariants: {
            size: parentSize,
          },
          size,
          isTruncated,
          bold,
          underline,
          strikeThrough,
          class: className,
        })}
      />
    );
  }
);

type IFabIconProps = React.ComponentPropsWithoutRef<typeof UIFab.Icon> &
  VariantProps<typeof fabIconStyle>;

const FabIcon = React.forwardRef<
  React.ElementRef<typeof UIFab.Icon>,
  IFabIconProps
>(({ size, className, ...props }, ref) => {
  const { size: parentSize } = useStyleContext(SCOPE);

  if (typeof size === 'number') {
    return (
      <UIFab.Icon
        ref={ref}
        {...props}
        className={fabIconStyle({ class: className })}
        size={size}
      />
    );
  } else if (
    (props.height !== undefined || props.width !== undefined) &&
    size === undefined
  ) {
    return (
      <UIFab.Icon
        ref={ref}
        {...props}
        className={fabIconStyle({ class: className })}
      />
    );
  }
  return (
    <UIFab.Icon
      ref={ref}
      {...props}
      className={fabIconStyle({
        parentVariants: {
          size: parentSize,
        },
        size,
        class: className,
      })}
    />
  );
});

Fab.displayName = 'Fab';
FabLabel.displayName = 'FabLabel';
FabIcon.displayName = 'FabIcon';

export { Fab, FabLabel, FabIcon };
