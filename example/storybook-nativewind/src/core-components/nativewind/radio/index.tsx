'use client';
import React from 'react';
import { createRadio } from '@gluestack-ui/radio';
import { Pressable, View, Platform, Text } from 'react-native';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/nativewind-utils/withStyleContext';
import { cssInterop } from '@gluestack-ui/nativewind-utils/cssInterop';
import { withStates } from '@gluestack-ui/nativewind-utils/withStates';
import { withStyleContextAndStates } from '@gluestack-ui/nativewind-utils/withStyleContextAndStates';

const radioStyle = tva({
  base: 'flex-row justify-start items-center web:cursor-pointer data-[disabled=true]:web:cursor-not-allowed gap-2',
  variants: {
    size: {
      sm: '',
      md: '',
      lg: '',
    },
  },
});

const groupStyle = tva({
  base: 'gap-2',
});

const iconStyle = tva({
  base: 'rounded-full group-data-[checked=true]/radioInd:text-primary-600 group-data-[checked=true]/radioInd:group-data-[hover=true]/radioInd:text-primary-700 data-[checked=true]:data-[hover=true]:data-[disabled=true]:text-primary-600',

  parentVariants: {
    size: {
      sm: 'h-3 w-3',
      md: 'h-4 w-4',
      lg: 'h-[18px] w-[18px]',
    },
  },
});

const indicatorStyle = tva({
  base: 'group/radioInd justify-center items-center bg-transparent border-outline-400 border-2 rounded-full data-[focus-visible=true]:web:outline-2 data-[focus-visible=true]:web:outline-primary-700 data-[focus-visible=true]:web:outline data-[checked=true]:border-primary-600 data-[checked=true]:bg-transparent data-[hover=true]:border-outline-500  data-[hover=true]:bg-transparent data-[hover=true]:data-[checked=true]:bg-transparent data-[hover=true]:data-[checked=true]:border-primary-700 data-[hover=true]:data-[invalid=true]:border-error-700 data-[hover=true]:data-[disabled=true]:opacity-40 data-[hover=true]:data-[disabled=true]:border-outline-400 data-[hover=true]:data-[disabled=true]:data-[invalid=true]:border-error-400 data-[active=true]:bg-transparent data-[active=true]:border-primary-800 data-[invalid=true]:border-error-700 data-[disabled=true]:opacity-40 data-[disabled=true]:data-[checked=true]:border-outline-400 data-[disabled=true]:data-[checked=true]:bg-transparent data-[disabled=true]:data-[invalid=true]:border-error-400',
  parentVariants: {
    size: {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
    },
  },
});

const labelStyle = tva({
  base: 'text-typography-600 data-[checked=true]:text-typography-900 data-[hover=true]:text-typography-900 data-[hover=true]:data-[disabled=true]:text-typography-600 data-[hover=true]:data-[disabled=true]:data-[checked=true]:text-typography-900 data-[active=true]:text-typography-900 data-[active=true]:data-[checked=true]:text-typography-900 data-[disabled=true]:opacity-40 web:select-none',
});

const SCOPE = 'Radio';
const UIRadio = createRadio({
  // @ts-ignore
  Root:
    Platform.OS === 'web'
      ? withStyleContext(View, SCOPE)
      : withStyleContextAndStates(Pressable, SCOPE),
  Group: View,
  Icon: Platform.OS === 'web' ? View : withStates(View),
  Indicator: Platform.OS === 'web' ? View : withStates(View),
  Label: Platform.OS === 'web' ? Text : withStates(Text),
});

cssInterop(UIRadio, { className: 'style' });
cssInterop(UIRadio.Group, { className: 'style' });
cssInterop(UIRadio.Icon, { className: 'style' });
cssInterop(UIRadio.Indicator, { className: 'style' });
cssInterop(UIRadio.Label, { className: 'style' });

const Radio = ({ className, size = 'md', ...props }: any) => {
  return (
    <UIRadio
      className={radioStyle({ size, class: className })}
      {...props}
      context={{ size }}
    />
  );
};

const RadioGroup = ({ className, ...props }: any) => {
  return (
    <UIRadio.Group className={groupStyle({ class: className })} {...props} />
  );
};

const RadioIndicator = ({ className, ...props }: any) => {
  const { size } = useStyleContext(SCOPE);
  return (
    <UIRadio.Indicator
      className={indicatorStyle({ parentVariants: { size }, class: className })}
      {...props}
    />
  );
};

const RadioLabel = ({ className, ...props }: any) => {
  const { size } = useStyleContext(SCOPE);
  return (
    <UIRadio.Label
      className={labelStyle({ parentVariants: { size }, class: className })}
      {...props}
    />
  );
};

const RadioIcon = ({ className, as: AsComp, size, ...props }: any) => {
  const { size: parentSize } = useStyleContext(SCOPE);
  if (AsComp) {
    return (
      <UIRadio.Icon>
        <AsComp
          {...props}
          className={iconStyle({
            parentVariants: {
              size: parentSize,
            },
            size,
            class: className,
          })}
        />
      </UIRadio.Icon>
    );
  }
  return (
    <UIRadio.Icon
      {...props}
      className={iconStyle({
        parentVariants: {
          size: parentSize,
        },
        size,
        class: className,
      })}
    />
  );
};

Radio.displayName = 'Radio';
RadioGroup.displayName = 'RadioGroup';
RadioIndicator.displayName = 'RadioIndicator';
RadioLabel.displayName = 'RadioLabel';
RadioIcon.displayName = 'RadioIcon';

export { Radio, RadioGroup, RadioIndicator, RadioLabel, RadioIcon };
