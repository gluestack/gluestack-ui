import { tva } from '@gluestack-ui/nativewind-utils/tva';

export const segmentedControlStyle = tva({
  base: 'rounded-lg bg-background-100 overflow-hidden',
  variants: {
    size: {
      xs: '',
      sm: '',
      md: '',
      lg: '',
    },
    orientation: {
      horizontal: 'flex-row items-start',
      vertical: 'flex-col',
    },
    space: {
      xs: 'gap-1',
      sm: 'gap-1.5',
      md: 'gap-2',
      lg: 'gap-2.5',
    },
  },
});

export const segmentedControlItemStyle = tva({
  base: 'group/segmented-item active:bg-background-0 data-[focus=true]:border-2 data-[focus=true]:border-background-600 data-[focus=true]:bg-background-0 data-[disabled=true]:opacity-40 flex-row items-center gap-1.5 cursor-pointer ',
  variants: {
    isSelected: { true: 'bg-background-0' },
  },
  parentVariants: {
    size: {
      xs: 'px-3.5 h-8',
      sm: 'px-4 h-9',
      md: 'px-5 h-10',
      lg: 'px-6h-11',
    },
  },
});

export const segmentedControlItemTextStyle = tva({
  base: 'font-semibold text-typography-700 group-hover/segmented-item:text-typography-900 group-active/segmented-item:text-typography-900 group-[focus=true]/segmented-item:text-typography-900',
  parentVariants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
});

export const segmentedControlItemIconStyle = tva({
  base: 'stroke-typography-700 fill-none group-hover/segmented-item:stroke-typography-900 group-active/segmented-item:stroke-typography-900 group-[focus=true]/segmented-item:stroke-typography-900',
  parentVariants: {
    size: {
      xs: 'h-3 w-3',
      sm: 'h-3.5 w-3.5',
      md: 'h-4 w-4',
      lg: 'h-[18px] w-[18px]',
    },
  },
});

export const segmentedDividerStyle = tva({
  base: 'bg-typography-700 opacity-40',
  parentVariants: {
    orientation: {
      vertical: 'h-px w-full mx-auto',
      horizontal: 'w-px h-full my-auto',
    },
    size: {
      xs: 'h-4',
      sm: 'h-5',
      md: 'h-6',
      lg: 'h-7',
    },
  },
});
