import { Box, HStack, Pressable, Text } from '../../primitives';
import React, { useEffect, useState } from 'react';
import { findPageById } from '../../utils/helperFunction';
import { LayoutContext } from '../Layout/LayoutContext';

export const HeadingTabs = ({ ...props }: any) => {
  const { isOpenSidebar, sidebarItems, router, colorMode } =
    React.useContext(LayoutContext);

  let result = findPageById(router.pathname, sidebarItems);

  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(0);
  }, [router.pathname]);

  function handleTabPress(index: number) {
    //commented it out because it was causing toggle in active tab
    // setActive(index);
    let x: any = document.querySelectorAll('h2');
    if (x[index]) {
      x[index].style.scrollMargin = '130px';
      x[index].scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    }
  }

  useEffect(() => {
    const container = document.querySelector('#layout-content') as HTMLElement;
    const headings = document.querySelectorAll('h2');

    const handleScroll = () => {
      let index = 0;
      for (let i = 0; i < headings.length; i++) {
        if (container.scrollTop >= headings[i].offsetTop + 100) {
          index = i;
        }
      }
      setActive(index);
    };
    container?.addEventListener('scroll', handleScroll);

    return () => container?.removeEventListener('scroll', () => {});
  }, [router.pathname, colorMode]);

  return result?.metaData?.showHeader ? (
    <Box
      nativeID={'heading-tabs'}
      {...props}
      position="sticky"
      top={'69px'}
      zIndex={10}
      bg="$borderLight50"
      alignItems="center"
      w="100%"
      flexDirection="row"
      // px={'$4'}
      sx={{
        overflowX: 'scroll',
        overflowY: 'hidden',
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
        {result?.h2Tags ? (
          <HStack>
            {result?.h2Tags.map((item: any, index: any) => {
              return (
                <Pressable
                  borderBottomWidth={active == index ? 2 : 0}
                  borderColor={'$primary500'}
                  px={'$4'}
                  pt={'$5'}
                  pb={'$4'}
                  onPress={() => {
                    handleTabPress(index);
                  }}
                  sx={{
                    _web: {
                      boxShadow: 'none',
                      _dark: {
                        boxShadow: 'none',
                      },
                      _light: {
                        boxShadow: 'none',
                      },
                    },
                  }}
                >
                  <Text
                    minWidth={'$24'}
                    textAlign={'center'}
                    fontWeight={'$medium'}
                    lineHeight={'$sm'}
                    fontSize={'$md'}
                    color="$textLight700"
                    sx={{
                      _dark: {
                        color: '$textDark300',
                      },
                    }}
                  >
                    {item}
                  </Text>
                </Pressable>
              );
            })}
          </HStack>
        ) : null}
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
