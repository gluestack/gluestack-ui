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
  const docsLayoutRef = useRef<HTMLDivElement>(null);
  const fluidLayout = false;
  return (
    <div
      // @ts-ignore
      ref={docsLayoutRef}
      className="bg-background-0 overflow-auto w-screen h-screen"
      //to add handler to the container on scroll and update the active tab
      id="layout-content"
    >
      <Header />
      <div
        className={`flex justify-between ${
          fluidLayout ? "lg:ml-4" : "lg:ml-36 xl:ml-[464px]"
        }`}
      >
        <div
          className={`w-[250px] hidden lg:flex z-10 ${
            fluidLayout ? "border-r border-gray-200 dark:border-gray-800" : ""
          }`}
        >
          <Sidebar />
        </div>

        <div className="flex-1 md:items-center w-[85%]">
          {/* <ComponentIntro
            display={fluidLayout ? "flex" : "none"}
            sidebarItems={sidebars}
          />
          <HeadingTabs
            display={fluidLayout ? "flex" : "none"}
            sidebarItems={sidebars}
          /> */}

          <div className="flex-1 mt-20 flex-row">
            <MDXProvider
              components={{
                h1: (props: any) => {
                  return (
                    <H1
                      {...props}
                      className="text-typography-950 mt-8 mb-10 leading-14"
                    />
                  );
                },
                h2: (props: any) => {
                  return (
                    <H2
                      {...props}
                      className="text-typography-950 mb-1.5 mt-3"
                    />
                  );
                },
                h3: (props: any) => {
                  return (
                    <H3
                      {...props}
                      className="text-typography-950 mb-1.5 mt-3"
                    />
                  );
                },
                h4: (props: any) => {
                  return (
                    <H4
                      {...props}
                      className="text-typography-950 mb-1.5 mt-3"
                    />
                  );
                },
                h5: (props: any) => {
                  return (
                    <H5 {...props} className="text-typography-950 mt-2.5" />
                  );
                },
                pre: (props: any) => {
                  // return null;
                  return (
                    //@ts-ignore
                    <CodePreview
                      {...props.children.props}
                      // code={props.children.props.children}
                      metaData={{
                        code: `${props?.children?.props?.children ?? ""}`,
                      }}
                      language={
                        props?.children?.props?.className?.split("language-")[1]
                      }
                      showArgsController={false}
                      showComponentRenderer={false}
                      className="mt-2.5 overflow-hidden w-full h-max mb-6"
                    />
                  );
                },
                ul: (props: any) => <UL {...props} mb={12} w="$full" />,
                ol: (props: any) => <OL {...props} mb={12} />,
                li: (props: any) => {
                  return (
                    <LI {...props} w="$full">
                      {props?.children}
                    </LI>
                  );
                },
                p: (props: any) => (
                  <p
                    {...props}
                    className="mb-6 leading-7 font-body text-gray-700 dark:text-gray-300"
                  />
                ),
                // a: (props: any) => {
                //   return (
                //     <a
                //       {...props}
                //       target={containsAny(props.href) ? "_blank" : undefined}
                //       rel={
                //         containsAny(props.href)
                //           ? "noopener noreferrer"
                //           : undefined
                //       }
                //       className="leading-6 font-body text-gray-900 dark:text-gray-100 underline underline-offset-4 dark:decoration-gray-100 focus-visible:outline-blue-200 dark:focus-visible:outline-blue-100"
                //     />
                //   );
                // },
                code: (props: any) => {
                  // return null;
                  return <InlineCode>{props.children}</InlineCode>;
                },
                blockquote: (props: any) => {
                  //@ts-ignore  x.children[1].props added due to internal bug in next-mdx
                  return <BlockQuote {...props} />;
                },
              }}
            >
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
