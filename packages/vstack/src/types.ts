import type { ViewProps } from 'react-native';
// import type { SxProps } from '@dank-style/react';
export interface IVStackProps extends ViewProps {
  reversed?: boolean;
  space?: number | string | undefined;
  ref?: any;
  children?: any;
}
