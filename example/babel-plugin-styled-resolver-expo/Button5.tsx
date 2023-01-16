import { Pressable } from 'react-native';
import { styled } from '@dank-style/react';
let Components = [] as any;
for (let i = 0; i < 1; i++) {
  const MyButton5 = styled(
    Pressable,
    {
      baseStyle: {
        style: {
          bg: '$green500',
          p: '$3',
          shadow: '$4',
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
                  colorMode: {
                    dark: {
                      style: {
                        bg: 'purple',
                      },
                    },
                    light: {
                      style: {
                        bg: 'aqua',
                      },
                    },
                  },
                  state: {
                    hover: {
                      style: {
                        bg: '$yellow500',
                      },
                      state: {
                        focus: {
                          style: {
                            bg: 'red',
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        ],

        // state: {
        //   hover: {
        //     style: {
        //       bg: '$green500',
        //     },
        //     // state: {
        //     //   focus: {
        //     //     style: {
        //     //       bg: 'purple',
        //     //     },
        //     //   },
        //     // },
        //   },
        // },

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
        // descendants: {
        //   _text: {
        //     style: {
        //       color: 'white',
        //     },
        //   },
        // },
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
      // sizes: {
      //   // small: {
      //   //   style: {
      //   //     p: '$10',
      //   //   },
      //   // },
      //   large: {
      //     style: {
      //       px: '$20',
      //       py: '$10',
      //     },
      //     state: {
      //       hover: {
      //         style: {
      //           bg: 'pink',
      //         },
      //       },
      //     },
      //   },
      // },
    },
    {}
  );
  Components.push(MyButton5);
}
export default Components;
