import type { ViewProps } from 'react-native';
// import type { SxProps } from '@gluestack/ui-styled';
export interface IVStackProps extends ViewProps {
  reversed?: boolean;
  space?: number | string | undefined;
  ref?: any;
  children?: any;
}
