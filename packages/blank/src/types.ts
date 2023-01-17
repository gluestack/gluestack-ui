import type { ViewProps } from 'react-native';
// @ts-ignore
import type { SxProps } from '@dank-style/react';
export interface IStackProps extends ViewProps {
  direction?: 'row' | 'column' | 'column-reverse' | 'row-reverse';
  reversed?: boolean;
  space?: number | string | undefined;
  divider?: JSX.Element | undefined;
  sx?: SxProps;
  children?: any;
}
