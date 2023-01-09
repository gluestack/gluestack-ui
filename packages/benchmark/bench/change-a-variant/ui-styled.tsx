import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { Text, Pressable } from 'react-native';
import { styled } from '@gluestack/ui-styled';
import { config } from '../../nb.config';

const StyledButton = styled(
  Pressable,
  {
    baseStyle: {
      style: {
        bg: '$red100',
      },
    },
    variants: {
      solid: {
        style: {
          bg: '$primary600',
        },
        // descendants: {
        //   _text: {
        //     style: {
        //       color: '$text50',
        //     },
        //   },
        //   _spinner: {
        //     style: {
        //       color: '$text50',
        //     },
        //   },
        // },
        // state: {
        //   hover: {
        //     style: {
        //       bg: '$primary700',
        //     },
        //   },
        //   active: {
        //     style: {
        //       bg: '$primary800',
        //     },
        //   },
        // },
      },
      subtle: {
        style: {
          bg: '$primary100',
        },
        // colorMode: {
        //   dark: {
        //     style: {
        //       bg: '$primary300',
        //     },
        //   },
        // },
        // descendants: {
        //   _text: {
        //     style: {
        //       color: '$primary900',
        //     },
        //   },
        //   _spinner: {
        //     style: {
        //       color: '$primary900',
        //     },
        //   },
        // },
        // state: {
        //   hover: {
        //     style: {
        //       bg: '$primary200',
        //     },
        //     colorMode: {
        //       dark: {
        //         style: {
        //           bg: '$primary200',
        //         },
        //       },
        //     },
        //   },
        //   active: {
        //     style: {
        //       bg: '$primary300',
        //     },
        //     colorMode: {
        //       dark: {
        //         style: {
        //           bg: '$primary100',
        //         },
        //       },
        //     },
        //   },
        // },
      },
    },
  },
  {},
  config
);
const StyledText = styled(
  Text,
  {
    baseStyle: {
      style: {
        color: '$red500',
      },
    },
  },
  {},
  config
);

const Test = ({ testIndex }: TestComponentProps) => {
  const variants = {
    variant: testIndex % 2 === 0 ? 'solid' : 'subtle',
  };
  return (
    <StyledButton {...variants}>
      <StyledText>Hello styled button</StyledText>
    </StyledButton>
  );
};

const StitchesTest = () => {
  return (
    <>
      <StyledButton variant="solid" style={{ opacity: 0, pointerEvents: 'none' }}>
        <StyledText>Hello styled button</StyledText>
      </StyledButton>
      <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />
    </>
  );
};

export default StitchesTest;
