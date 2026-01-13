'use client';
import Header from '@/components/page-components/header';
import Sidebar from '@/components/page-components/sidebar';
import { MDXProvider } from '@mdx-js/react';
import { LayoutContent } from './LayoutContent';
import { useRef, useEffect, useState, useContext } from 'react';
import { PrevNextButtons } from './PrevNextButtons';
import sidebarData from '@/sidebar.json';
import EditPageOnGithubLink from './EditPageOnGithubLink';
import { useMDXComponents } from '@/mdx-components';
import { usePathname } from 'next/navigation';
import DocsSidebar from '@/components/page-components/sidebar/DocsSidebar';
import {
  Drawer,
  DrawerBackdrop,
  DrawerContent,
  DrawerBody,
} from '@/components/ui/drawer';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { Link } from '@/components/ui/link';
import {
  headerItems,
  SidebarItemProps,
  SidebarSectionProps,
} from '@/components/page-components/landing-page/ResponsiveSidebar/sidebar-header-items';
import { LayoutContext } from './LayoutContext';
import { Box } from '@/components/ui/box';
import { Fab, FabIcon } from '@/components/ui/fab';
import { MoonIcon, SunIcon } from '@/components/ui/icon';
import { useColorMode } from '@/app/provider';
import { TOC } from '../toc';

const SidebarItem = ({
  title,
  link,
  logo,
  logoDark,
  badge,
  onItemClick,
}: SidebarItemProps & { onItemClick: () => void }) => {
  const { colorMode } = useColorMode();
  return (
    <Link href={link} onClick={onItemClick}>
      <HStack className="hover:bg-accent px-3.5 py-2 gap-2 items-center">
        <Box className="p-0.5 items-center justify-center bg-muted rounded">
          {colorMode === 'light' ? logo : logoDark}
        </Box>
        <Text className="text-foreground">{title}</Text>
        {badge && <Box className="ml-2">{badge}</Box>}
      </HStack>
    </Link>
  );
};

const SidebarSection = ({
  title,
  items,
  onItemClick,
}: SidebarSectionProps & { onItemClick: () => void }) => (
  <Box className="mb-2 ">
    <Text className="p-3.5 text-foreground font-semibold">{title}</Text>
    {items.map((item) => (
      <SidebarItem
        key={item.title}
        title={item.title}
        link={item.link}
        logo={item.logo}
        logoDark={item.logoDark}
        badge={item.badge}
        onItemClick={onItemClick}
      />
    ))}
  </Box>
);

