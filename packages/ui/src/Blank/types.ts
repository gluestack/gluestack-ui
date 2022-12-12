import type { ViewProps } from "react-native";
import type { SxProps } from "@gluestack/styled";
export interface IStackProps extends ViewProps {
  direction?: "row" | "column" | "column-reverse" | "row-reverse";
  reversed?: boolean;
  space?: number | string | undefined;
  divider?: JSX.Element | undefined;
  sx?: SxProps;
  resolveContextChildrenStyle?: Array<SxProps>;
  children?: any;
}
