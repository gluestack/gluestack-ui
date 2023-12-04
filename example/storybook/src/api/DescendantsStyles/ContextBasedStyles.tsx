import React, { useEffect, useMemo, useState } from 'react';

import { Pressable as RNPressable, Text as RNText, View } from 'react-native';
import { AsForwarder, styled } from '@gluestack-style/react';
import { Wrapper } from '../../components/Wrapper';
import { AnimatedView } from '@gluestack-style/animation-resolver';
import { CameraIcon } from 'lucide-react-native';

import Link from 'next/link';
import { Pressable } from 'react-native';
export const BaseIcon = styled(
  AsForwarder,
  {
    color: '$backgroundLight800',
    _dark: {
      color: '$backgroundDark400',
    },
    variants: {
      size: {
        '2xs': {
          h: '$3',
          w: '$3',
          props: {
            // @ts-ignore
            size: 12,
          },
        },
        'xs': {
          h: '$3.5',
          w: '$3.5',
          props: {
            //@ts-ignore
            size: 14,
          },
        },
        'sm': {
          h: '$4',
          w: '$4',
          props: {
            //@ts-ignore
            size: 16,
          },
        },
        'md': {
          h: '$4.5',
          w: '$4.5',
          props: {
            //@ts-ignore
            size: 18,
          },
        },
        'lg': {
          h: '$5',
          w: '$5',
          props: {
            //@ts-ignore
            size: 20,
          },
        },
        'xl': {
          h: '$6',
          w: '$6',
          props: {
            //@ts-ignore
            size: 24,
          },
        },
      },
    },
  },
  {
    componentName: 'BaseIcon',
    resolveProps: ['stroke', 'fill'],
  } as const,
  {
    propertyTokenMap: {
      stroke: 'colors',
      fill: 'colors',
    },
  }
);

const StyledIcon = styled(
  BaseIcon,
  {
    props: {
      size: 'md',
      //@ts-ignore
      fill: 'none',
    },
    color: '$backgroundLight800',
    _dark: {
      //@ts-ignore
      color: '$backgroundDark400',
    },
  },
  { componentName: 'Icon' }
);

const Text = styled(
  RNText,
  {
    color: '$red500',
  },
  {
    componentName: 'Text',
  }
);
const Text1 = styled(
  Text,
  {
    color: '$amber300',
  },
  {
    componentName: 'Text1',
  }
);

const Box = styled(View, {
  bg: '$blue500',
  p: '$10',
});
export function ContextBasedStyles() {
  console.log('>>>>>  component');
  return (
    <Wrapper colorMode="dark">
      {/* <StyledIcon as={CameraIcon} /> */}
      {/* <Text1
        // data-style="hell"
        sx={{
          color: '$red500',
        }}
      >
        vdkbkdfbv
      </Text1> */}
      <Box
        // href={'/'}
        sx={{
          bg: '$red500',
        }}
      ></Box>
    </Wrapper>
  );
}

export default ContextBasedStyles;
