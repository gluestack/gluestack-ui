import React from 'react';
import { Box, HStack, Text, VStack } from '../../primitives';
import { createIcon } from '@gluestack-ui/icon';
import { styled } from '@gluestack-style/react';
import { Svg } from 'react-native-svg';

const Root = styled(
  Svg,
  {
    w: 20,
    h: 20,
    // @ts-ignore
    color: '$backgroundLight900',
    _dark: {
      //@ts-ignore
      color: '$backgroundDark50',
    },
  },
  {
    ancestorStyle: ['_icon'],
  }
);

const ArrowBackDocsIcon = createIcon({
  Root,
  viewBox: '0 0 20 20',
  d: 'M9.15898 16.3666C9.36292 16.5528 9.67918 16.5384 9.86536 16.3345C10.0515 16.1305 10.0371 15.8143 9.8332 15.6281L3.66535 9.99736H17.4961C17.7722 9.99736 17.9961 9.7735 17.9961 9.49736C17.9961 9.22122 17.7722 8.99736 17.4961 8.99736H3.66824L9.8332 3.36927C10.0371 3.18309 10.0515 2.86684 9.86536 2.66289C9.67918 2.45895 9.36292 2.44456 9.15898 2.63074L2.24263 8.94478C2.10268 9.07254 2.02285 9.24008 2.00314 9.41323C1.99851 9.44058 1.99609 9.46869 1.99609 9.49736C1.99609 9.52423 1.99821 9.55061 2.00229 9.57633C2.02047 9.75224 2.10058 9.9229 2.24263 10.0526L9.15898 16.3666Z',
});

const ArrowForwardDocsIcon = createIcon({
  Root,
  viewBox: '0 0 20 20',
  d: 'M10.8371 2.63074C10.6332 2.44456 10.3169 2.45895 10.1307 2.66289C9.94456 2.86683 9.95895 3.18309 10.1629 3.36927L16.3307 9H2.5C2.22386 9 2 9.22386 2 9.5C2 9.77614 2.22386 10 2.5 10H16.3279L10.1629 15.6281C9.95895 15.8143 9.94456 16.1305 10.1307 16.3345C10.3169 16.5384 10.6332 16.5528 10.8371 16.3666L17.7535 10.0526C17.8934 9.92482 17.9732 9.75728 17.993 9.58414C17.9976 9.55678 18 9.52867 18 9.5C18 9.47313 17.9979 9.44675 17.9938 9.42103C17.9756 9.24512 17.8955 9.07446 17.7535 8.94478L10.8371 2.63074Z',
});

export const LinkButton = ({ pageText, pageLink, NextLink, type }: any) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <NextLink
      href={`${pageLink}`}
      passHref
      style={{
        flex: 1,
        textDecoration: 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <HStack
        pointerEvents="none"
        states={{ hover: isHovered }}
        reversed={type === 'previous' ? false : true}
        // reversed prop is not working
        flexDirection={type === 'previous' ? 'row' : 'row-reverse'}
        flex={1}
        borderRadius={8}
        borderWidth={1}
        p={'$5'}
        sx={{
          ':hover': {
            _dark: {
              bg: '$backgroundDark900',
              borderColor: 'transparent',
            },
            bg: '$borderLight100',
            borderColor: 'transparent',
          },

          'bg': 'transparent',
          'borderColor': '$borderLight200',
          '_dark': {
            borderColor: '$borderDark800',
          },
        }}
        justifyContent="space-between"
      >
        {/* {type === 'previous' ? (
          <VStack justifyContent={'center'}>
            <ArrowBackDocsIcon />
          </VStack>
        ) : (
          <VStack justifyContent={'center'}>
            <ArrowForwardDocsIcon />
          </VStack>
        )} */}
        <VStack justifyContent={'center'}>
          {type === 'previous' ? (
            <ArrowBackDocsIcon />
          ) : (
            <ArrowForwardDocsIcon />
          )}
        </VStack>

        <Box alignItems={type === 'previous' ? 'flex-end' : 'flex-start'}>
          <Text
            fontSize={'$sm'}
            lineHeight={'$sm'}
            sx={{
              color: '$textLight700',
              _dark: {
                color: '$textDark300',
              },
            }}
          >
            {type == 'previous' ? 'Go back' : 'Up next'}
          </Text>
          <Text
            fontSize={'$lg'}
            lineHeight={'$lg'}
            textAlign={type == 'previous' ? 'left' : 'right'}
            sx={{
              color: '$textLight900',
              _dark: {
                color: '$textDark50',
              },
            }}
          >
            {pageText}
          </Text>
        </Box>
      </HStack>
    </NextLink>
  );
};
