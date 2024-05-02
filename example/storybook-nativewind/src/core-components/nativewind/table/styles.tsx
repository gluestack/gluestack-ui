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
  base: 'flex-1 px-6 py-[14px] text-left font-bold text-[16px] leading-[22px] text-typography-800 font-roboto',
});

export const tableRowStyleStyle = tva({
  base: 'border-0 border-b border-solid border-outline-200 bg-background-0',
  variants: {
    isHeaderRow: {
      true: '',
    },
    isFooterRow: {
      true: 'border-b-0 ',
    },
  },
});

export const tableDataStyle = tva({
  base: 'flex-1 px-6 py-[14px] text-left text-[16px] font-medium leading-[22px] text-typography-800 font-roboto',
});

export const tableCaptionStyle = tva({
  base: `${captionTableStyle} px-6 py-[14px] text-[16px] font-normal leading-[22px] text-typography-800 bg-background-50 font-roboto`,
});
