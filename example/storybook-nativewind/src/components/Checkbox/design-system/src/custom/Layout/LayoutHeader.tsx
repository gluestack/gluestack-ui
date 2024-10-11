import React from 'react';
import { Nav } from '../Nav';
import {
  Box,
  HStack,
  Text,
  HamburgerIcon,
  WeatherMoon,
  CloseIcon,
  SunIcon,
  Pressable,
} from '../../primitives';
import { LayoutContext } from './LayoutContext';
// import { ResponsiveSidebar } from './ResponsiveSidebar';
export const LayoutHeader = ({ fluidLayout = false }: any) => {
  const { headerItems, setIsOpenSidebar, isOpenSidebar, Docsearch } =
    React.useContext(LayoutContext);

  return (
    <Nav
      w="$full"
      py="$4"
      position="sticky"
      zIndex={10}
      top="0"
      left="0"
      sx={{
        bg: '$white',
        borderColor: fluidLayout ? '$borderLight200' : null,
        _dark: {
          bg: '$black',
          borderColor: fluidLayout ? '$borderDark800' : null,
        },
      }}
      borderBottomWidth={fluidLayout ? 1 : 0}
      overflow="hidden"
    >
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          '@lg': {
            mx: fluidLayout ? '$5' : 40,
          },
          '@xl': {
            mx: fluidLayout ? '$5' : 120,
          },
        }}
        mx={'$5'}
      >
        <HeaderWrapperComponent data={headerItems.left} />
        {/* <HeaderWrapperComponent data={headerItems.center} /> */}
        <HStack alignItems="center">
          {Docsearch && (
            <Box mr="$6">
              <Docsearch />
            </Box>
          )}
          <HeaderWrapperComponent
            data={headerItems.right}
            sx={{
              '@md': {
                display: 'flex',
              },
            }}
            display="none"
          />
          {Docsearch ? (
            <Box
              sx={{
                'display': 'none',
                '@sm': {
                  display: 'flex',
                },
              }}
            >
              <ToggleColorModeButton />
            </Box>
          ) : (
            <ToggleColorModeButton />
          )}

          <Pressable
            onPress={() => {
              setIsOpenSidebar(!isOpenSidebar);
            }}
            display="flex"
            sx={{
              '_web': {
                ':focus': {
                  outlineWidth: 0,
                  boxShadow: 'none',
                  _dark: {
                    boxShadow: 'none',
                  },
                },
              },
              '@base': Docsearch
                ? {
                    ml: 0,
                  }
                : {
                    ml: '$6',
                  },
              '@sm': {
                ml: '$6',
              },
              '@lg': {
                display: 'none',
              },
            }}
          >
            {isOpenSidebar ? (
              <CloseIcon
                sx={{
                  _dark: {
                    color: '$white',
                  },
                }}
                w="$6"
                h="$6"
              />
            ) : (
              <HamburgerIcon
                sx={{
                  _dark: {
                    color: '$white',
                  },
                }}
                w="$6"
                h="$6"
              />
            )}
          </Pressable>
        </HStack>
      </Box>
    </Nav>
  );
};

const HeaderItem = ({ itemData, ...props }: any) => {
  const { colorMode, Image, Link } = React.useContext(LayoutContext);

  if (itemData.type === 'image' && Image) {
    return (
      <Link href={itemData?.redirectUrl ?? '/'}>
        <Box {...props}>
          <Image
            src={
              colorMode === 'dark' && itemData.darkModeUrl
                ? itemData.darkModeUrl
                : itemData.url
            }
            alt="Logo"
            width={157}
            height={30}
          />
        </Box>
      </Link>
    );
  } else if (itemData.type === 'link' && Link) {
    const { icon, darkIcon, text } = itemData;
    return (
      <Box {...props}>
        <Link height="$6" href={itemData.url} mx="$3">
          {colorMode === 'dark' ? darkIcon : icon ?? <Text>{text}</Text>}
        </Link>
      </Box>
    );
  } else if (itemData.type === 'component') {
    const Component = itemData.component;
    return (
      <Box {...props}>
        <Component />
      </Box>
    );
  }
  return <></>;
};
const HeaderWrapperComponent = ({ data, ...props }: any) => {
  return (
    <HStack justifyContent="center" alignItems="center" {...props}>
      {data.map((dataItem: any) => {
        return <HeaderItem itemData={dataItem} />;
      })}
    </HStack>
  );
};

export const ToggleColorModeButton = () => {
  const { colorMode, toggleColorMode } = React.useContext(LayoutContext);
  return (
    <Pressable
      onPress={toggleColorMode}
      accessibilityRole="button"
      mx="$3"
      sx={{
        '_web': {
          outlineWidth: 0,
          boxShadow: 'none',
        },
        ':focusVisible': {
          _web: {
            outlineWidth: 2,
            outlineColor: '$primary700',
            outlineStyle: 'solid',
          },
        },
        ':focus': {
          _web: {
            // outlineWidth: 2,
            // outlineColor: "$primary700",
            // outlineStyle: "solid",
            boxShadow: 'none',
          },
        },
      }}
    >
      {colorMode === 'light' ? (
        <SunIcon w="$6" h="$6" />
      ) : (
        <WeatherMoon color="$white" w="$6" h="$6" />
      )}
    </Pressable>
  );
};
