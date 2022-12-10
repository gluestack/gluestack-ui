import { styled } from "@gluestack/styled";
import { Pressable } from "react-native";
export default styled(
  Pressable,
  {
    baseStyle: {
      style: {
        bg: "$red.500",
        px: "$4",
        py: "$3",
        // w: 400,}
      },
      state: {
        hover: {
          style: {
            bg: "$primary.400",
          },
        },
      },
      descendants: {
        _text: {
          style: {
            color: "$secondary.500",
          },
        },
      },
    },
    variants: {
      blueBox: {
        style: { bg: "$secondary.500" },
        state: {
          hover: { style: { bg: "$primary.600" } },
          focus: { style: { borderWidth: 1, borderColor: "$primary.300" } },
          active: { style: { bg: "$primary.800" } },
        },
        // p: "$10",
      },
      greenBox: {
        style: {
          bg: "$secondary.500",
        },
        // px: "$10",
      },
    },
    sizes: {
      small: {
        style: {
          w: 100,
          h: 100,
        },
      },
      medium: {
        style: {
          w: 200,
          h: 200,
        },
      },
      large: {
        style: {
          w: 300,
          h: 300,
        },
      },
    },
    defaultProps: {
      size: "small",
      variant: "blueBox",
    },

    // _text: {
    //   style: { color: "$primary.100" },
    //   state: {
    //     hover: { color: "$red.600" },
    //     focus: { color: "$primary.300" },
    //     active: { color: "$primary.900" },
    //   },
    // },
  },
  {
    descendentStyle: ["_text"],
    // states: ["hover", "focus", "pressed"],
    // aliases: {
    //   bg: "backgroundColor",
    // },
  }
);
