import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { isWeb } from '@gluestack-ui/nativewind-utils/IsWeb';

const captionTableStyle = isWeb ? 'caption-bottom' : '';

export const tableStyle = tva({
  base: `table border-collapse border-collapse w-[800px]`,
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
  base: 'border-0 border-b border-solid border-outline-200 bg-background-0 hover:bg-background-50',
  variants: {
    isHeaderRow: {
      true: 'bg-background-50',
    },
    isFooterRow: {
      true: 'border-b-0 bg-background-50',
    },
  },
});

export const tableDataStyle = tva({
  base: 'flex-1 px-6 py-5 text-left text-[16px] font-medium leading-6 text-typography-900',
});

export const tableCaptionStyle = tva({
  base: `${captionTableStyle} px-6 py-5 text-[16px] font-normal leading-6 text-typography-900 bg-background-50`,
});
