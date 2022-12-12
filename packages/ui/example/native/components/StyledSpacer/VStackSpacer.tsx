import { styled } from "@gluestack/styled";
import { View } from "react-native";

export default styled(
  View,
  {
    sizes: {
      sm: {
        style: {
          height: "$10",
        },
      },
      md: {
        style: {
          height: "$20",
        },
      },
      lg: {
        style: {
          height: "$30",
        },
      },
    },
  },
  {}
);
