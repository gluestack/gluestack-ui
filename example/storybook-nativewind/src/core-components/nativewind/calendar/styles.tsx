import { tva } from '@gluestack-ui/nativewind-utils/tva';

export const calendarStyle = tva({
  base: 'flex flex-col border border-outline-200 rounded-lg',
});

export const calendarNavStyle = tva({
  base: 'w-6 h-6 flex items-center justify-center rounded-full hover:bg-typography-100 active:bg-typography-200',
});

export const calendarTitleStyle = tva({
  base: 'font-semibold text-typography-800 uppercase',
});

export const calendarHeaderStyle = tva({
  base: 'flex flex-row w-full justify-between items-center px-4 py-2 border-b border-typography-200',
});

export const calendarGridWeekStyle = tva({
  base: 'flex-row flex-wrap',
});

export const calendarGridDaysStyle = tva({
  base: 'flex-row flex-wrap',
});

export const calendarDaysCellStyle = tva({
  base: 'w-[14.28%] aspect-square cursor-pointer flex items-center justify-center data-[selected=true]:bg-primary-0 rounded-lg',
});

export const calendarWeekCellStyle = tva({
  base: 'w-[14.28%] p-2 aspect-square flex items-center justify-center text-typography-500 font-medium',
});

export const calendarGridStyle = tva({
  base: 'flex-col p-2',
});
