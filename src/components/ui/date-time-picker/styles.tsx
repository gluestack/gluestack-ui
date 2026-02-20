import { tva } from '@gluestack-ui/utils/nativewind-utils';

export const dateTimePickerStyle = tva({
  base: '',
});

export const dateTimePickerTriggerStyle = tva({
  base: 'border border-border rounded flex-row items-center overflow-hidden data-[hover=true]:border-primary/80 data-[focus=true]:border-primary/80 data-[disabled=true]:opacity-40 data-[disabled=true]:data-[hover=true]:border-border/80',
  variants: {
    size: {
      xl: 'h-12',
      lg: 'h-11',
      md: 'h-10',
      sm: 'h-9',
    },
    variant: {
      underlined:
        'border-0 border-b rounded-none data-[hover=true]:border-primary/80 data-[focus=true]:border-primary/80 data-[focus=true]:web:shadow-[inset_0_-1px_0_0] data-[focus=true]:web:shadow-primary/80 data-[invalid=true]:border-destructive data-[invalid=true]:web:shadow-destructive',
      outline:
        'data-[focus=true]:border-primary/80 data-[focus=true]:web:shadow-[inset_0_0_0_1px] data-[focus=true]:data-[hover=true]:web:shadow-primary/80 data-[invalid=true]:web:shadow-[inset_0_0_0_1px] data-[invalid=true]:border-destructive data-[invalid=true]:web:shadow-destructive data-[invalid=true]:data-[hover=true]:border-destructive',
      rounded:
        'rounded-full data-[focus=true]:border-primary/80 data-[focus=true]:web:shadow-[inset_0_0_0_1px] data-[focus=true]:web:shadow-primary/80 data-[invalid=true]:border-destructive data-[invalid=true]:web:shadow-destructive',
    },
  },
});

export const dateTimePickerInputStyle = tva({
  base: 'px-3 placeholder:text-muted-foreground web:w-full h-full text-foreground/90 pointer-events-none web:outline-none ios:leading-[0px] py-0',
  parentVariants: {
    size: {
      xl: 'text-xl',
      lg: 'text-lg',
      md: 'text-base',
      sm: 'text-sm',
    },
    variant: {
      underlined: 'px-0',
      outline: '',
      rounded: 'px-4',
    },
  },
});

export const dateTimePickerIconStyle = tva({
  base: 'text-foreground/50 fill-none',
  parentVariants: {
    size: {
      '2xs': 'h-3 w-3',
      'xs': 'h-3.5 w-3.5',
      'sm': 'h-4 w-4',
      'md': 'h-[18px] w-[18px]',
      'lg': 'h-5 w-5',
      'xl': 'h-6 w-6',
    },
  },
});
