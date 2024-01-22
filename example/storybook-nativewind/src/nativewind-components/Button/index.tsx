import * as React from 'react';
import { createButton } from '@gluestack-ui/button';
import { tva, withStyleContext } from '@components/utils';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { useStyleContext } from '@components/utils/withContext';

const UIButton = createButton({
  Root: Pressable,
  Text,
  Group: View,
  Spinner: ActivityIndicator,
  Icon: View,
});

const buttonStyle = tva({
  base: 'group/button items-center justify-center rounded-md web:focus-visible:outline-none web:focus-visible:ring-1 web:focus-visible:ring-slate-950 web:disabled:pointer-events-none web:disabled:opacity-50 web:dark:focus-visible:ring-slate-300',
  variants: {
    variant: {
      default:
        'bg-slate-900 web:shadow hover:bg-slate-900/90 dark:bg-slate-50 dark:hover:bg-slate-50/90',
      destructive:
        'group/destructive bg-red-500 web:shadow-sm hover:bg-red-500/90 dark:bg-red-900  dark:hover:bg-red-900/90',
      outline:
        'border-2 border-slate-500 bg-transparent dark:bg-transparent web:shadow-sm       hover:bg-slate-100 dark:border-slate-500 dark:hover:bg-transparent dark:hover:border-slate-600 dark:active:border-slate-700',
      secondary:
        'bg-slate-100 web:shadow-sm hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80',
    },
    size: {
      default: 'h-9 px-4 py-2',
      sm: 'h-8 rounded-md px-3 text-xs',
      lg: 'h-10 rounded-md px-8',
      icon: 'h-9 w-9',
    },
  },
});

const buttonTextStyle = tva({
  base: 'text-sm font-medium web:transition-colors',
  parentVariants: {
    variant: {
      default: 'text-white dark:text-slate-900',
      destructive: 'text-slate-50 dark:text-slate-50',
      outline: 'text-slate-900 dark:text-white',
    },
    size: {
      default: '',
      sm: 'text-xs',
    },
  },
});

const UIButtonHOC = withStyleContext(UIButton);

const Button = React.forwardRef(
  (
    { className, variant = 'default', size = 'default', ...props }: any,
    ref
  ) => {
    return (
      <UIButtonHOC
        ref={ref}
        {...props}
        className={buttonStyle({ variant, size, class: className })}
        context={{ variant, size }}
      />
    );
  }
);

const ButtonText = React.forwardRef(
  ({ className, variant, size, ...props }: any, ref) => {
    const { variant: parentVariant, size: parentSize } = useStyleContext();

    return (
      <UIButton.Text
        ref={ref}
        {...props}
        className={buttonTextStyle({
          parentVariants: { variant: parentVariant, size: parentSize },
          variant,
          size,
          class: className,
        })}
      />
    );
  }
);

const ButtonSpinner = UIButton.Spinner;
const ButtonIcon = UIButton.Icon;

Button.displayName = 'Button';
ButtonText.displayName = 'ButtonText';

export { Button, ButtonText, ButtonSpinner, ButtonIcon };
