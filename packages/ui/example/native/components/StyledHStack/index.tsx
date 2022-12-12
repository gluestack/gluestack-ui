import { styled } from "@gluestack/styled";
import { View } from "react-native";

export default styled(
  View,
  {
    baseStyle: {
      style: {
        flexDirection: "row",
      },

      descendants: {},
    },
    defaultProps: {
      //@ts-ignore
      space: "md",
    },
  },
  {}
);
