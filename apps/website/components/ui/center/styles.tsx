import { tva } from '@gluestack-ui/core/nativewind-utils';
import { isWeb } from '@gluestack-ui/core/nativewind-utils';

const baseStyle = isWeb ? 'flex flex-col relative z-0' : '';

export const centerStyle = tva({
  base: `justify-center items-center ${baseStyle}`,
});
