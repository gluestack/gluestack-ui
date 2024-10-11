import React, { memo } from 'react';
import { StyledLI } from '../../styled-components';
import { CircleIcon } from '../../primitives/Icon/Icons/Circle';
import { HStack, Text } from '../../primitives';

export const LI = memo(
  ({
    children,
    IconProps,
    containerProps,
    ol = false,
    index,
    ...props
  }: any) => {
    return ol ? (
      <StyledLI maxWidth="100%" {...props}>
        <HStack alignItems="flex-start" w="$full" {...containerProps}>
          <CircleIcon
            flexShrink={0}
            w={8}
            h={8}
            mr={10}
            mt={16}
            sx={{
              color: '$backgroundLight400',
              _dark: {
                color: '$backgroundDark600',
              },
            }}
            {...IconProps}
          />
          <Text paddingVertical={6} fontWeight="$bold">{`Step `}</Text>
          <Text paddingVertical={6} fontWeight="$bold" px={1}>
            {index - 1}
          </Text>
          <Text paddingVertical={6} fontWeight="$bold">
            :
          </Text>

          <Text
            paddingVertical={6}
            sx={{
              _web: {
                display: 'inline',
                wordBreak: 'break-word',
                width: `calc(100% - 30px)`,
                whiteSpace: 'normal',
              },
              color: '$textDark700',
              _dark: {
                color: '$textDark300',
              },
            }}
            pl={18}
          >
            {children}
          </Text>
        </HStack>
      </StyledLI>
    ) : (
      <StyledLI maxWidth="100%" {...props}>
        <HStack alignItems="flex-start" w="$full" {...containerProps}>
          <CircleIcon
            flexShrink={0}
            w={8}
            h={8}
            mr={10}
            mt={16}
            sx={{
              color: '$backgroundLight400',
              _dark: {
                color: '$backgroundDark600',
              },
            }}
            {...IconProps}
          />

          <Text
            paddingVertical={6}
            sx={{
              _web: {
                wordBreak: 'break-word',
                width: `calc(100% - 30px)`,
                whiteSpace: 'normal',
                display: 'inline',
              },
              color: '$textDark700',
              _dark: {
                color: '$textDark300',
              },
            }}
          >
            {children}
          </Text>
        </HStack>
      </StyledLI>
    );
  }
);
