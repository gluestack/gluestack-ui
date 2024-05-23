import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { isWeb } from '@gluestack-ui/nativewind-utils/IsWeb';

const gridItemBaseStyle = isWeb ? 'w-auto' : '';

export const gridStyle = tva({
  base: `w-full box-border flex-row flex-wrap justify-start grid col-span-4`,
});

export const gridItemStyle = tva({
  base: `w-full col-span-1 ${gridItemBaseStyle}`,
});
