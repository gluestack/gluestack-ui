import type { ViewProps } from 'react-native';
import type { SxProps } from '@gluestack/styled';
export interface IHStackProps extends ViewProps {
  reversed?: boolean;
  space?: number | string | undefined;
  sx?: SxProps;
  children?: any;
}
