import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { isWeb } from '@gluestack-ui/nativewind-utils/IsWeb';

const gridBaseStyle = isWeb ? 'grid grid-cols-12' : '';
const gridItemBaseStyle = isWeb ? 'col-span-1 w-auto' : '';

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
