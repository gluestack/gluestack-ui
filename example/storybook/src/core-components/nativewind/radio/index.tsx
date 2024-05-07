'use client';
import React, { useMemo } from 'react';
import { createRadio } from '@gluestack-ui/radio';
import { Svg } from 'react-native-svg';
import { Pressable, View, Platform, Text } from 'react-native';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/nativewind-utils/withStyleContext';
import { cssInterop } from 'nativewind';
import { withStates } from '@gluestack-ui/nativewind-utils/withStates';
import { withStyleContextAndStates } from '@gluestack-ui/nativewind-utils/withStyleContextAndStates';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';

const PrimitiveIcon = React.forwardRef(
  (
    { height, width, fill = 'none', color, size, as: AsComp, ...props }: any,
    ref?: any
  ) => {
    const sizeProps = useMemo(() => {
      return size ? { size } : { height, width };
    }, [size, height, width]);

    if (AsComp) {
      return (
        <AsComp ref={ref} fill={fill} color={color} {...props} {...sizeProps} />
      );
    }
    return (
      <Svg
        ref={ref}
        height={height}
        width={width}
        fill={fill}
        color={color}
        {...props}
      />
    );
  }
);

const radioStyle = tva({
  base: 'group/radio flex-row justify-start items-center web:cursor-pointer data-[disabled=true]:web:cursor-not-allowed',
  variants: {
    size: {
      sm: 'gap-1.5',
      md: 'gap-2',
      lg: 'gap-2',
    },
  },
});

const radioGroupStyle = tva({
  base: 'gap-2',
});

const radioIconStyle = tva({
  base: 'rounded-full justify-center items-center',

  parentVariants: {
    size: {
      sm: 'h-3 w-3',
      md: 'h-4 w-4',
      lg: 'h-[18px] w-[18px]',
    },
  },
});

const radioIndicatorStyle = tva({
  base: 'justify-center items-center bg-transparent border-outline-400 border-2 rounded-full data-[focus-visible=true]:web:outline-2 data-[focus-visible=true]:web:outline-primary-700 data-[focus-visible=true]:web:outline data-[checked=true]:border-primary-600 data-[checked=true]:bg-transparent data-[hover=true]:border-outline-500 data-[hover=true]:bg-transparent data-[hover=true]:data-[checked=true]:bg-transparent data-[hover=true]:data-[checked=true]:border-primary-700 data-[hover=true]:data-[invalid=true]:border-error-700 data-[hover=true]:data-[disabled=true]:opacity-40 data-[hover=true]:data-[disabled=true]:border-outline-400 data-[hover=true]:data-[disabled=true]:data-[invalid=true]:border-error-400 data-[active=true]:bg-transparent data-[active=true]:border-primary-800 data-[invalid=true]:border-error-700 data-[disabled=true]:opacity-40 data-[disabled=true]:data-[checked=true]:border-outline-400 data-[disabled=true]:data-[checked=true]:bg-transparent data-[disabled=true]:data-[invalid=true]:border-error-400',
  parentVariants: {
    size: {
      sm: 'p-px h-4 w-4',
      md: 'p-[1.5px] h-5 w-5',
      lg: 'p-0.5 h-6 w-6',
    },
  },
});

const radioLabelStyle = tva({
  base: 'text-typography-600 data-[checked=true]:text-typography-900 data-[hover=true]:text-typography-900 data-[hover=true]:data-[disabled=true]:text-typography-600 data-[hover=true]:data-[disabled=true]:data-[checked=true]:text-typography-900 data-[active=true]:text-typography-900 data-[active=true]:data-[checked=true]:text-typography-900 data-[disabled=true]:opacity-40 web:select-none',
  parentVariants: {
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
  },
});

