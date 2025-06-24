import { tva } from '@/utils/gluestack-utils/nativewind-utils';
import { isWeb } from '@/utils/gluestack-utils/nativewind-utils/IsWeb';

const baseStyle = isWeb ? 'flex flex-col relative z-0' : '';

export const centerStyle = tva({
  base: `justify-center items-center ${baseStyle}`,
});
