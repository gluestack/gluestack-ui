// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Pressable, Button } from 'react-native';
import { styled } from '@gluestack/ui-styled';
import React from 'react';
// import { createConfig } from '@gluestack/config';
import TestComp from './TestComp';

// export const useFocus = () => {
//   const [isFocused, setFocused] = useState(false);
//   return {
//     focusProps: {
//       onFocus: () => setFocused(true),
//       onBlur: () => setFocused(false),
//     },
//     isFocused,
//   };
// };

// export const useIsPressed = () => {
//   const [isPressed, setIsPressed] = useState(false);
//   return {
//     pressableProps: {
//       onPressIn: () => setIsPressed(true),
//       onPressOut: () => setIsPressed(false),
//     },
//     isPressed,
//   };
// };

function composeEventHandlers<E>(
  originalEventHandler?: null | ((event: E) => void),
  ourEventHandler?: (event: E) => void
) {
  return function handleEvent(event: E) {
    originalEventHandler?.(event);
    ourEventHandler?.(event);
  };
}
// const Box = styled(
//   Pressable,
//   {
//     baseStyle: {
//       style: {
//         bg: '$blue500',
//         p: '$6',
//         rounded: '$full',
//       },

//       colorMode: {
//         dark: {
//           style: {
//             bg: 'aqua',
//           },
//         },
//       },
//       queries: [
//         {
//           condition: '$md',
//           value: {
//             style: {
//               bg: 'blue',
//             },
//             state: {
//               hover: {
//                 style: {
//                   bg: '$green900',
//                 },
//                 colorMode: {
//                   dark: {
//                     style: {
//                       bg: 'purple',
//                     },
//                   },
//                   light: {
//                     style: {
//                       bg: 'aqua',
//                     },
//                   },
//                 },
//                 state: {
//                   focus: {
//                     style: {
//                       bg: '$yellow500',
//                     },
//                   },
//                 },
//               },
//             },
//           },
//         },
//       ],
//       // state: {
//       //   hover: {
//       //     style: {
//       //       bg: 'red',
//       //     },
//       //     // descendants: {
//       //     //   _text: {
//       //     //     style: {
//       //     //       color: 'white',
//       //     //     },
//       //     //   },
//       //     // },
//       //   },
//       //   focus: {
//       //     style: {
//       //       borderColor: 'blue',
//       //       borderWidth: 2,
//       //     },
//       //   },
//       //   active: {
//       //     style: {
//       //       bg: 'purple',
//       //     },
//       //   },
//       // },
//       descendants: {
//         _text: {
//           style: {
//             color: 'white',
//           },
//         },
//       },
//     },
//     variants: {
//       greenBox: {
//         style: {
//           bg: '$green500',
//         },
//         state: {
//           hover: {
//             style: {
//               bg: '$green600',
//             },
//           },
//           active: {
//             style: {
//               bg: '$green700',
//             },
//           },
//         },
//         // queries: [
//         //   {
//         //     condition: '$md',
//         //     value: {
//         //       style: {
//         //         bg: '$blue500',
//         //       },
//         //       state: {
//         //         hover: {
//         //           style: {
//         //             bg: '$green500',
//         //           },
//         //           state: {
//         //             focus: {
//         //               style: {
//         //                 bg: '$yellow500',
//         //               },
//         //             },
//         //           },
//         //         },
//         //       },
//         //       colorMode: {
//         //         dark: {
//         //           style: {
//         //             bg: '$red500',
//         //           },
//         //         },
//         //         light: {
//         //           style: {
//         //             bg: '$blue500',
//         //           },
//         //         },
//         //       },
//         //     },
//         //   },
//         // ],
//       },
//       blueBox: {
//         style: {
//           bg: '$yellow500',
//         },
//         // colorMode: {
//         //   dark: {
//         //     style: {
//         //       bg: '$yellow100',
//         //     },
//         //   },
//         // },
//         state: {
//           hover: {
//             style: {
//               bg: '$yellow600',
//             },
//           },
//           active: {
//             style: {
//               bg: '$yellow700',
//             },
//           },
//         },
//       },
//     },
//     sizes: {
//       small: {
//         style: {
//           p: '$10',
//         },
//       },
//       large: {
//         style: {
//           px: '$20',
//           py: '$10',
//         },
//       },
//     },
//   },
//   {
//     descendentStyle: ['_text'],
//   }
// );

// const StyledButton = styled(View, {});

export default function App() {
  // const [isPressed, setIsPressed] = React.useState(false);
  // const [isHovered, setisHovered] = React.useState(false);
  // return (
  //   <Box
  //   //
  //   ></Box>
  // );
  // return (
  //   <View style={styles.container}>
  //     <Box
  //       onPressIn={() => setIsPressed(true)}
  //       onPressOut={() => setIsPressed(false)}
  //       onHoverIn={() => setisHovered(true)}
  //       onHoverOut={() => setisHovered(false)}
  //       // variant="greenBox"
  //       // bg="$red500"
  //       // hover-bg="$green600"
  //       // hover-web-bg="$amber600"
  //       // active-p="$8"
  //       // // active-bg="$blue600"
  //       // active-backgroundColor="$pink600"
  //       // web-bg="$blue600"
  //       // web-hover-bg="$gray600"
  //       // web-hover-p="$8"
  //       // // md-w="$100"
  //       // sm-w="$50"
  //       // sm-bg="$red500"
  //       // sm-hover-p="$6"
  //       // // md-hover-bg="$green600"
  //       // // md-hover-ios-bg="$green600"
  //       // hover-xxl-bg="$red500"
  //       // active-xxl-bg="$red500"
  //       // xxl-light-bg="$green600"
  //       // hover-light-sm-bg="$green600"
  //       states={{
  //         hover: isHovered,
  //         active: isPressed,
  //       }}
  //       sx={{
  //         platform: {
  //           web: {
  //             state: {
  //               hover: {
  //                 style: {
  //                   bg: '$amber600',
  //                   // p: '$8',
  //                 },
  //               },
  //             },
  //           },
  //         },
  //         state: {
  //           hover: {
  //             style: {
  //               bg: '$red500',
  //             },
  //           },
  //         },
  //       }}
  //     >
  //       Hello Box
  //     </Box>
  //     <TestComp />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
