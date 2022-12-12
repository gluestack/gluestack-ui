import type { ViewProps } from "react-native";
import type { SxProps } from "@gluestack/styled";
export interface IStackProps extends ViewProps {
  direction?: "row" | "column";
  reversed?: boolean;
  space?: number | string | undefined;
  children?: any;
}
