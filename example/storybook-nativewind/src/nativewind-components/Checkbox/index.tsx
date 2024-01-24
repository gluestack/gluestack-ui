import React from 'react';
import { createCheckbox } from '@gluestack-ui/checkbox';
import { View, Pressable, Text } from 'react-native';
import { cn, withStyleContext } from '@components/utils';
import { Platform } from 'react-native';
import { tva } from '@components/utils';
import { Check } from 'lucide-react-native';
import { useStyleContext } from '@components/utils/withContext';
import { withStates } from '@components/utils/withStates';

const UICheckbox = createCheckbox({
  Root: Platform.OS !== 'web' ? View : withStyleContext(withStates(Pressable)),
  Group: Platform.OS !== 'web' ? View : withStates(View),
  Icon: Platform.OS !== 'web' ? Check : withStates(Check),
  Label: Platform.OS !== 'web' ? Text : withStates(Text),
  Indicator: Platform.OS !== 'web' ? View : withStates(View),
});

const CheckboxGroup = UICheckbox.Group;

const checkboxIndicator = tva({
  base: 'shrink-0 items-center justify-center rounded-sm border border-primary dark:border-white data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-1 data-[focus-visible=true]:ring-ring data-[focus-visible=true]:ring-white  disabled:cursor-not-allowed disabled:opacity-50 overflow-hidden',
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
      <UICheckbox
        className={cn(
          'flex-row items-center justify-start gap-2 data-[checked=true]:bg-red-500 ',
          className
        )}
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
        'w-full h-full bg-primary dark:bg-white stroke-white dark:stroke-primary p-0.5 ',
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
