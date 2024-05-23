import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { isWeb } from '@gluestack-ui/nativewind-utils/IsWeb';

const gridBaseStyle = isWeb
  ? 'grid grid-cols-12'
  : 'w-full box-border flex-row flex-wrap justify-start';
const gridItemBaseStyle = isWeb ? 'w-auto col-span-1' : 'w-full';

export const gridStyle = tva({
  base: gridBaseStyle,
});

export const gridItemStyle = tva({
  base: gridItemBaseStyle,
});
