import type { ViewProps } from 'react-native';
export interface IStackProps extends ViewProps {
  direction?: 'row' | 'column';
  reversed?: boolean;
  space?: number | string | undefined;
  ref?: any;
  children?: any;
}
