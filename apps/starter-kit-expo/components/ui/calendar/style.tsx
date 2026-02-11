import { tva } from '@gluestack-ui/utils';
import { isWeb } from '@gluestack-ui/utils';

export const calendarStyle = tva({
  base: 'flex flex-col border border-border rounded-lg bg-background max-w-56',
});

export const calendarNavStyle = tva({
  base: 'w-7 h-7 p-1 flex items-center justify-center rounded-md border border-border hover:bg-accent active:bg-accent/80 data-[disabled=true]:opacity-40 data-[disabled=true]:cursor-not-allowed ',
});

export const calendarTitleStyle = tva({
  base: 'font-medium text-foreground text-sm',
});

export const calendarHeaderStyle = tva({
  base: 'flex flex-row w-full justify-between items-center px-1 pb-2 mb-2',
});

export const calendarWeekStyle = tva({
  base: isWeb ? 'grid grid-cols-7' : 'flex flex-row w-full',
});

export const calendarDaysStyle = tva({
  base: isWeb ? 'grid grid-cols-7' : 'flex flex-row flex-wrap',
});

export const calendarDateStyle = tva({
  base: `flex items-center justify-center aspect-square ${
    isWeb ? 'col-span-1' : 'basis-[14.28%]'
  }`,
  variants: {
    hasDay: {
      true: `
        cursor-pointer rounded-md
        data-[today=true]:bg-accent data-[today=true]:text-foreground
        data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground
        data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-start=true]:rounded-l-md data-[range-start=true]:rounded-r-none
        data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-end=true]:rounded-r-md data-[range-end=true]:rounded-l-none
        data-[range-middle=true]:bg-muted data-[range-middle=true]:text-foreground data-[range-middle=true]:rounded-none
        data-[active=true]:bg-accent data-[active=true]:text-accent-foreground
        data-[disabled=true]:opacity-50 data-[disabled=true]:cursor-not-allowed
        data-[outside=true]:opacity-50
        hover:bg-accent hover:text-accent-foreground
      `,
      false: 'cursor-default',
    },
  },
});

export const calendarWeekCellStyle = tva({
  base: `flex items-center justify-center text-xs text-center text-muted-foreground font-normal aspect-square ${
    isWeb ? 'col-span-1' : 'basis-[14.28%]'
  }`,
});

export const calendarContentStyle = tva({
  base: `flex flex-col p-2`,
});