const SCOPE = 'Radio';
const UIRadio = createRadio({
  // @ts-ignore
  Root:
    Platform.OS === 'web'
      ? withStyleContext(View, SCOPE)
      : withStyleContextAndStates(Pressable, SCOPE),
  Group: View,
  Icon: Platform.OS === 'web' ? PrimitiveIcon : withStates(PrimitiveIcon),
  Indicator: Platform.OS === 'web' ? View : withStates(View),
  Label: Platform.OS === 'web' ? Text : withStates(Text),
});

cssInterop(UIRadio, { className: 'style' });
cssInterop(UIRadio.Group, { className: 'style' });
cssInterop(UIRadio.Indicator, { className: 'style' });
cssInterop(UIRadio.Label, { className: 'style' });
cssInterop(UIRadio.Icon, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      height: 'height',
      width: 'width',
      //@ts-ignore
      fill: 'fill',
      color: 'color',
    },
  },
});

type IRadioProps = Omit<React.ComponentProps<typeof UIRadio>, 'context'> &
  VariantProps<typeof radioStyle>;
const Radio = React.forwardRef(
  (
    { className, size = 'md', ...props }: { className?: string } & IRadioProps,
    ref?: any
  ) => {
    return (
      <UIRadio
        className={radioStyle({ class: className, size })}
        {...props}
        ref={ref}
        context={{ size }}
      />
    );
  }
);

type IRadioGroupProps = React.ComponentProps<typeof UIRadio.Group> &
  VariantProps<typeof radioGroupStyle>;
const RadioGroup = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IRadioGroupProps,
    ref?: any
  ) => {
    return (
      <UIRadio.Group
        className={radioGroupStyle({ class: className })}
        {...props}
        ref={ref}
      />
    );
  }
);

type IRadioIndicatorProps = React.ComponentProps<typeof UIRadio.Indicator> &
  VariantProps<typeof radioIndicatorStyle>;
const RadioIndicator = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IRadioIndicatorProps,
    ref?: any
  ) => {
    const { size } = useStyleContext(SCOPE);
    return (
      <UIRadio.Indicator
        className={radioIndicatorStyle({
          parentVariants: { size },
          class: className,
        })}
        ref={ref}
        {...props}
      />
    );
  }
);

type IRadioLabelProps = React.ComponentProps<typeof UIRadio.Label> &
  VariantProps<typeof radioIndicatorStyle>;
const RadioLabel = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IRadioLabelProps,
    ref?: any
  ) => {
    const { size } = useStyleContext(SCOPE);
    return (
      <UIRadio.Label
        className={radioLabelStyle({
          parentVariants: { size },
          class: className,
        })}
        ref={ref}
        {...props}
      />
    );
  }
);

type IRadioIconProps = React.ComponentProps<typeof UIRadio.Icon> &
  VariantProps<typeof radioIconStyle>;
const RadioIcon = React.forwardRef(
  (
    {
      className,
      size,
      color = 'gray',
      ...props
    }: IRadioIconProps & {
      className?: string;
      fill?: string;
      color?: string;
      as?: any;
    },
    ref?: any
  ) => {
    const { size: parentSize } = useStyleContext(SCOPE);

    if (typeof size === 'number') {
      return (
        <UIRadio.Icon
          ref={ref}
          {...props}
          color={color}
          className={radioIconStyle({ class: className })}
          size={size}
        />
      );
    } else if (
      (props.height !== undefined || props.width !== undefined) &&
      size === undefined
    ) {
      return (
        <UIRadio.Icon
          ref={ref}
          {...props}
          color={color}
          className={radioIconStyle({ class: className })}
        />
      );
    }
    return (
      <UIRadio.Icon
        {...props}
        className={radioIconStyle({
          parentVariants: {
            size: parentSize,
          },
          size,
          class: className,
        })}
        color={color}
        ref={ref}
      />
    );
  }
);

Radio.displayName = 'Radio';
RadioGroup.displayName = 'RadioGroup';
RadioIndicator.displayName = 'RadioIndicator';
RadioLabel.displayName = 'RadioLabel';
RadioIcon.displayName = 'RadioIcon';

export { Radio, RadioGroup, RadioIndicator, RadioLabel, RadioIcon };
