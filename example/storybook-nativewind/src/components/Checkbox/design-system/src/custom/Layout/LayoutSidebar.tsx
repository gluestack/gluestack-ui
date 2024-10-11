/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useEffect } from 'react';
import { Breadcrumbs } from '../Breadcrumbs';
import { Sidebar } from '../Sidebar';
import { Box, Text, Pressable, Divider } from '@gluestack-ui/themed';
import { LayoutContext } from './LayoutContext';
import { Icon } from '@gluestack-ui/themed';
export const SidebarRecursive = ({
  sidebarItem,
  version,
  Link,
  router,
  leftIndent,
}: any) => {
  if (sidebarItem?.type === 'heading') {
    return (
      <Sidebar.Group key={sidebarItem.title} ml={`$${leftIndent}`} mb={36}>
        <Sidebar.GroupHeader>{sidebarItem.title}</Sidebar.GroupHeader>
        {sidebarItem?.pages?.map((sidebarPageItems: any) => {
          // const isActiveRoute = router?.route.includes(sidebarPageItems.id);
          // console.log('isActiveRoute', isActiveRoute, router?.route);
          return (
            <SidebarRecursive
              sidebarItem={sidebarPageItems}
              version={version}
              Link={Link}
              router={router}
              leftIndent={leftIndent + 2}
            />
          );
        })}
      </Sidebar.Group>
    );
  }
  return (
    <SidebarNodeItem sidebarItem={sidebarItem} Link={Link} router={router} />
  );
};

const SidebarNodeItem = ({ sidebarItem, Link, router }: any) => {
  const { setIsOpenSidebar } = React.useContext(LayoutContext);
  let sidebarItemTag = sidebarItem?.metaData?.tag;
  // let sidebarItemTagText;
  // if (sidebarItemTag) {
  //   sidebarItemTagText = sidebarItemTag.toString();
  //   sidebarItemTagText =
  //     sidebarItemTagText.charAt(0).toUpperCase() + sidebarItemTagText.slice(1);
  // }

  const isActiveRoute = router?.route === sidebarItem.id;
  return (
    <Sidebar.GroupItem
      key={sidebarItem.title}
      borderRadius="$0"
      sx={{
        borderLeftWidth: 3,
        borderLeftColor: isActiveRoute ? '$primary500' : 'transparent',
        // bg: isActiveRoute ? '$primary100_alpha_50' : 'transparent',
        _light: {
          'bg': isActiveRoute ? '$primary100_alpha_30' : undefined,

          ':hover': {
            bg: '$primary100_alpha_50',
          },
        },
        _dark: {
          'bg': isActiveRoute ? '$primary600_alpha_30' : undefined,
          ':hover': {
            bg: '$primary600_alpha_50',
          },
        },
      }}
      onPress={() => setIsOpenSidebar(false)}
      focusable={false}
    >
      <Link
        href={`${sidebarItem.id}`}
        passHref
        style={{
          width: '100%',
          height: '100%',
          textDecoration: 'none',
        }}
      >
        <Sidebar.GroupItemContent>
          <Sidebar.GroupItemText>{sidebarItem.title}</Sidebar.GroupItemText>
          {sidebarItemTag && (
            <Sidebar.GroupItemTag variant={sidebarItemTag}>
              <Sidebar.GroupItemTagText>
                {sidebarItemTag}
              </Sidebar.GroupItemTagText>
            </Sidebar.GroupItemTag>
          )}
        </Sidebar.GroupItemContent>
      </Link>
    </Sidebar.GroupItem>
  );
};

