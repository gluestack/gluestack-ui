'use client';
import Header from '@/components/page-components/header';
import Sidebar from '@/components/page-components/sidebar';
import { MDXProvider } from '@mdx-js/react';
import { LayoutContent } from './LayoutContent';
import { useRef, useEffect, useState } from 'react';
import { PrevNextButtons } from './PrevNextButtons';
import sidebarData from '@/sidebar.json';
import EditPageOnGithubLink from './EditPageOnGithubLink';
import { useMDXComponents } from '@/mdx-components';
import { usePathname } from 'next/navigation';
import DocsSidebar from '@/components/page-components/sidebar/DocsSidebar';
import ResponsiveSidebar from '@/components/page-components/landing-page/ResponsiveSidebar';
import { LayoutContext } from './LayoutContext';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const docsLayoutRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  // Check if current route is documentation
  const isDocsRoute = pathname?.includes('/docs/');

  const fluidLayout =
    pathname.includes('docs/apps') ||
    pathname.includes('docs/components/all-components') ||
    pathname.includes('overview/quick-start');

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
      className="bg-white dark:bg-black overflow-auto w-screen h-screen"
      //to add handler to the container on scroll and update the active tab
      id="layout-content"
    >
      <Header />
      <div
        className={`md:flex justify-between mx-auto ${
          fluidLayout ? '' : 'lg:ml-36 md:w-[85%]'
        }`}
      >
        <div
          className={`w-[250px] hidden lg:flex z-0 ${
            fluidLayout ? 'ml-8' : ''
          }`}
        >
          <Sidebar />
        </div>

        <div className="flex-1 md:items-center md:w-[85%] mx-auto">
          {/* <ComponentIntro
            display={fluidLayout ? "flex" : "none"}
            sidebarItems={sidebars}
          />
          <HeadingTabs
            display={fluidLayout ? "flex" : "none"}
            sidebarItems={sidebars}
          /> */}

          <div className={`flex-1 flex-row sidebar-hide ${isOpenSidebar ? 'hidden' : ''}`}>
            <MDXProvider components={useMDXComponents({})}>
              <div
                className={`px-4 md:px-0 ${fluidLayout ? 'max-w-[92%] mx-auto' : 'max-w-[736px] 2xl:mx-auto'} ${pathname.includes('overview/quick-start') || pathname.includes('docs/apps') ? '2xl:max-w-[1280px]' : ''}`}
              >
                <LayoutContent className="flex md:min-w-[736px] lg:min-w-[662px] xl:min-w-[598px] 2xl:min-w-[736px] h-full w-full mx-auto flex-col scroll-smooth">
                  {children}
                  <EditPageOnGithubLink sidebarItems={sidebarData} />
                  <PrevNextButtons sidebarItems={sidebarData} />
                </LayoutContent>
              </div>
            </MDXProvider>
          </div>
        </div>
      </div>
      {/* Conditional Sidebar Rendering */}
      {isOpenSidebar && (
        <>
          {isDocsRoute ? (
            <DocsSidebar
              isOpen={isOpenSidebar}
              setIsOpenSidebar={setIsOpenSidebar}
            />
          ) : (
            <ResponsiveSidebar
              isOpen={isOpenSidebar}
              setIsOpenSidebar={setIsOpenSidebar}
            />
          )}
        </>
      )}
      </div>
      </LayoutContext.Provider>
  );
};
