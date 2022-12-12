import { styled } from "@gluestack/styled";
import { TextInput } from "react-native";

export default styled(
  TextInput,
  {
    baseStyle: {
      style: {
        px: "$4",
        py: "$3",
        // borderRadius: 4,
      },
    },
    variants: {
      outlined: {
        style: {
          //   borderColor: "$red.500",
          //   borderWidth: 2,
        },
      },
      ghost: {
        style: {
          //   bg: "$red.500",
        },
      },
    },
    sizes: {
      "2xl": { style: { fontSize: 22 } },
      xl: { style: { fontSize: 20 } },
      lg: { style: { fontSize: 18 } },
      md: { style: { fontSize: 16 } },
      sm: { style: { fontSize: 14 } },
      xs: { style: { fontSize: 12 } },
    },
  },
  {}
);
