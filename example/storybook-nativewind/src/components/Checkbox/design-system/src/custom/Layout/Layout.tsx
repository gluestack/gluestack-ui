/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Box, HStack, Text, Link as GLink } from '../../primitives';
import { AppProviderWithOverlay } from '../../core';
import { LayoutContent } from './LayoutContent';
import { LayoutHeader } from './LayoutHeader';
import { LayoutSidebar } from './LayoutSidebar';
import { H1 } from '../H1';
import { H2 } from '../H2';
import { H3 } from '../H3';
import { H4 } from '../H4';
import { H5 } from '../H5';
import { UL } from '../UL';
import { LI } from '../LI';
import { BlockQuote } from '../BlockQuote';
import { InlineCode } from '../InlineCode';
import { LayoutContext } from './LayoutContext';
import ResponsiveSidebar from './ResponsiveSidebar';
import { CodePreview } from '../CodePreview';
import { PrevNextButtons } from '../PrevNextButtons';
import { ComponentIntro } from '../ComponentIntro';
import { HeadingTabs } from '../HeadingTabs';
import OL from '../OL';
import EditPageOnGithubLink from '../EditPageOnGithubLink';
import { showToc } from '../../utils/helperFunction';

function containsAny(targetString: string) {
  const stringsToCheck: string[] = [
    'gluestack.io',
    'ui',
    'style',
    'enterprise',
    'contact-us',
  ];
  for (const str of stringsToCheck) {
    if (targetString.includes(str)) {
      return true; // The target string contains at least one of the strings to check.
    }
  }
  return false; // None of the strings were found in the target string.
}

