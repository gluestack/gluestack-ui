import React from 'react';
import { TestComponentProps, TestRunner } from '../TestRunner';
import { Text, Pressable } from 'react-native';
import { styled, StyledProvider } from '@dank-style/react';
import { config } from '../../dank.config';
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
  {}
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
  {}
);

const Test = ({ testIndex }: TestComponentProps) => {
  const variants = {
    variant: testIndex % 2 === 0 ? 'solid' : 'subtle',
  };
  return (
    <StyledProvider config={config}>
      <StyledButton {...variants}>
        <StyledText>Hello styled button</StyledText>
      </StyledButton>
    </StyledProvider>
  );
};

const StitchesTest = () => {
  return (
    <StyledProvider config={config}>
      <StyledButton variant="solid" style={{ opacity: 0, pointerEvents: 'none' }}>
        <StyledText>Hello styled button</StyledText>
      </StyledButton>
      <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />
    </StyledProvider>
  );
};

export default StitchesTest;
