import React from 'react';
import { createCheckbox } from '@gluestack-ui/checkbox';
import { View, Pressable } from 'react-native';
import { cn, withStyleContext } from '@components/utils';
import { Platform } from 'react-native';
import { tva } from '@components/utils';
import { Check } from 'lucide-react-native';
import { useStyleContext } from '@components/utils/withContext';
const Root = Platform.OS === 'web' ? View : Pressable;

const UICheckbox = createCheckbox({
  // @ts-ignore
  Root,
  Group: View,
  Icon: Check,
  Label: View,
  Indicator: View,
});

const UICheckboxHOC = withStyleContext(UICheckbox);
const CheckboxGroup = UICheckbox.Group;

const checkboxIndicator = tva({
  base: 'shrink-0 items-center justify-center rounded-sm border border-primary dark:border-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ',
  parentVariants: {
    size: {
      lg: 'w-6 h-6',
      md: 'w-5 h-5',
      sm: 'w-4 h-4',
    },
  },
});

const checkboxLabel = tva({
  base: 'dark:text-white',
  parentVariants: {
    size: {
      lg: 'text-lg',
      md: 'text-md',
      sm: 'text-sm',
    },
  },
});

const Checkbox = React.forwardRef(
  ({ className, size = 'sm', ...props }: any, ref) => {
    return (
      <UICheckboxHOC
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
        ' w-full h-full overflow-hidden bg-primary dark:bg-white stroke-white dark:stroke-primary p-[2px] ',
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
