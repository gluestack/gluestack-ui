import React from "react";
import type { IStackProps } from "./types";
import { HStack } from "../HStack";
import { VStack } from "../VStack";
export function Stack({ direction, ...props }: IStackProps) {
  return direction === "row" ? <HStack {...props} /> : <VStack {...props} />;
}
