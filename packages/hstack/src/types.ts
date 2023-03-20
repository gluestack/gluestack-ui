import type { ViewProps } from 'react-native';
export interface IHStackProps extends ViewProps {
  reversed?: boolean;
  space?: number | string | undefined;
  ref?: any;
  children?: any;
}
