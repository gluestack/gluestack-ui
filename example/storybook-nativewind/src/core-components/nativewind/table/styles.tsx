import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { isWeb } from '@gluestack-ui/nativewind-utils/IsWeb';

const baseTableStyle = isWeb ? 'border-collapse' : '';

export const tableStyle = tva({
  base: `${baseTableStyle} w-[800px]`,
});

export const tableHeaderStyle = tva({
  base: '',
});

export const tableBodyStyle = tva({
  base: '',
});

export const tableFooterStyle = tva({
  base: '',
});

export const tableHeadStyle = tva({
  base: 'flex-1 px-6 py-5 text-left font-bold text-[16px] leading-6 text-typography-900',
});

export const tableRowStyleStyle = tva({
  base: 'border-t border-solid border-outline-300',
  variants: {
    isHeaderRow: {
      true: 'border-t-0 bg-background-50',
    },
    isFooterRow: {
      true: 'bg-background-50',
    },
  },
});

export const tableDataStyle = tva({
  base: 'flex-1 px-6 py-5 text-left text-[16px] font-medium leading-6 text-typography-900',
});
