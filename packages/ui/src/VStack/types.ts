import type { ViewProps } from "react-native";
import type { SxProps } from "@gluestack/styled";
export interface IVStackProps extends ViewProps {
  reversed?: boolean;
  space?: number | string | undefined;
  children?: any;
}
