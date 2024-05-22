import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { Platform } from 'react-native';
const baseStyle = Platform.select({
  web: 'flex flex-col relative z-0',
  default: '',
});
export const centerStyle = tva({
  base: `justify-center items-center ${baseStyle}`,
});
