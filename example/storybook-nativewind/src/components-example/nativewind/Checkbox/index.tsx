import React from 'react';
import { createCheckbox } from '@gluestack-ui/checkbox';
import { View, Pressable, Text } from 'react-native';
import {
  cn,
  withStates,
  withStyleContextAndStates,
  useStyleContext,
  tva,
  withStyleContext,
} from '@gluestack-ui/nativewind-utils';
import { Platform } from 'react-native';

import { Check } from 'lucide-react-native';
import { cssInterop } from 'nativewind';

const UICheckbox = createCheckbox({
  // @ts-ignore
  Root:
    Platform.OS === 'web'
      ? withStyleContext(View)
      : withStyleContextAndStates(Pressable),
  Group: Platform.OS === 'web' ? View : withStates(View),
  Icon: Platform.OS === 'web' ? Check : withStates(Check),
  Label: Platform.OS === 'web' ? Text : withStates(Text),
  Indicator: Platform.OS === 'web' ? View : withStates(View),
});

cssInterop(UICheckbox, { className: 'style' });
cssInterop(UICheckbox.Group, { className: 'style' });
cssInterop(UICheckbox.Icon, { className: 'style' });
cssInterop(UICheckbox.Label, { className: 'style' });
cssInterop(UICheckbox.Indicator, { className: 'style' });

const checkboxIndicator = tva({
  base: 'justify-center items-center border-outline-400 rounded-sm data-[focus=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-primary-700 data-[focus-visible=true]:ring-offset-1 overflow-hidden data-[checked=true]:border-primary-600',
  parentVariants: {
    size: {
      lg: 'w-6 h-6 border-4',
      md: 'w-5 h-5 border-2',
      sm: 'w-4 h-4 border-2',
    },
  },
});

const checkboxLabel = tva({
  base: 'text-typography-600',
  parentVariants: {
    size: {
      lg: 'text-lg',
      md: 'text-md',
      sm: 'text-sm',
    },
  },
});

const CheckboxGroup = UICheckbox.Group;

const Checkbox = React.forwardRef(
  ({ className, size = 'sm', ...props }: any, ref) => {
    return (
      <UICheckbox
        className={cn('flex-row items-center justify-start gap-2', className)}
        {...props}
        context={{
          size,
        }}
        ref={ref}
      />
    );
  }
);

const CheckboxIndicator = React.forwardRef(
  ({ className, ...props }: any, ref) => {
    const { size: parentSize } = useStyleContext();

    return (
      <UICheckbox.Indicator
        className={checkboxIndicator({
          parentVariants: {
            size: parentSize,
          },
          class: className,
        })}
        {...props}
        ref={ref}
      />
    );
  }
);

const CheckboxLabel = React.forwardRef(({ className, ...props }: any, ref) => {
  const { size: parentSize } = useStyleContext();
  return (
    <UICheckbox.Label
      className={checkboxLabel({
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

const CheckboxIcon = React.forwardRef(({ className, ...props }: any, ref) => {
  return (
    <UICheckbox.Icon
      className={cn(
        'w-full h-full bg-primary-600 stroke-typography-0 color-typography-0',
        className
      )}
      {...props}
      ref={ref}
    />
  );
});

// Assign display names
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
