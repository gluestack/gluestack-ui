import type { ViewProps } from 'react-native';
// import type { SxProps } from '@glue-style/react';
export interface IVStackProps extends ViewProps {
  reversed?: boolean;
  space?: string;
  ref?: any;
  children?: any;
}
