'use client';
import React, { useMemo } from 'react';
import { createCheckbox } from '@gluestack-ui/checkbox';
import { View, Pressable, Text } from 'react-native';
import type { TextProps, ViewProps } from 'react-native';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { Svg } from 'react-native-svg';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/nativewind-utils/withStyleContext';
import { withStyleContextAndStates } from '@gluestack-ui/nativewind-utils/withStyleContextAndStates';
import { cssInterop } from 'nativewind';
import { withStates } from '@gluestack-ui/nativewind-utils/withStates';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
import { Platform } from 'react-native';

const IndicatorWrapper = React.forwardRef<
  React.ElementRef<typeof View>,
  ViewProps
>(({ ...props }, ref) => {
  return <View {...props} ref={ref} />;
});

const LabelWrapper = React.forwardRef<React.ElementRef<typeof Text>, TextProps>(
  ({ ...props }, ref) => {
    return <Text {...props} ref={ref} />;
  }
);

type IPrimitiveIcon = React.ComponentPropsWithoutRef<typeof Svg> & {
  height?: number | string;
  width?: number | string;
  fill?: string;
  color?: string;
  size?: number | string;
  stroke?: string;
  as?: React.ElementType;
  className?: string;
};

const IconWrapper = React.forwardRef<
  React.ElementRef<typeof PrimitiveIcon>,
  IPrimitiveIcon
>(({ ...props }, ref) => {
  return <PrimitiveIcon {...props} ref={ref} />;
});

const PrimitiveIcon = React.forwardRef<
  React.ElementRef<typeof Svg>,
  IPrimitiveIcon
>(({ height, width, fill, color, size, stroke, as: AsComp, ...props }, ref) => {
  const sizeProps = useMemo(() => {
    if (size) return { size };
    if (height && width) return { height, width };
    if (height) return { height };
    if (width) return { width };
    return {};
  }, [size, height, width]);

  let colorProps = {};
  if (color) {
    colorProps = { ...colorProps, color: color };
  }
  if (stroke) {
    colorProps = { ...colorProps, stroke: stroke };
  }
  if (fill) {
    colorProps = { ...colorProps, fill: fill };
  }
  if (AsComp) {
    return <AsComp ref={ref} {...sizeProps} {...colorProps} {...props} />;
  }
  return (
    <Svg ref={ref} height={height} width={width} {...colorProps} {...props} />
  );
});

const SCOPE = 'CHECKBOX';
const UICheckbox = createCheckbox({
  // @ts-ignore
  Root:
    Platform.OS === 'web'
      ? withStyleContext(View, SCOPE)
      : withStyleContextAndStates(Pressable, SCOPE),
  Group: Platform.OS === 'web' ? View : withStates(View),
  Icon: Platform.OS === 'web' ? IconWrapper : withStates(IconWrapper),
  Label: Platform.OS === 'web' ? LabelWrapper : withStates(LabelWrapper),
  Indicator:
    Platform.OS === 'web' ? IndicatorWrapper : withStates(IndicatorWrapper),
});

cssInterop(UICheckbox, { className: 'style' });
cssInterop(UICheckbox.Group, { className: 'style' });
cssInterop(LabelWrapper, { className: 'style' });
cssInterop(IndicatorWrapper, { className: 'style' });
cssInterop(IconWrapper, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      height: true,
      width: true,
      // @ts-ignore
      fill: true,
      color: true,
      stroke: true,
    },
  },
});

const checkboxStyle = tva({
  base: 'group/checkbox flex-row items-center justify-start web:cursor-pointer data-[disabled=true]:cursor-not-allowed',
  variants: {
    size: {
      lg: 'gap-2',
      md: 'gap-2',
      sm: 'gap-1.5',
    },
  },
});

const checkboxIndicatorStyle = tva({
  base: 'justify-center items-center border-outline-400 bg-transparent rounded web:data-[focus-visible=true]:outline-none web:data-[focus-visible=true]:ring-2 web:data-[focus-visible=true]:ring-indicator-primary data-[checked=true]:bg-primary-600 data-[checked=true]:border-primary-600 data-[hover=true]:data-[checked=false]:border-outline-500 data-[hover=true]:bg-transparent data-[hover=true]:data-[invalid=true]:border-error-700 data-[hover=true]:data-[checked=true]:bg-primary-700 data-[hover=true]:data-[checked=true]:border-primary-700 data-[hover=true]:data-[checked=true]:data-[disabled=true]:border-primary-600 data-[hover=true]:data-[checked=true]:data-[disabled=true]:bg-primary-600 data-[hover=true]:data-[checked=true]:data-[disabled=true]:opacity-40 data-[hover=true]:data-[checked=true]:data-[disabled=true]:data-[invalid=true]:border-error-700 data-[hover=true]:data-[disabled=true]:border-outline-400 data-[hover=true]:data-[disabled=true]:data-[invalid=true]:border-error-700 data-[active=true]:data-[checked=true]:bg-primary-800 data-[active=true]:data-[checked=true]:border-primary-800 data-[invalid=true]:border-error-700 data-[disabled=true]:opacity-40',
  parentVariants: {
    size: {
      lg: 'w-6 h-6 border-[3px]',
      md: 'w-5 h-5 border-2',
      sm: 'w-4 h-4 border-2',
    },
  },
});

