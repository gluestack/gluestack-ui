import React from 'react';
import { View, Text } from 'react-native';
import { styled } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';

const StyledButton = styled(
  View,
  {
    baseStyle: {
      style: {
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        m: 12,
        backgroundColor: '$red400',
        padding: '$3',
      },
      state: {
        hover: {
          style: {
            bg: '$yellow500',
          },
        },
      },
      queries: [
        {
          condition: '$sm',
          value: {
            style: {
              bg: '$blue400',
            },
            state: {
              hover: {
                style: {
                  bg: '$purple500',
                },
              },
            },
          },
        },
      ],
      // platform: {
      //   web: {
      //     style: {
      //       //@ts-ignore
      //       outlineWidth: 0,
      //     },
      //   },
      // },
    },
    variants: {
      variant: {
        redbox: {
          style: {
            borderRadius: 12,
          },
          //   style: {
          //     bg: '$pink400',
          //   },
        },
      },
    },
    // variants: {
    //   variant: {
    //     redbox: {
    //       style: {
    //         bg: '$red400',
    //         px: '$4',
    //         py: '$3',
    //       },
    //       state: {
    //         hover: {
    //           style: {
    //             bg: '$blue400',
    //           },
    //         },
    //       },
    //     },
    //   },
    //   outline: {
    //     true: {
    //       style: {
    //         bg: '$red400',
    //         px: '$4',
    //         py: '$3',
    //       },
    //     },
    //   },
    //   // size: {
    //   //   sm: {
    //   //     style: {
    //   //       bg: '$blue400',
    //   //       px: '$4',
    //   //       py: '$3',
    //   //     },
    //   //     state: {
    //   //       hover: {
    //   //         style: {
    //   //           bg: '$blue400',
    //   //         },
    //   //       },
    //   //     },
    //   //   },
    //   // },
    // },
    // sizes: {
    //   sm: {
    //     style: {
    //       px: '$3',
    //       py: '$2',
    //     },
    //   },
    //   md: {
    //     style: {
    //       px: '$4',
    //       py: '$3',
    //     },
    //   },
    // },
    defaultProps: {
      // size: 'md',
      // variant: 'redbox',
    },
  },
  {}
);

export function Specificity({ ...args }) {
  console.log('hello wr');
  return (
    <Wrapper>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <StyledButton
          {...args}
          variant="redbox"
          states={{ hover: true }}
          // sx={{ style: { bg: '$amber400' } }}
        >
          <Text>bluebox - sm</Text>
        </StyledButton>
        {/* <StyledButton>
          <Text>bluebox - md</Text>
        </StyledButton> */}
      </View>
    </Wrapper>
  );
}
