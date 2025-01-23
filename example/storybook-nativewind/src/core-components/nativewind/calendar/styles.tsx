import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { isWeb } from '@gluestack-ui/nativewind-utils/IsWeb';

export const calendarStyle = tva({
  base: 'flex flex-col border border-outline-200 rounded-lg bg-background-0',
});

export const calendarNavStyle = tva({
  base: 'w-6 h-6 p-1 flex items-center justify-center rounded-lg border border-outline-200 data-[hover=true]:bg-background-100 data-[active=true]:bg-background-200 data-[disabled=true]:opacity-40 data-[disabled=true]:cursor-not-allowed',
});

export const calendarTitleStyle = tva({
  base: 'font-semibold text-typography-800 uppercase',
});

export const calendarHeaderStyle = tva({
  base: 'flex flex-row w-full justify-between items-center px-4 py-2 border-b border-outline-200',
});

export const calendarWeekStyle = tva({
  base: isWeb ? 'grid grid-cols-7' : 'flex flex-row w-full',
});

export const calendarDaysStyle = tva({
  base: isWeb ? 'grid grid-cols-7' : 'flex flex-row flex-wrap',
});

export const calendarDateStyle = tva({
  base: `m-0.5 flex items-center justify-center rounded-lg aspect-square ${
    isWeb ? 'col-span-1' : 'basis-[12.6%]'
  }`,
  variants: {
    hasDay: {
      true: 'cursor-pointer data-[today=true]:bg-background-100 data-[selected=true]:data-[disabled=false]:bg-background-800 data-[active=true]:bg-background-500 data-[hover=true]:data-[disabled=false]:bg-background-50 data-[disabled=true]:cursor-not-allowed group',
      false: 'cursor-default',
    },
  },
});

export const calendarWeekCellStyle = tva({
  base: `m-0.5 flex items-center justify-center text-xs text-center text-typography-500 font-medium aspect-square ${
    isWeb ? 'col-span-1' : 'basis-[12.6%]'
  }`,
});

export const calendarContentStyle = tva({
  base: `flex flex-col p-2`,
});