const checkboxLabelStyle = tva({
  base: 'text-typography-600 data-[checked=true]:text-typography-900 data-[hover=true]:text-typography-900 data-[hover=true]:data-[checked=true]:text-typography-900 data-[hover=true]:data-[checked=true]:data-[disabled=true]:text-typography-900 data-[hover=true]:data-[disabled=true]:text-typography-400 data-[active=true]:text-typography-900 data-[active=true]:data-[checked=true]:text-typography-900 data-[disabled=true]:opacity-40 web:select-none',
  parentVariants: {
    size: {
      lg: 'text-lg',
      md: 'text-base',
      sm: 'text-sm',
    },
  },
});

const checkboxIconStyle = tva({
  base: 'text-typography-50 fill-none',

  parentVariants: {
    size: {
      sm: 'h-3 w-3',
      md: 'h-4 w-4',
      lg: 'h-5 w-5',
    },
  },
});

const CheckboxGroup = UICheckbox.Group;

type ICheckboxProps = React.ComponentPropsWithoutRef<typeof UICheckbox> &
  VariantProps<typeof checkboxStyle>;

const Checkbox = React.forwardRef<
  React.ElementRef<typeof UICheckbox>,
  ICheckboxProps
>(({ className, size = 'md', ...props }, ref) => {
  return (
    <UICheckbox
      className={checkboxStyle({
        class: className,
        size,
      })}
      {...props}
      context={{
        size,
      }}
      ref={ref}
    />
  );
});

type ICheckboxIndicatorProps = React.ComponentPropsWithoutRef<
  typeof UICheckbox.Indicator
> &
  VariantProps<typeof checkboxIndicatorStyle>;

const CheckboxIndicator = React.forwardRef<
  React.ElementRef<typeof UICheckbox.Indicator>,
  ICheckboxIndicatorProps
>(({ className, ...props }, ref) => {
  const { size: parentSize } = useStyleContext(SCOPE);

  return (
    <UICheckbox.Indicator
      className={checkboxIndicatorStyle({
        parentVariants: {
          size: parentSize,
        },
        class: className,
      })}
      {...props}
      ref={ref}
    />
  );
});

type ICheckboxLabelProps = React.ComponentPropsWithoutRef<
  typeof UICheckbox.Label
> &
  VariantProps<typeof checkboxLabelStyle>;
const CheckboxLabel = React.forwardRef<
  React.ElementRef<typeof UICheckbox.Label>,
  ICheckboxLabelProps
>(({ className, ...props }, ref) => {
  const { size: parentSize } = useStyleContext(SCOPE);
  return (
    <UICheckbox.Label
      className={checkboxLabelStyle({
        parentVariants: {
          size: parentSize,
        },
        class: className,
      })}
      {...props}
      ref={ref}
    />
  );
});

type ICheckboxIconProps = React.ComponentPropsWithoutRef<
  typeof UICheckbox.Icon
> &
  VariantProps<typeof checkboxIconStyle>;

const CheckboxIcon = React.forwardRef<
  React.ElementRef<typeof UICheckbox.Icon>,
  ICheckboxIconProps
>(({ className, size, ...props }, ref) => {
  const { size: parentSize } = useStyleContext(SCOPE);

  if (typeof size === 'number') {
    return (
      <UICheckbox.Icon
        ref={ref}
        {...props}
        className={checkboxIconStyle({ class: className })}
        size={size}
      />
    );
  } else if (
    (props.height !== undefined || props.width !== undefined) &&
    size === undefined
  ) {
    return (
      <UICheckbox.Icon
        ref={ref}
        {...props}
        className={checkboxIconStyle({ class: className })}
      />
    );
  }

  return (
    <UICheckbox.Icon
      className={checkboxIconStyle({
        parentVariants: {
          size: parentSize,
        },
        class: className,
        size,
      })}
      {...props}
      ref={ref}
    />
  );
});

Checkbox.displayName = 'Checkbox';
CheckboxIndicator.displayName = 'CheckboxIndicator';
CheckboxLabel.displayName = 'CheckboxLabel';
CheckboxIcon.displayName = 'CheckboxIcon';

export {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
  CheckboxGroup,
};
