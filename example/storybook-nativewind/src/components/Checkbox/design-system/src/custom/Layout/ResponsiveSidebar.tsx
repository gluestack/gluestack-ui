/* eslint-disable react-native/no-inline-styles */
import React, { useCallback } from 'react';
import { Sidebar } from '../Sidebar';
import { LayoutContext } from './LayoutContext';
import { SidebarRecursive } from './LayoutSidebar';
import { Box } from '../../primitives';
import { ToggleColorModeButton } from './LayoutHeader';
import { Pressable, Text, Divider } from '@gluestack-ui/themed';

const ResponsiveSidebar = ({ ...props }: any) => {
  const {
    sidebarItems: sidebars,
    isOpenSidebar,
    setIsOpenSidebar,
    Link,
    version,
    router,
    Docsearch,
  } = React.useContext(LayoutContext);

  const getHeaders = useCallback(() => {
    const headerItems = [];
    for (let i = 0; i < sidebars.length; i++) {
      if (sidebars[i].type === 'Dropdown') {
        headerItems.push(sidebars[i].title);
      }
    }
    return headerItems;
  }, [sidebars]);
  const getSelectedHeader = React.useCallback(() => {
    const header = getHeaders();
    for (let i = 0; i < header.length; i++) {
      if (
        router?.route.includes(
          header[i]?.toLocaleLowerCase().split(' ').join('-')
        )
      ) {
        return header[i];
      }
    }
  }, [getHeaders, router?.route]);
  React.useEffect(() => {
    setSelectedHeading(getSelectedHeader());
  }, [sidebars, getSelectedHeader]);

  const [selectedHeading, setSelectedHeading] = React.useState(
    getSelectedHeader()
  );

  // const [hover, setHover] = React.useState(false);

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

  let isActiveRoute: boolean = false;
  if (selectedHeading) {
    isActiveRoute = router?.route.includes(
      selectedHeading.toLocaleLowerCase().split(' ').join('-')
    )
      ? true
      : false;
  }
  if (router.pathname.includes('gluestack-style/docs')) {
    return (
      <Sidebar
        {...props}
        overflow="scroll"
        display={isOpenSidebar ? 'flex' : 'none'}
        sx={{
          '@lg': {
            display: 'none',
          },
        }}
        width="100%"
        flex={1}
        ml="$2"
      >
        {Docsearch && (
          <Box
            sx={{
              'display': 'flex',
              '@sm': {
                display: 'none',
              },
              'pl': '$3',
              'mb': '$3',
            }}
          >
            <ToggleColorModeButton />
          </Box>
        )}
        {sidebars?.map((sidebarItems: any) => {
          return (
            <SidebarRecursive
              sidebarItem={sidebarItems}
              version={version}
              Link={Link}
              router={router}
              leftIndent={0}
              onPressClose={() => setIsOpenSidebar(false)}
            />
          );
        })}
        {/* {sidebarItems.map((sidebar: any) => {
      return (
        <Sidebar.Group key={sidebar.title} mb={36}>
          <Sidebar.GroupHeader width="100%">
            {sidebar.title}
          </Sidebar.GroupHeader>
          {sidebar.pages.map((sidebarPageItems: any) => {
            console.log(sidebarPageItems, 'sidebarPageItems');

            return (
              <Sidebar.GroupItem
                key={sidebarPageItems.title}
                width="100%"
                onPress={() => setIsOpenSidebar(!isOpenSidebar)}
              >
                <Link
                  href={`${sidebarPageItems.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <Sidebar.GroupItemContent>
                    <Sidebar.GroupItemText>
                      {sidebarPageItems.title}
                    </Sidebar.GroupItemText>
                  </Sidebar.GroupItemContent>
                </Link>
              </Sidebar.GroupItem>
            );
          })}
        </Sidebar.Group>
      );
    })} */}
      </Sidebar>
    );
  }
  return (
    <>
      <Box
        // borderColor="$borderLight700"
        // borderRightWidth={1}
        overflow="scroll"
        px="$2"
        display={isOpenSidebar ? 'flex' : 'none'}
      >
        <Box>
          {getHeaders().map((headerItem: any) => {
            return (
              <>
                <Pressable
                  onPress={() => {
                    setSelectedHeading(headerItem);
                  }}
                  px="$4"
                  pt="$1"
                  mr="$2.5"
                  my={'$0.5'}
                  borderRadius={'$md'}
                  sx={{
                    bg:
                      isActiveRoute && headerItem == selectedHeading
                        ? '$primary100_alpha_50'
                        : 'transparent',
                    _light: {
                      ':hover': {
                        bg: '$primary100_alpha_30',
                      },
                    },
                    _dark: {
                      'bg':
                        isActiveRoute && headerItem == selectedHeading
                          ? '$primary600_alpha_50'
                          : undefined,
                      ':hover': {
                        bg: '$primary600_alpha_30',
                      },
                    },
                  }}
                >
                  <Link href={getFirstPage(headerItem)}>
                    <Text
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
                      {headerItem}
                    </Text>
                  </Link>
                </Pressable>
              </>
            );
          })}
        </Box>
        <Divider />
        <RenderSideBarPages
          selectedHeading={selectedHeading}
          // fluidLayout={fluidLayout}
        />
      </Box>
    </>
  );
  // <Sidebar
  //   {...props}
  //   overflow="scroll"
  //   display={isOpenSidebar ? 'flex' : 'none'}
  //   sx={{
  //     '@lg': {
  //       display: 'none',
  //     },
  //   }}
  //   width="100%"
  //   flex={1}
  // >
  //   {Docsearch && (
  //     <Box
  //       sx={{
  //         'display': 'flex',
  //         '@sm': {
  //           display: 'none',
  //         },
  //         'pl': '$3',
  //         'mb': '$3',
  //       }}
  //     >
  //       <ToggleColorModeButton />
  //     </Box>
  //   )}
  //   {sidebarItems?.map((sidebarItems: any) => {
  //     return (
  //       <SidebarRecursive
  //         sidebarItem={sidebarItems}
  //         version={version}
  //         Link={Link}
  //         router={router}
  //         leftIndent={0}
  //         onPressClose={() => setIsOpenSidebar(!isOpenSidebar)}
  //       />
  //     );
  //   })}
  //   {/* {sidebarItems.map((sidebar: any) => {
  //     return (
  //       <Sidebar.Group key={sidebar.title} mb={36}>
  //         <Sidebar.GroupHeader width="100%">
  //           {sidebar.title}
  //         </Sidebar.GroupHeader>
  //         {sidebar.pages.map((sidebarPageItems: any) => {
  //           console.log(sidebarPageItems, 'sidebarPageItems');

  //           return (
  //             <Sidebar.GroupItem
  //               key={sidebarPageItems.title}
  //               width="100%"
  //               onPress={() => setIsOpenSidebar(!isOpenSidebar)}
  //             >
  //               <Link
  //                 href={`${sidebarPageItems.id}`}
  //                 style={{ textDecoration: 'none' }}
  //               >
  //                 <Sidebar.GroupItemContent>
  //                   <Sidebar.GroupItemText>
  //                     {sidebarPageItems.title}
  //                   </Sidebar.GroupItemText>
  //                 </Sidebar.GroupItemContent>
  //               </Link>
  //             </Sidebar.GroupItem>
  //           );
  //         })}
  //       </Sidebar.Group>
  //     );
  //   })} */}
  // </Sidebar>
};

function RenderSideBarPages({ ...props }: any) {
  const {
    sidebarItems: sidebars,
    version,
    Link,
    router,
  } = React.useContext(LayoutContext);

  const [hover, setHover] = React.useState(false);

  function getSidebarItems() {
    for (let i = 0; i < sidebars.length; i++) {
      if (sidebars[i].title === props.selectedHeading) {
        return sidebars[i].pages;
      }
    }
  }
  return (
    <Sidebar
      // position="fixed"
      // w="250px"
      pr="$1"
      {...props}
      // borderColor="$borderLight200"
      // borderRightWidth={1}
      sx={{
        'zIndex': 1,
        '@lg': {
          // pl: fluidLayout ? '$1' : '$1',
          height: '60vh',
        },
        '@xl': {
          // pl: fluidLayout ? '$1' : '$1',
          height: '65vh',
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
      {getSidebarItems()?.map((sidebarPagesItems: any) => {
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
  );
}
export default ResponsiveSidebar;
