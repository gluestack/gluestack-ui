import { Text } from 'react-native';
import { styled } from '@gluestack/ui-styled';
import React from 'react';

const Button = styled(
  Text,
  {
    baseStyle: {
      style: { color: '$text800' },
      state: {
        hover: {
          style: {
            bg: '$amber100',
          },
        },
      },
    },
    sizes: {
      xs: {
        style: {
          h: '$1/3',
        },
      },
    },
    variants: {
      primary: {
        style: {
          bg: '$red100',
        },
      },
      secondary: {
        style: {
          backgroundColor: '$amber100',
        },
        colorMode: {
          light: {
            style: {
              fontFamily: '$body',
            },
          },
        },
      },
    },
  } as const,
  { ancestorStyle: ['_text'] }
);

type myType = UtilityProp;

<Button
  sx={{
    style: {
      bg: '$red100',
    },
  }}
/>;
