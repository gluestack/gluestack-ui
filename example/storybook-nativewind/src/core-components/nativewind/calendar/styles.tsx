import { tva } from '@gluestack-ui/nativewind-utils/tva';

export const calendarStyle = tva({
  base: 'flex flex-col border border-outline-200 rounded-lg bg-background-0',
});

export const calendarNavStyle = tva({
  base: 'w-6 h-6 p-1 flex items-center justify-center rounded-full data-[hover=true]:bg-background-100 data-[active=true]:bg-background-200 data-[disabled=true]:opacity-40 data-[disabled=true]:cursor-not-allowed',
});

export const calendarTitleStyle = tva({
  base: 'font-semibold text-typography-800 uppercase',
});

export const calendarHeaderStyle = tva({
  base: 'flex flex-row w-full justify-between items-center px-4 py-2 border-b border-outline-200',
});

export const calendarWeekStyle = tva({
  base: 'flex-row flex-wrap',
});

export const calendarDaysStyle = tva({
  base: 'flex-row flex-wrap',
});

export const calendarDateStyle = tva({
  base: 'w-[15.15%] p-2 m-0.5 flex items-center justify-center rounded-lg',
  variants: {
    hasDay: {
      true: 'cursor-pointer data-[today=true]:bg-background-100 data-[selected=true]:data-[disabled=false]:bg-background-500 data-[active=true]:bg-background-500 data-[hover=true]:data-[disabled=false]:bg-background-50 data-[disabled=true]:cursor-not-allowed group',
      false: 'cursor-default',
    },
  },
});

export const calendarWeekCellStyle = tva({
  base: 'w-[14.28%] p-2 flex items-center justify-center text-typography-500 font-medium',
});

export const calendarContentStyle = tva({
  base: 'flex-col p-2',
});
