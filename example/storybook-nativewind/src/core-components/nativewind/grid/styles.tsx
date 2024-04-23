import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { Platform } from 'react-native';

const gridBaseStyle = Platform.select({
  web: 'grid grid-cols-12',
  default: '',
});

const gridItemBaseStyle = Platform.select({
  web: 'col-span-1 w-auto',
  default: '',
});

export const gridStyle = tva({
  base: `flex-row w-full flex-wrap justify-start box-border ${gridBaseStyle}`,
  variants: {
    numColumns: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      7: 'grid-cols-7',
      8: 'grid-cols-8',
      9: 'grid-cols-9',
      10: 'grid-cols-10',
      11: 'grid-cols-11',
      12: 'grid-cols-12',
    },
    spacing: {
      0: '',
      1: 'gap-1',
      2: 'gap-2',
      3: 'gap-3',
      4: 'gap-4',
      5: 'gap-5',
      6: 'gap-6',
      7: 'gap-7',
      8: 'gap-8',
      9: 'gap-9',
      10: 'gap-10',
      11: 'gap-11',
      12: 'gap-12',
    },
    rowSpacing: {
      0: '',
      1: 'gap-y-1',
      2: 'gap-y-2',
      3: 'gap-y-3',
      4: 'gap-y-4',
      5: 'gap-y-5',
      6: 'gap-y-6',
      7: 'gap-y-7',
      8: 'gap-y-8',
      9: 'gap-y-9',
      10: 'gap-y-10',
      11: 'gap-y-11',
      12: 'gap-y-12',
    },
    columnSpacing: {
      0: '',
      1: 'gap-x-1',
      2: 'gap-x-2',
      3: 'gap-x-3',
      4: 'gap-x-4',
      5: 'gap-x-5',
      6: 'gap-x-6',
      7: 'gap-x-7',
      8: 'gap-x-8',
      9: 'gap-x-9',
      10: 'gap-x-10',
      11: 'gap-x-11',
      12: 'gap-x-12',
    },
  },
});

export const gridItemStyle = tva({
  base: `w-full ${gridItemBaseStyle}`,
  variants: {
    colSpan: {
      1: 'col-span-1',
      2: 'col-span-2',
      3: 'col-span-3',
      4: 'col-span-4',
      5: 'col-span-5',
      6: 'col-span-6',
      7: 'col-span-7',
      8: 'col-span-8',
      9: 'col-span-9',
      10: 'col-span-10',
      11: 'col-span-11',
      12: 'col-span-12',
    },
  },
});
