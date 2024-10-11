import React from 'react';
import { Box, Text } from '../../primitives';
import { findPageById } from '../../utils/helperFunction';
import { H1 } from '../H1';
import { LayoutContext } from '../Layout/LayoutContext';
import {
  StyledSideBarTag,
  StyledSideBarTagText,
} from '../../styled-components';

export const ComponentIntro = ({ ...props }: any) => {
  const { isOpenSidebar, sidebarItems, router } =
    React.useContext(LayoutContext);

  const result = findPageById(router.pathname, sidebarItems);

  return result?.metaData?.showHeader ? (
    <Box
      {...props}
      bg="$borderLight50"
      alignItems="center"
      w="100%"
      flexDirection="row"
      px={'$4'}
      sx={{
        _dark: {
          bg: '$backgroundDark900',
        },
      }}
    >
      <Box
        flex={1}
        maxWidth={736}
        mx={'auto'}
        display={isOpenSidebar ? 'none' : 'flex'}
      >
        <Box>
          {result?.metaData?.pageTitle || result?.metaData?.title ? (
            <Box flexDirection="row">
              <H1
                mt={'$4'}
                mb={'$2'}
                color="$textLight900"
                sx={{
                  _dark: {
                    color: '$textDark50',
                  },
                }}
              >
                {result?.metaData?.pageTitle ?? result?.metaData?.title}
              </H1>
              <Box justifyContent="center" ml="$0.5">
                {result?.metaData?.tag && (
                  <StyledSideBarTag
                    mt="$7"
                    mb="$2"
                    px="$2"
                    variant={result?.metaData?.tag}
                    sx={{
                      bg: '$backgroundLight200',
                      _dark: { bg: '$backgroundDark950' },
                    }}
                  >
                    <StyledSideBarTagText fontSize={14}>
                      {result?.metaData?.tag}
                    </StyledSideBarTagText>
                  </StyledSideBarTag>
                )}
              </Box>
            </Box>
          ) : null}
          {result?.metaData?.pageDescription ||
          result?.metaData?.description ? (
            <Text
              mb={'$4'}
              fontWeight={'$normal'}
              lineHeight={'$md'}
              fontSize={'$md'}
              color="$textLight700"
              sx={{
                _dark: {
                  color: '$textDark300',
                },
              }}
            >
              {result?.metaData?.pageDescription ??
                result?.metaData?.description}
            </Text>
          ) : null}
          {/* {result?.metaData?.tag == 'beta' ? (
            <HStack>
              <Link href="/" isExternal>
                <Text fontSize="$xs">spec doc</Text>
              </Link>
            </HStack>
          ) : null} */}
        </Box>
      </Box>
      <Box
        width={200}
        sx={{
          'display': 'none',
          '@xl': {
            display: 'flex',
          },
        }}
      />
    </Box>
  ) : null;
};
