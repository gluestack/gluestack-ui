// import { StatusBar } from "expo-status-bar";
// @ts-nocheck
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useState } from "react";
import { styled } from "@gluestack/styled";
export const useHover = () => {
  const [isHovered, setHovered] = useState(false);
  return {
    hoverProps: {
      onHoverIn: () => setHovered(true),
      onHoverOut: () => setHovered(false),
    },
    isHovered,
  };
};

export const useFocus = () => {
  const [isFocused, setFocused] = useState(false);
  return {
    focusProps: {
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
    },
    isFocused,
  };
};

export const useIsPressed = () => {
  const [isPressed, setIsPressed] = useState(false);
  return {
    pressableProps: {
      onPressIn: () => setIsPressed(true),
      onPressOut: () => setIsPressed(false),
    },
    isPressed,
  };
};

function composeEventHandlers<E>(
  originalEventHandler?: null | ((event: E) => void),
  ourEventHandler?: (event: E) => void
) {
  return function handleEvent(event: E) {
    originalEventHandler?.(event);
    ourEventHandler?.(event);
  };
}
const Box = styled(
  Pressable,
  {
    baseStyle: {
      style: {
        bg: "$red.500",
        p: "$3",
      },
      state: {
        focus: {
          style: {
            bg: "yellow",
            color: "red",
          },
        },
        active: {
          style: {
            bg: "blue",
            p: "100px",
          },
        },
      },
      // state: {
      //   hover: {
      //     style: {
      //       bg: "red",
      //     },
      //   },
      //   focus: {
      //     style: {
      //       bg: "blue",
      //     },
      //   },
      //   active: {
      //     style: {
      //       bg: "purple",
      //     },
      //   },
      // },
      // colorMode: {
      //   dark: {
      //     style: {
      //       bg: "pink",
      //     },
      //   },
      // },
      // platform: {
      //   web: {
      //     style: {
      //       bg: "green",
      //     },
      //   },
      // },
    },
    // variants: {
    //   greenBox: {
    //     style: {
    //       bg: "$secondary.500",
    //     },
    //     state: {
    //       hover: {
    //         style: {
    //           bg: "$primary.600",
    //         },
    //       },
    //     },
    //   },
    //   blueBox: {
    //     style: {
    //       bg: "$primary.500",
    //     },
    //     state: {
    //       hover: {
    //         style: {
    //           bg: "$primary.600",
    //         },
    //       },
    //     },
    //   },
    // },
    // sizes: {
    //   small: {
    //     style: {
    //       bg: "$primary.500",
    //     },
    //   },
    //   large: {
    //     style: {
    //       bg: "$primary.500",
    //     },
    //     state: {
    //       hover: {
    //         style: {
    //           bg: "$primary.600",
    //         },
    //       },
    //     },
    //   },
    // },
  },
  {}
);

function Button() {
  const { pressableProps, isPressed } = useIsPressed();
  let { isFocused, focusProps } = useFocus();
  const { isHovered, hoverProps }: any = useHover();
  return (
    <Box
      // variant="greenBox"
      colorMode="dark"
      states={{
        hover: isHovered,
        focus: isFocused,
        active: isPressed,
      }}
      onPressIn={composeEventHandlers(pressableProps.onPressIn)}
      onPressOut={composeEventHandlers(pressableProps.onPressOut)}
      // @ts-ignore - web only
      onHoverIn={composeEventHandlers(hoverProps.onHoverIn)}
      // @ts-ignore - web only
      onHoverOut={composeEventHandlers(hoverProps.onHoverOut)}
      // @ts-ignore - web only
      onFocus={composeEventHandlers(composeEventHandlers(focusProps.onFocus))}
      // @ts-ignore - web only
      onBlur={composeEventHandlers(composeEventHandlers(focusProps.onBlur))}
      // sx={{
      //   state: {
      //     hover: {
      //       style: {
      //         bg: "$red.500",
      //       },
      //     },
      //   },
      // }}
    >
      <Text>Hello Box</Text>
    </Box>
  );
}

export default function App() {
  const [state, setState] = useState(false);

  return (
    <div>
      <button onClick={() => setState(!state)}>Show/hide</button>
      {state ? (
        <View style={styles.container}>
          {Array.from({ length: 1 }, () => {
            return <Button />;
          })}
        </View>
      ) : (
        Array.from({ length: 1000 }, () => {
          return (
            <View>
              <Text>Hello</Text>
            </View>
          );
        })
      )}
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
