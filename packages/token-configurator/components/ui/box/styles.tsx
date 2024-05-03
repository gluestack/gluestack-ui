import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { Platform } from 'react-native';

const baseStyle = Platform.select({
  web: 'flex flex-col relative z-0 box-border border-0 list-none min-w-0 min-h-0 bg-transparent items-stretch m-0 p-0 text-decoration-none',
  default: '',
});
export const boxStyle = tva({
  base: baseStyle,
});