const SidebarWithHeaders = ({ onItemClick }: { onItemClick: () => void }) => {
  return (
    <Box className="w-full h-full">
      {headerItems.map((headerItem) => (
        <SidebarSection
          key={headerItem.title}
          title={headerItem.title}
          items={headerItem.items}
          onItemClick={onItemClick}
        />
      ))}
    </Box>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { colorMode, setColorMode } = useColorMode();
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const docsLayoutRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  // Check if current route is documentation
  const isDocsRoute = pathname?.includes('/ui/docs/');

  const fluidLayout =
    pathname.includes('docs/apps') ||
    pathname.includes('docs/components/all-components') ||
    pathname.includes('overview/quick-start');

  const tocLayout =
    fluidLayout ||
    pathname.includes('docs/mcp-server') ||
    pathname.includes('guides/tutorials') ||
    pathname.includes('/guides/more/releases') ||
    pathname.includes('guides/more/discord-faqs');
  // Reset scroll position when pathname changes
  useEffect(() => {
    const layoutElement = docsLayoutRef.current;
    if (layoutElement) {
      layoutElement.scrollTop = 0;
    }
  }, [pathname]);

  return (
    <LayoutContext.Provider value={{ isOpenSidebar, setIsOpenSidebar }}>
      <div
        // @ts-ignore
        ref={docsLayoutRef}
        className="bg-white dark:bg-black overflow-auto w-screen h-dvh scrollbar-hide fixed top-0"
        //to add handler to the container on scroll and update the active tab
        id="layout-content"
        style={{
          height: '100dvh', // Fallback for browsers that don't support dvh
          minHeight: '-webkit-fill-available', // iOS Safari specific fix
        }}
      >
        <Header
          isOpenSidebar={isOpenSidebar}
          setIsOpenSidebar={setIsOpenSidebar}
        />
        <div
          className={`md:flex justify-between mx-auto ${
            fluidLayout ? '' : 'lg:ml-36 md:w-[85%]'
          }`}
        >
          <div className="w-[250px] hidden lg:flex z-0">
            <Sidebar />
          </div>

          <div className="flex-1 md:items-center md:w-[60%] lg:[85%] mx-auto px-4 md:px-6 lg:px-8">
            {/* <ComponentIntro
            display={fluidLayout ? "flex" : "none"}
            sidebarItems={sidebars}
          />
          <HeadingTabs
            display={fluidLayout ? "flex" : "none"}
            sidebarItems={sidebars}
          /> */}

            <div
              className={`flex-1 flex-row sidebar-hide shrink ${isOpenSidebar ? 'hidden' : ''}`}
            >
              <MDXProvider components={useMDXComponents({})}>
                <div
                  className={`px-4 md:px-0 ${fluidLayout ? 'max-w-[92%] mx-auto' : 'max-w-[736px] 2xl:mx-auto'} ${pathname.includes('overview/quick-start') || pathname.includes('docs/apps') ? '2xl:max-w-[1280px]' : ''}`}
                >
                  <LayoutContent className="flex h-full w-full mx-auto flex-col scroll-smooth">
                    {children}
                    <EditPageOnGithubLink sidebarItems={sidebarData} />
                    <PrevNextButtons sidebarItems={sidebarData} />
                  </LayoutContent>
                </div>
              </MDXProvider>
            </div>
          </div>
          {!tocLayout && (
            <div className="ml-8 w-[250px] hidden min-[1180px]:flex z-0 shrink-0">
              <TOC />
            </div>
          )}
        </div>
        <Box className="fixed bottom-0 right-0 min-[992px]:hidden ">
          <Fab
            onPress={() =>
              setColorMode(colorMode === 'light' ? 'dark' : 'light')
            }
            className="absolute z-10 bottom-8 right-4"
          >
            <FabIcon
              as={colorMode === 'light' ? MoonIcon : SunIcon}
              className="stroke-typography-200"
            />
          </Fab>
        </Box>
        {/* Conditional Sidebar Rendering */}
        {isDocsRoute ? (
          <DocsSidebar
            isOpen={isOpenSidebar}
            setIsOpenSidebar={setIsOpenSidebar}
          />
        ) : (
          /* Responsive Sidebar with Drawer for non-docs routes */
          <Drawer
            isOpen={isOpenSidebar}
            size="sm"
            anchor="left"
            onClose={() => {
              setIsOpenSidebar(false);
            }}
          >
            <DrawerBackdrop />
            <DrawerContent className="lg:hidden">
              <DrawerBody className="pt-4">
                <VStack className="gap-2 px-4 min-h-fit pb-20">
                  <SidebarWithHeaders
                    onItemClick={() => setIsOpenSidebar(false)}
                  />
                  <Box className="pb-10 w-full">
                    <Link
                      href="https://geekyants.com/hire?utm_source=gluestack.io&utm_medium=referral&utm_campaign=partner_site"
                      className="w-full"
                      onClick={() => setIsOpenSidebar(false)}
                    >
                      <Box className="flex-1 justify-center items-center px-4 py-2 bg-primary-500 rounded hover:bg-primary-600">
                        <Text className="font-normal leading-normal text-base text-typography-0">
                          Hire React Native Experts
                        </Text>
                      </Box>
                    </Link>
                  </Box>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        )}
      </div>
    </LayoutContext.Provider>
  );
};
