import { styled } from "@gluestack/styled";
import { H1 } from "@expo/html-elements";

export default styled(
  H1,
  {
    baseStyle: {
      style: {
        color: "$primary.500",
      },
    },
  },
  {}
);
