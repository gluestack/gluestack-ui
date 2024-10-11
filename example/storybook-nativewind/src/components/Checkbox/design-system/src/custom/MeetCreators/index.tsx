import {
  Box,
  Button,
  HStack,
  Link,
  OpenInNewIcon,
  Text,
} from '../../primitives';
import React from 'react';
import { GeekyAntsLogo } from './icons';

export function MeetCreators({ geekyantsLink }: { geekyantsLink: string }) {
  return (
    <Box
      py={60}
      sx={{
        '@base': {
          px: '$12',
          // mb: '$40',
        },
        '@md': {
          px: '$24',
          // mb: 200,
        },
        '_web': {
          background:
            'radial-gradient(208.6% 2959.48% at -48.77% -48.39%, #1B73ED 0%, rgba(46, 180, 255, 0.1) 28.74%, rgba(194, 46, 255, 0.1) 67.56%, rgba(46, 180, 255, 0.4) 78.65%, #1BC7ED 100%)',
        },
      }}
      alignItems="center"
    >
      <Box maxWidth={663}>
        <Box
          alignItems="center"
          justifyContent="center"
          mb="$3"
          sx={{
            '@sm': {
              flexDirection: 'row',
            },
          }}
        >
          <Text
            fontWeight="$medium"
            color="$textDark100"
            lineHeight="$4xl"
            textAlign="center"
            sx={{
              '@base': {
                fontSize: '$3xl',
                lineHeight: '$3xl',
              },
              '@md': {
                fontSize: '$4xl',
                lineHeight: '$4xl',
              },
            }}
          >
            Built with love at{' '}
          </Text>
          <GeekyAntsLogo />
        </Box>
        <Text
          fontSize="$lg"
          justifyContent="center"
          lineHeight="$lg"
          color="$textDark300"
          textAlign="center"
        >
          We are a team of development experts who love open-source and solving
          developer problems. We&#39;ve built more than 500 products for
          organizations across the globe ranging from startups to big
          enterprises!
        </Text>

        <HStack justifyContent="center" mt="$6">
          <Link
            sx={{
              'rounded': '$full',
              ':focusVisible': {
                _web: {
                  outlineWidth: 0,
                },
                bg: '$secondary50_alpha_20',
              },
              ':hover': {
                _text: {
                  color: '$textDark50',
                },
              },
            }}
            href={geekyantsLink}
            isExternal
          >
            <Button focusable={false} variant="secondary">
              <Button.Text
                mr="$2"
                color="$textDark50"
                textDecorationLine="none"
              >
                Visit GeekyAnts
              </Button.Text>
              <OpenInNewIcon width="$4" height="$4" />
            </Button>
          </Link>
        </HStack>
      </Box>
    </Box>
  );
}
