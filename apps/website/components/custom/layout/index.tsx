"use client";
import Header from "@/components/page-components/header";
import Sidebar from "@/components/page-components/sidebar";
import { MDXProvider } from "@mdx-js/react";
import { LayoutContent } from "./LayoutContent";
import { InlineCode } from "@/components/docs-components/inline-code";
import { UL } from "../markdown/ul";
import { OL } from "../markdown/ol";
import { LI } from "../markdown/li";
import { H1, H2, H3, H4, H5 } from "@expo/html-elements";
import { useRef } from "react";
import { PrevNextButtons } from "./PrevNextButtons";
import sidebarData from "../../../sidebar.json";
import EditPageOnGithubLink from "./EditPageOnGithubLink";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { colorMode } = useContext(ThemeContext);
  const docsLayoutRef = useRef<HTMLDivElement>(null);
  const fluidLayout = false;
  return (
    <div
      // @ts-ignore
      ref={docsLayoutRef}
      className={`${colorMode === "light" ? "bg-white" : "bg-black"} overflow-auto w-screen h-screen`}
      //to add handler to the container on scroll and update the active tab
      id="layout-content"
    >
      <Header />
      <div
        className={`flex justify-between mx-auto ${
          fluidLayout ? "lg:ml-4" : "lg:ml-36 md:w-[85%]"
        }`}
      >
        <div
          className={`w-[250px] hidden lg:flex z-10 ${
            fluidLayout ? "border-r border-gray-200 dark:border-gray-800" : ""
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

          <div className="flex-1 flex-row">
            <MDXProvider components={useMDXComponents({})}>
              <div className="flex-1 xl:mx-12 px-4 md:px-0">
                <LayoutContent
                  //   display={isOpenSidebar ? "none" : "flex"}
                  className="flex md:min-w-[736px] lg:min-w-[662px] xl:min-w-[598px] 2xl:min-w-[736px] h-full w-full mx-auto flex-col"
                >
                  {children}
                  <EditPageOnGithubLink sidebarItems={sidebarData} />
                  <PrevNextButtons sidebarItems={sidebarData} />
                </LayoutContent>
              </div>
            </MDXProvider>

            {/** Extra Space will be used for quick nav */}
            {/* {toc ? <div className="w-[200px] hidden xl:flex" /> : null} */}
          </div>
        </div>
      </div>
      {/* <ResponsiveSidebar /> */}
    </div>
  );
};
