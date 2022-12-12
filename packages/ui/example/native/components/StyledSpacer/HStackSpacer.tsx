import { styled } from "@gluestack/styled";
import { View } from "react-native";

export default styled(
  View,
  {
    sizes: {
      sm: {
        style: {
          width: "$10",
        },
      },
      md: {
        style: {
          width: "$20",
        },
      },
      lg: {
        style: {
          width: "30",
        },
      },
    },
  },
  {}
);
