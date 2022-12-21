// import { StatusBar } from "expo-status-bar";
// @ts-nocheck
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';
import { styled } from '@gluestack/ui-styled';

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

const MyText = styled(
  Text,
  {
    baseStyle: {
      style: {},
    },
    variants: {},
    sizes: {},
  },
  {
    ancestorStyle: ['_text'],
  }
);
const Box = styled(
  Pressable,
  {
    baseStyle: {
      style: {
        bg: 'red',
        p: '$3',
      },

      colorMode: {
        dark: {
          style: {
            bg: 'aqua',
          },
        },
      },
      queries: [
        {
          condition: '$md',
          value: {
            style: {
              bg: 'blue',
            },
            state: {
              hover: {
                style: {
                  bg: '$purple900',
                },
                // hover: {
                //   style: {
                //     bg: 'red',
                //   },
                // },

                // colorMode: {
                //   dark: {
                //     style: {
                //       bg: 'purple',
                //     },
                //   },
                //   light: {
                //     style: {
                //       bg: 'aqua',
                //     },
                //   },
                // },
                // state: {
                //   hover: {
                //     style: {
                //       bg: '$yellow500',
                //     },
                //   },
                // },
              },
            },
          },
        },
      ],
      state: {
        hover: {
          style: {
            bg: 'yellow',
          },

          // hover: {
          //   style: {
          //     bg: 'yellow',
          //   },
          //   hover: {
          //     style: {
          //       bg: 'yellow',
          //     },
          //     hover: {
          //       style: {
          //         bg: 'aqua',
          //       },
          //     },
          //   },
          // },
        },

        active: {
          style: {
            bg: 'red',
          },
        },
      },
      descendants: {
        _text: {
          style: {
            color: 'white',
          },
        },
      },
    },
    variants: {
      greenBox: {
        style: {
          bg: '$green500',
        },
        state: {
          hover: {
            style: {
              bg: '$green600',
            },
          },
          active: {
            style: {
              bg: '$green700',
            },
          },
        },
        // queries: [
        //   {
        //     condition: '$md',
        //     value: {
        //       style: {
        //         bg: '$blue500',
        //       },
        //       state: {
        //         hover: {
        //           style: {
        //             bg: '$green500',
        //           },
        //           state: {
        //             focus: {
        //               style: {
        //                 bg: '$yellow500',
        //               },
        //             },
        //           },
        //         },
        //       },
        //       colorMode: {
        //         dark: {
        //           style: {
        //             bg: '$red500',
        //           },
        //         },
        //         light: {
        //           style: {
        //             bg: '$blue500',
        //           },
        //         },
        //       },
        //     },
        //   },
        // ],
      },
      blueBox: {
        style: {
          bg: '$yellow500',
        },
        // colorMode: {
        //   dark: {
        //     style: {
        //       bg: '$yellow100',
        //     },
        //   },
        // },
        state: {
          hover: {
            style: {
              bg: '$yellow600',
            },
          },
          active: {
            style: {
              bg: '$yellow700',
            },
          },
        },
      },
    },
    sizes: {
      small: {
        style: {
          p: '$10',
        },
      },
      large: {
        style: {
          px: '$20',
          py: '$10',
        },
      },
    },
  },
  {
    descendentStyle: ['_text'],
  }
);

function Button() {
  const { pressableProps, isPressed } = useIsPressed();
  let { isFocused, focusProps } = useFocus();
  const { isHovered, hoverProps }: any = useHover();

  console.log(isHovered, 'hovereed here');
  return (
    <Box
      // variant="greenBox"
      // size="large"
      // colorMode="dark"
      states={{
        hover: isHovered,
        focus: isFocused,
        active: isPressed,
      }}
      sx={
        {
          // state: {
          //   hover: {
          //     style: {
          //       backgroundColor: 'pink',
          //     },
          //   },
          // },
        }
      }
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
      <MyText>Hello</MyText>
    </Box>
  );
}

export default function App() {
  const [state, setState] = useState(true);

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
