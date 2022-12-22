// import { StatusBar } from "expo-status-bar";
// @ts-nocheck
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';
import { styled } from '@gluestack/ui-styled';
import { config } from './nb.config';
import { createConfig } from '@gluestack/ui-styled';
createConfig(config);
// onReady((config) => {
//   console.log(config);
// });

// import MyButton from './styled-components/StyledButton/index';
// import MyButtonText from './styled-components/StyledButton/StyledButtonText';

import {
  set as setColorMode,
  get as getColorMode,
  onChange,
} from '@gluestack/color-mode';

window['setColorMode'] = setColorMode;
window['getColorMode'] = getColorMode;

onChange((colorMode) => {
  //console.log('color mode', colorMode);
  if (colorMode === 'dark') {
    document.body.classList.remove('gs-light');
    document.body.classList.add('gs-dark');
  } else if (colorMode === 'light') {
    document.body.classList.remove('gs-dark');
    document.body.classList.add('gs-light');
  } else {
    document.body.classList.remove('gs-light');
    document.body.classList.remove('gs-dark');
  }
});

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

const MyButton = styled(
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
                  bg: 'aqua',
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
            bg: '$green500',
          },
          // state: {
          //   focus: {
          //     style: {
          //       bg: 'purple',
          //     },
          //   },
          // },
        },
      },

      // state: {
      //   hover: {
      //     style: {
      //       bg: 'yellow',
      //     },

      //     // hover: {
      //     //   style: {
      //     //     bg: 'yellow',
      //     //   },
      //     //   hover: {
      //     //     style: {
      //     //       bg: 'yellow',
      //     //     },
      //     //     hover: {
      //     //       style: {
      //     //         bg: 'aqua',
      //     //       },
      //     //     },
      //     //   },
      //     // },
      //     descendants: {
      //       _text: {
      //         style: {
      //           color: 'purple',
      //         },
      //       },
      //     },
      //   },

      //   active: {
      //     style: {
      //       bg: '',
      //     },
      //   },
      // },
      descendants: {
        _text: {
          style: {
            color: 'white',
          },
        },
      },
    },
    // variants: {
    //   greenBox: {
    //     style: {
    //       bg: '$green500',
    //     },
    //     state: {
    //       hover: {
    //         style: {
    //           bg: '$green600',
    //         },
    //       },
    //       active: {
    //         style: {
    //           bg: '$green700',
    //         },
    //       },
    //     },
    //     queries: [
    //       {
    //         condition: '$md',
    //         value: {
    //           style: {
    //             bg: '$blue500',
    //           },
    //           state: {
    //             hover: {
    //               style: {
    //                 bg: '$green500',
    //               },
    //               state: {
    //                 focus: {
    //                   style: {
    //                     bg: 'purple',
    //                   },
    //                 },
    //               },
    //             },
    //           },
    //           colorMode: {
    //             dark: {
    //               style: {
    //                 bg: '$red500',
    //               },
    //             },
    //             light: {
    //               style: {
    //                 bg: '$blue500',
    //               },
    //             },
    //           },
    //         },
    //       },
    //     ],
    //   },
    //   // blueBox: {
    //   //   style: {
    //   //     bg: '$yellow500',
    //   //   },
    //   //   // colorMode: {
    //   //   //   dark: {
    //   //   //     style: {
    //   //   //       bg: '$yellow100',
    //   //   //     },
    //   //   //   },
    //   //   // },
    //   //   // state: {
    //   //   //   hover: {
    //   //   //     style: {
    //   //   //       bg: '$yellow600',
    //   //   //     },
    //   //   //   },
    //   //   //   active: {
    //   //   //     style: {
    //   //   //       bg: '$yellow700',
    //   //   //     },
    //   //   //   },
    //   //   // },
    //   // },
    // },
    sizes: {
      // small: {
      //   style: {
      //     p: '$10',
      //   },
      // },
      large: {
        style: {
          px: '$20',
          py: '$10',
        },
        state: {
          hover: {
            style: {
              bg: 'pink',
            },
          },
        },
      },
    },
  },
  {
    descendentStyle: ['_text'],
  }
);

const MyButtonText = styled(Text, {}, { ancestorStyle: ['_text'] });
function Button() {
  const { pressableProps, isPressed } = useIsPressed();
  let { isFocused, focusProps } = useFocus();
  const { isHovered, hoverProps }: any = useHover();

  console.log('******', MyButton);
  return (
    <MyButton
      size="large"
      // colorMode="dark"
      states={{
        hover: isHovered,
        focus: isFocused,
        active: isPressed,
      }}
      sx={{
        // style: {
        //   backgroundColor: 'pink',
        // },
        // state: {
        //   hover: {
        //     style: {
        //       backgroundColor: 'orange',
        //     },
        //   },
        // },
        descendants: {
          _text: {
            style: {
              color: 'red',
            },
            state: {
              hover: {
                style: {
                  backgroundColor: 'orange',
                },
              },
            },
          },
        },
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
      <MyButtonText>Hello World</MyButtonText>
    </MyButton>
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
