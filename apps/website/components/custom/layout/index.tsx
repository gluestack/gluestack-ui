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
import { LayoutContext } from './LayoutContext';
import { Box } from '@/components/ui/box';
import { Fab, FabIcon } from '@/components/ui/fab';
import { MoonIcon, SunIcon } from '@/components/ui/icon';
import { useColorMode } from '@/app/provider';
import { TOC } from '../toc';

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
    pathname.includes('overview/quick-start') ||
    pathname.includes('docs/changelog');

  const tocLayout =
    fluidLayout ||
    pathname.includes('docs/mcp-server') ||
    pathname.includes('guides/tutorials') ||
    pathname.includes('/guides/more/releases') ||
    pathname.includes('guides/more/discord-faqs') ||
    pathname.includes('docs/changelog');
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
          className={`md:flex justify-between mx-auto ${fluidLayout ? '' : 'lg:ml-36 md:w-[85%]'
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
        {isDocsRoute && (
          <DocsSidebar
            isOpen={isOpenSidebar}
            setIsOpenSidebar={setIsOpenSidebar}
          />
        )}
      </div>
    </LayoutContext.Provider>
  );
};