export const Layout = React.forwardRef(
  (
    {
      version,
      sidebarItems: sidebars,
      headerItems,
      // _footerItems,
      Link,
      router,
      children,
      MDXProvider,
      Image,
      colorMode,
      toggleColorMode,
      Provider,
      breadcrumbs,
      fluidLayout = false,
      Docsearch,
    }: any,
    docsLayoutRef: any
  ) => {
    const [isOpenSidebar, setIsOpenSidebar] = React.useState(false);
    let StyleProvider = AppProviderWithOverlay;
    if (Provider) {
      StyleProvider = Provider;
    }
    const [sidebarItems, setSidebarItems] = React.useState([]);
    const toc = showToc(sidebars, router.pathname);
    React.useEffect(() => {
      setSidebarItems(sidebars);
    }, [sidebars]);

    return (
      <LayoutContext.Provider
        value={{
          isOpenSidebar,
          setIsOpenSidebar,
          sidebarItems,
          headerItems,
          version,
          setSidebarItems,
          colorMode,
          toggleColorMode,
          Link,
          router,
          Image,
          breadcrumbs,
          Docsearch,
          // selectedHeading
        }}
      >
        <StyleProvider colorMode={colorMode ?? 'dark'}>
          <Box
            // @ts-ignore
            ref={docsLayoutRef}
            h="100%"
            sx={{
              _dark: { bg: '$black' },
              _web: {
                overflow: 'overlay',
                height: '100vh',
              },
            }}
            //to add handler to the container on scroll and update the active tab
            nativeID="layout-content"
          >
            <LayoutHeader fluidLayout={fluidLayout} />
            <HStack
              justifyContent="space-between"
              sx={{
                '@lg': {
                  ml: fluidLayout ? '$4' : 36,
                },
                '@xl': {
                  ml: fluidLayout ? '$4' : 116,
                },
              }}
            >
              <Box
                w={250}
                sx={{
                  'display': 'none',
                  '@lg': {
                    display: 'flex',
                  },
                  // 'borderColor': fluidLayout ? '$borderLight200' : '',
                  // '_dark': {
                  //   borderColor: fluidLayout ? '$borderDark800' : '',
                  // },
                }}
                // borderRightWidth={fluidLayout ? 1 : 0}
              >
                <LayoutSidebar
                  // sidebarItems={sidebarItems}
                  fluidLayout={fluidLayout}
                />
              </Box>

              <Box
                flex={1}
                sx={{
                  '@md': {
                    alignItems: 'center',
                  },
                }}
              >
                <ComponentIntro display={fluidLayout ? 'flex' : 'none'} />
                <HeadingTabs display={fluidLayout ? 'flex' : 'none'} />

                <Box flex={1} mt={20} flexDirection="row">
                  <MDXProvider
                    components={{
                      h1: (props: any) => {
                        return <H1 {...props} mt={8} mb={10} lineHeight={56} />;
                      },
                      h2: (props: any) => {
                        return <H2 {...props} mt="$3" mb={6} />;
                      },
                      h3: (props: any) => {
                        return <H3 {...props} mt="$3" mb={6} />;
                      },
                      h4: (props: any) => {
                        return <H4 {...props} mt="$3" mb={6} />;
                      },
                      h5: (props: any) => {
                        return <H5 {...props} mt="$2.5" mb={6} />;
                      },
                      pre: (props: any) => {
                        return (
                          //@ts-ignore
                          <CodePreview
                            {...props.children.props}
                            // code={props.children.props.children}
                            metaData={{
                              code: `${props?.children?.props?.children ?? ''}`,
                            }}
                            language={
                              props?.children?.props?.className?.split(
                                'language-'
                              )[1]
                            }
                            showArgsController={false}
                            showComponentRenderer={false}
                            h="max-content"
                            mb="$6"
                            w="$full"
                            overflow="auto"
                            mt={'$1'}
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
                        <Text
                          {...props}
                          mb={24}
                          lineHeight={28}
                          fontFamily="$body"
                          sx={{
                            color: '$textDark700',
                            _dark: {
                              color: '$textDark300',
                            },
                          }}
                        />
                      ),
                      a: (props: any) => {
                        return (
                          <GLink
                            isExternal={containsAny(props.href)}
                            {...props}
                            // mb={24}
                            lineHeight={24}
                            fontFamily="$body"
                            color="$primary600"
                            sx={{
                              'textDecorationColor': '$primary600',
                              ':hover': {
                                textDecorationLine: 'underline',
                              },
                              '_dark': {
                                color: '$primary400',
                                textDecorationColor: '$primary400',
                              },
                            }}
                          />
                        );
                      },
                      code: (props: any) => {
                        return <InlineCode>{props.children}</InlineCode>;
                      },
                      blockquote: (props: any) => {
                        //@ts-ignore  x.children[1].props added due to internal bug in next-mdx
                        return (
                          <BlockQuote {...props.children[1].props} mb={24}>
                            <Text>{props.children[1].props.children}</Text>
                          </BlockQuote>
                        );
                      },
                    }}
                  >
                    <Box flex={1} sx={{ '@xl': { mx: '$12' }, 'mx': '$5' }}>
                      <LayoutContent
                        display={isOpenSidebar ? 'none' : 'flex'}
                        sx={{
                          '@md': {
                            minWidth: 736,
                          },
                          '@lg': {
                            minWidth: 662,
                            display: 'flex',
                          },
                          '@xl': {
                            minWidth: 598,
                          },
                          '@xxl': {
                            minWidth: 736,
                          },
                        }}
                        height="$full"
                        w="100%"
                        maxWidth={toc ? 736 : null}
                        mx={'auto'}
                      >
                        {children}
                        <EditPageOnGithubLink sidebarItems={sidebarItems} />
                        <PrevNextButtons sidebarItems={sidebarItems} />
                      </LayoutContent>
                    </Box>
                  </MDXProvider>

                  {/** Extra Space will be used for quick nav */}
                  {toc ? (
                    <Box
                      width={200}
                      sx={{
                        'display': 'none',
                        '@xl': {
                          display: 'flex',
                        },
                      }}
                    />
                  ) : null}
                </Box>
              </Box>
            </HStack>
            <ResponsiveSidebar />
          </Box>
        </StyleProvider>
      </LayoutContext.Provider>
    );
  }
);
