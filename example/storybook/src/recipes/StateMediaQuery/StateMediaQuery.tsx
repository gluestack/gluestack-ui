import { Text, Pressable } from 'react-native';
import { styled } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';
import { useState } from 'react';

const StyledStateMediaQuery = styled(
  Pressable,
  {
    baseStyle: {
      style: {
        bg: '$primary500',
        p: '$3',
      },
      descendants: {
        _text: {
          style: {
            color: '$white',
          },
        },
      },
      state: {
        active: {
          style: {
            bg: '$primary700',
          },
        },
      },
      queries: [
        {
          condition: '$base',
          value: {
            style: {
              bg: '$red500',
            },
            state: {
              active: {
                style: {
                  bg: '$red700',
                },
              },
            },
          },
        },
        {
          condition: '$sm',
          value: {
            style: {
              bg: '$blue500',
            },
            state: {
              active: {
                style: {
                  bg: '$blue700',
                },
              },
            },
          },
        },
        {
          condition: '$md',
          value: {
            style: {
              bg: '$green500',
            },
            state: {
              active: {
                style: {
                  bg: '$green700',
                },
              },
            },
          },
        },
        // {
        //   condition: '$lg',
        //   value: {
        //     style: {
        //       bg: '$yellow500',
        //     },
        //     state: {
        //       active: {
        //         style: {
        //           bg: '$yellow700',
        //         },
        //       },
        //     },
        //   },
        // },
        // {
        //   condition: '$xl',
        //   value: {
        //     style: {
        //       bg: '$pink500',
        //     },
        //     state: {
        //       active: {
        //         style: {
        //           bg: '$pink700',
        //         },
        //       },
        //     },
        //   },
        // },
      ],
    },
  },
  { descendantStyle: ['_text'] }
);

const StyledButtonText = styled(
  Text,
  {},
  {
    ancestorStyle: ['_text'],
  }
);

export function StateMediaQuery({ ...args }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Wrapper>
      <StyledStateMediaQuery
        onPressIn={() => setIsActive(true)}
        onPressOut={() => setIsActive(false)}
        states={{
          active: isActive,
        }}
      >
        <StyledButtonText>Button</StyledButtonText>
      </StyledStateMediaQuery>
    </Wrapper>
  );
}
