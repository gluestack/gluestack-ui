import React from 'react';

import { Pressable, Text as RNText, View } from 'react-native';
import { AsForwarder, styled } from '@gluestack-style/react';
import { Wrapper } from '../../components/Wrapper';
// import { AddIcon } from '@gluestack/design-system';
import { createIcon } from '@gluestack-ui/icon';
import { Svg } from 'react-native-svg';

const Box = styled(View, {
  bg: '$backgroundDark300',
  width: '200px',
  height: '100px',
});

const Text = styled(
  RNText,
  {
    // bg: '$amber300',
    // color: '$red500',
    // props: {
    //   color: '$pink400',
    // },
    // variants: {
    //   variant: {
    //     solid: {
    //       color: '$green500',
    //     },
    //   },
    // },
  },
  {
    componentName: 'TEXT',
  }
);
const Text2 = styled(
  Text,
  {
    color: '$blue500',
    // props: {
    //   color: '$purple500',
    // },
    variants: {
      variant: {
        solid: {
          bg: '$red400',
        },
      },
    },
    defaultProps: {
      variant: 'solid',
    },
  },
  {
    componentName: 'TEXT2',
  }
);

export function ContextBasedStyles() {
  return (
    <Wrapper>
      <Box>
        <Text>Hello world Text</Text>
        <Text2 as={Text}>Hello world Text2</Text2>
      </Box>
    </Wrapper>
  );
}

export default ContextBasedStyles;