export const LayoutSidebar = ({ fluidLayout, ...props }: any) => {
  const {
    sidebarItems: sidebars,
    version,
    Link,
    router,
  } = React.useContext(LayoutContext);
  // const [sidebars, setSidebars] = React.useState(props.sidebarItems);
  // const sidebars = props.sidebarItems;
  const getHeaders = useCallback(() => {
    const headerItems = [];
    for (let i = 0; i < sidebars.length; i++) {
      if (sidebars[i].type === 'Dropdown') {
        headerItems.push(sidebars[i]);
      }
    }
    return headerItems;
  }, [sidebars]);
  const getSelectedHeader = React.useCallback(() => {
    const header = getHeaders();
    for (let i = 0; i < header.length; i++) {
      if (
        router?.route.includes(
          header[i]?.title?.toLocaleLowerCase().split(' ').join('-')
        )
      ) {
        return header[i].title;
      }
    }
  }, [getHeaders, router?.route]);
  const [selectedHeading, setSelectedHeading] = React.useState(
    getSelectedHeader() ?? ''
  );

  useEffect(() => {
    setSelectedHeading(getSelectedHeader());
  }, [sidebars, getSelectedHeader]);
  const [hover, setHover] = React.useState(false);

  function getFirstPage(headerItem: any) {
    for (let i = 0; i < sidebars.length; i++) {
      if (sidebars[i].title === headerItem) {
        return getId(sidebars[i].pages[0]);
      }
    }
    return router?.route;
  }
  function getId(pages: any): string {
    if (pages?.pages.length > 0) {
      return getId(pages?.pages[0]);
    }

    return pages?.id;
  }
  let isActiveRoute: any = false;

  if (selectedHeading) {
    isActiveRoute = router?.route.includes(
      selectedHeading?.toLocaleLowerCase().split(' ').join('-')
    )
      ? true
      : false;
  }
  function getSidebarItems() {
    for (let i = 0; i < sidebars.length; i++) {
      if (sidebars[i].title === selectedHeading) {
        return sidebars[i].pages;
      }
    }
  }

  const handleHeaderClick = (headerItem: any) => {
    setSelectedHeading(headerItem.title);
  };
  // TODO: Remove this incase header items are required in case of gluestack-style

  // TODO: remove below hacky code later
  if (
    // router.pathname.includes('nativewind/docs') ||
    router.pathname.includes('style/docs')
  ) {
    return (
      <Sidebar
        position="fixed"
        w="250px"
        pr="$3"
        {...props}
        borderColor="$borderLight200"
        borderRightWidth={1}
        sx={{
          'zIndex': 1,
          '@lg': {
            pl: fluidLayout ? '$1' : '$1',
          },
          '@xl': {
            pl: fluidLayout ? '$1' : '$1',
          },
          '_dark': {
            borderColor: '$borderDark800',
          },
        }}
        pt={24}
        style={{
          overflowY: hover ? 'scroll' : 'hidden',
          scrollbarGutter: 'stable',
          // height: `calc(100% - 64px);`,  //not working on next routing
          height: '94vh',
        }}
        onMouseOver={() => {
          if (!hover) {
            setHover(true);
          }
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        // onHoverIn={() => {
        //   console.log('hello world');
        // }}
      >
        <Breadcrumbs />
        {sidebars?.map((sidebarItems: any) => {
          return (
            <SidebarRecursive
              sidebarItem={sidebarItems}
              version={version}
              Link={Link}
              router={router}
              leftIndent={0}
            />
          );
        })}
      </Sidebar>
    );
  }
  return (
    <Box
      // @ts-ignore
      position="fixed"
      // ref={sidebarRef}
      borderColor="$borderLight700"
      borderRightWidth={'$1'}
      // ref={sidebarRef}
      // @ts-ignore
      height="94vh"
      sx={{
        _light: {
          borderColor: '$borderLight100',
        },
        _dark: {
          borderColor: '$borderDark800',
        },
      }}
    >
      <Box py="$2">
        {getHeaders().map((headerItem: any) => {
          return (
            <>
              <Pressable
                onPress={() => handleHeaderClick(headerItem)}
                px="$4"
                pt="$1"
                mr="$2.5"
                my={'$0.5'}
                borderRadius={'$md'}
                sx={{
                  bg:
                    isActiveRoute && headerItem.title == selectedHeading
                      ? '$primary100_alpha_50'
                      : 'transparent',
                  _light: {
                    ':hover': {
                      bg: '$primary100_alpha_30',
                    },
                  },
                  _dark: {
                    'bg':
                      isActiveRoute && headerItem.title == selectedHeading
                        ? '$primary600_alpha_50'
                        : undefined,
                    ':hover': {
                      bg: '$primary600_alpha_30',
                    },
                  },
                }}
              >
                <Link href={getFirstPage(headerItem.title)}>
                  <Icon
                    as={
                      require(// TODO: Fix dynamic require
                      // headerItem?.icons?.source ??
                      'lucide-react-native')[
                        headerItem?.icons?.name ?? 'CircleHelp'
                      ]
                    }
                    size={'sm'}
                    color="$white"
                    sx={{
                      _light: {
                        color: '$textLight700',
                      },
                    }}
                  />
                  <Text
                    ml="$2"
                    fontFamily="$body"
                    fontWeight="$medium"
                    fontSize="$md"
                    lineHeight="$2xl"
                    color="$white"
                    sx={{
                      _light: {
                        color: '$textLight700',
                      },
                    }}
                  >
                    {headerItem.title}
                  </Text>
                </Link>
              </Pressable>
            </>
          );
        })}
      </Box>
      {getHeaders().length > 0 && <Divider />}

      <RenderSideBarPages
        key={selectedHeading}
        sidebars={getSidebarItems()}
        fluidLayout={fluidLayout}
      />
    </Box>
  );
};

function RenderSideBarPages({ ...props }: any) {
  const { version, Link, router } = React.useContext(LayoutContext);

  const [hover, setHover] = React.useState(false);
  const sidebarRef: any = React.useRef(null);

  useEffect(() => {
    scrollToTop();
  }, []);

  const scrollToTop = async () => {
    if (sidebarRef) {
      await sidebarRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Sidebar
        // ref={props.sidebarRef}
        // position="fixed"
        w="250px"
        pr="$1"
        {...props}
        // borderColor="$borderLight200"
        // borderRightWidth={1}
        overflow="scroll"
        flex={'1'}
        sx={{
          'zIndex': 1,
          '@lg': {
            pl: '$1',
          },
          '@xl': {
            pl: '$1',
          },
          '_dark': {
            borderColor: '$borderDark800',
          },
        }}
        mt={'$2'}
        style={{
          overflowY: hover ? 'scroll' : 'hidden',
          scrollbarGutter: 'stable',
        }}
        // mb="$40"
        onMouseOver={() => {
          if (!hover) {
            setHover(true);
          }
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        {/* @ts-ignore */}
        <Box ref={sidebarRef}></Box>
        {props.sidebars?.map((sidebarPagesItems: any) => {
          return (
            <SidebarRecursive
              sidebarItem={sidebarPagesItems}
              version={version}
              Link={Link}
              router={router}
              leftIndent={0}
            />
          );
        })}
      </Sidebar>
    </>
  );
}
