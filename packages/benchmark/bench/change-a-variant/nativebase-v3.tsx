import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
// import { css } from '../utils/stitches-core-v025.config';
// import { buttonStyles } from '../utils/buttonStyles';
// import { Text, Pressable } from 'react-native';
// import { Text } from '@gluestack/ui';
// import { styled } from '@gluestack/ui-styled';
// import { config } from '../../nb.config';
// import { useEffect } from 'react';
import { Button, NativeBaseProvider } from 'native-base';

// const StyledButton = styled(
//   Pressable,
//   {
//     baseStyle: {
//       style: {
//         bg: '$red100',
//       },
//     },
//     variants: {
//       solid: {
//         style: {
//           bg: '$primary600',
//         },
//         descendants: {
//           _text: {
//             style: {
//               color: '$text50',
//             },
//           },
//           _spinner: {
//             style: {
//               color: '$text50',
//             },
//           },
//         },
//         state: {
//           hover: {
//             style: {
//               bg: '$primary700',
//             },
//           },
//           active: {
//             style: {
//               bg: '$primary800',
//             },
//           },
//         },
//       },
//       subtle: {
//         style: {
//           bg: '$primary100',
//         },
//         colorMode: {
//           dark: {
//             style: {
//               bg: '$primary300',
//             },
//           },
//         },
//         descendants: {
//           _text: {
//             style: {
//               color: '$primary900',
//             },
//           },
//           _spinner: {
//             style: {
//               color: '$primary900',
//             },
//           },
//         },
//         state: {
//           hover: {
//             style: {
//               bg: '$primary200',
//             },
//             colorMode: {
//               dark: {
//                 style: {
//                   bg: '$primary200',
//                 },
//               },
//             },
//           },
//           active: {
//             style: {
//               bg: '$primary300',
//             },
//             colorMode: {
//               dark: {
//                 style: {
//                   bg: '$primary100',
//                 },
//               },
//             },
//           },
//         },
//       },
//       // outline: {
//       //   style: {
//       //     //@ts-ignore
//       //     bg: 'transparent',
//       //     borderWidth: 1,
//       //     borderColor: '$muted300',
//       //   },
//       //   descendants: {
//       //     _text: {
//       //       style: {
//       //         color: '$primary600',
//       //       },
//       //     },
//       //     _spinner: {
//       //       style: {
//       //         color: '$primary600',
//       //       },
//       //     },
//       //   },
//       //   colorMode: {
//       //     dark: {
//       //       descendants: {
//       //         _text: {
//       //           style: {
//       //             color: '$primary500',
//       //           },
//       //         },
//       //         _spinner: {
//       //           style: {
//       //             color: '$primary500',
//       //           },
//       //         },
//       //       },
//       //     },
//       //   },
//       //   state: {
//       //     hover: {
//       //       style: {
//       //         bg: '$primary100', //replace it with alpha token
//       //       },
//       //     },
//       //     active: {
//       //       style: {
//       //         bg: '$primary200', //replace it with alpha token
//       //       },
//       //     },
//       //   },
//       // },
//       // ghost: {
//       //   descendants: {
//       //     _text: {
//       //       style: {
//       //         color: '$primary600',
//       //       },
//       //     },
//       //     _spinner: {
//       //       style: {
//       //         color: '$primary600',
//       //       },
//       //     },
//       //   },
//       //   colorMode: {
//       //     dark: {
//       //       descendants: {
//       //         _text: {
//       //           style: {
//       //             color: '$primary500',
//       //           },
//       //         },
//       //         _spinner: {
//       //           style: {
//       //             color: '$primary500',
//       //           },
//       //         },
//       //       },
//       //     },
//       //   },
//       //   state: {
//       //     hover: {
//       //       style: {
//       //         bg: '$primary200', //replace it with alpha token "$primary600:alpha10 when supported"
//       //       },
//       //       colorMode: {
//       //         dark: {
//       //           style: {
//       //             bg: '$primary100', //replace it with alpha token "$primary600:alpha10 when supported"
//       //           },
//       //         },
//       //       },
//       //     },
//       //     active: {
//       //       style: {
//       //         bg: '$primary300', //replace it with alpha token "$primary600:alpha20 when supported"
//       //       },
//       //       colorMode: {
//       //         dark: {
//       //           style: {
//       //             bg: '$primary200', //replace it with alpha token "$primary600:alpha10 when supported"
//       //           },
//       //         },
//       //       },
//       //     },
//       //   },
//       // },
//       // link: {
//       //   descendants: {
//       //     _text: {
//       //       style: {
//       //         color: '$primary600',
//       //       },
//       //     },
//       //     _spinner: {
//       //       style: {
//       //         color: '$primary600',
//       //       },
//       //     },
//       //   },
//       //   state: {
//       //     hover: {
//       //       style: {
//       //         bg: 'transparent',
//       //       },
//       //       descendants: {
//       //         _text: {
//       //           style: {
//       //             textDecorationLine: 'underline',
//       //           },
//       //         },
//       //       },
//       //     },
//       //     active: {
//       //       descendants: {
//       //         _text: {
//       //           style: {
//       //             color: '$primary800',
//       //             textDecorationLine: 'underline',
//       //           },
//       //         },
//       //       },
//       //     },
//       //   },

//       //   colorMode: {
//       //     dark: {
//       //       descendants: {
//       //         _text: {
//       //           style: {
//       //             color: '$primary500',
//       //           },
//       //         },
//       //       },
//       //       state: {
//       //         active: {
//       //           descendants: {
//       //             _text: {
//       //               style: {
//       //                 color: '$primary300',
//       //               },
//       //             },
//       //           },
//       //         },
//       //       },
//       //     },
//       //   },
//       // },
//       // unstyled: {
//       //   style: {
//       //     borderRadius: undefined,
//       //     flexDirection: undefined,
//       //     justifyContent: undefined,
//       //     alignItems: undefined,
//       //   },
//       //   state: {
//       //     hover: {
//       //       style: {
//       //         bg: 'transparent',
//       //       },
//       //     },
//       //   },
//       // },
//     },
//   },
//   {},
//   config
// );
// const StyledText = styled(
//   Text,
//   {
//     baseStyle: {
//       style: {
//         color: '$red500',
//       },
//     },
//   },
//   {},
//   config
// );

const Test = ({ testIndex }: TestComponentProps) => {
  // This purposefully creates the styled component inside the Test component
  // so that we can measure the time it takes using the React profiler
  // const button = css({
  //   '--test-index': testIndex,
  //   ...(buttonStyles as any),
  // });

  const variants = {
    variant: testIndex % 2 === 0 ? 'solid' : 'subtle',
  };
  return (
    // <StyledButton {...variants}>
    //   <StyledText>Hello styled button</StyledText>
    // </StyledButton>
    <NativeBaseProvider>
      <Button {...variants}>Hello</Button>
    </NativeBaseProvider>
  );
};

const StitchesTest = () => {
  return (
    <>
      {/* <StyledButton variant="solid" style={{ opacity: 0, pointerEvents: 'none' }}>
        <StyledText>Hello styled button</StyledText>
      </StyledButton> */}
      <NativeBaseProvider>
        <Button style={{ opacity: 0, pointerEvents: 'none' }}>Hello</Button>
      </NativeBaseProvider>
      <TestRunner numberOfRuns={3} iterationN={100} TestComponent={Test} />
    </>
  );
};

export default StitchesTest;
