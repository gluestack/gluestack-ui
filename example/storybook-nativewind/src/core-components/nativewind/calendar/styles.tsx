import { tva } from '@gluestack-ui/nativewind-utils/tva';

export const calendarStyle = tva({
  base: 'flex flex-col bg-white rounded-lg shadow-lg max-w-sm',
});

export const calendarNavStyle = tva({
  base: 'w-8 h-8 flex items-center justify-center rounded-full hover:bg-typography-100 active:bg-typography-200',
});

export const calendarTitleStyle = tva({
  base: 'text-lg font-semibold text-typography-800',
});

export const calendarHeaderStyle = tva({
  base: 'flex flex-row w-full justify-between items-center p-4 border-b border-typography-200',
});

export const calendarGridWeekStyle = tva({
  base: 'flex-row flex-wrap',
});

export const calendarGridDaysStyle = tva({
  base: 'flex-row flex-wrap',
});

export const calendarDaysCellStyle = tva({
  base: 'w-[14.28%] p-2 aspect-square items-center justify-center hover:bg-typography-50 active:bg-typography-100',
  variants: {
    isToday: {
      true: 'bg-blue-50 font-bold text-blue-600',
    },
    isSelected: {
      true: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
    },
    isDisabled: {
      true: 'text-typography-300 hover:bg-transparent cursor-not-allowed',
    },
  },
});

export const calendarWeekCellStyle = tva({
  base: 'w-[14.28%] p-2 aspect-square text-center text-typography-500 font-medium',
});

export const calendarGridStyle = tva({
  base: 'flex-col p-4',
});
