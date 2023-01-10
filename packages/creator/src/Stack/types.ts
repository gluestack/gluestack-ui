import type { ViewProps } from 'react-native';
// import type { SxProps } from 'dank-style';
export interface IStackProps extends ViewProps {
  direction?: 'row' | 'column';
  reversed?: boolean;
  space?: number | string | undefined;
  ref?: any;
  children?: any;
}
