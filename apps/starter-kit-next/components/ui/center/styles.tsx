import { tva } from '@gluestack-ui-nightly/utils/nativewind-utils';
import { isWeb } from '@gluestack-ui-nightly/utils/nativewind-utils';

const baseStyle = isWeb ? 'flex flex-col relative z-0' : '';

export const centerStyle = tva({
  base: `justify-center items-center ${baseStyle}`,
});
