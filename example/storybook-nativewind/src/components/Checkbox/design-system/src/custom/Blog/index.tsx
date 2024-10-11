/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
// import { useRouter } from 'next/router';
import { Box, Text, Link as GLink } from '../../primitives';
import { H1 } from '../H1';
import { H2 } from '../H2';
import { H3 } from '../H3';
import { H4 } from '../H4';
import { H5 } from '../H5';
import { UL } from '../UL';
import { LI } from '../LI';
import { BlockQuote } from '../BlockQuote';
import { InlineCode } from '../InlineCode';
import { CodePreview } from '../CodePreview';
import OL from '../OL';
import { LayoutContent } from '../Layout/LayoutContent';

export const Blog = React.forwardRef(({ children, MDXProvider }: any) => {
  // const router = useRouter();
  return (
    <Box
      flex={1}
      mt={20}
      flexDirection="row"
      width="85%"
      maxWidth={1440}
      mx="auto"
    >
      <MDXProvider
        components={{
          h1: (props: any) => {
            return (
              <H1 mt={8} mb={20} lineHeight={64} fontSize={52} {...props} />
            );
          },
          h2: (props: any) => {
            return <H2 mt={-58} pt={84} mb={6} fontSize={24} {...props} />;
          },
          h3: (props: any) => {
            return <H3 mt={-64} pt={84} mb={6} fontSize={20} {...props} />;
          },
          h4: (props: any) => {
            return <H4 mt={-76} pt={84} mb="$1" {...props} />;
          },
          h5: (props: any) => {
            return <H5 mt={-76} pt={84} mb="$1" {...props} />;
          },
          pre: (props: any) => {
            return (
              <CodePreview
                // code={props.children.props.children}
                metaData={{
                  code: `${props?.children?.props?.children ?? ''}`,
                }}
                language={
                  props?.children?.props?.className?.split('language-')[1]
                }
                showArgsController={false}
                showComponentRenderer={false}
                h="max-content"
                mb="$6"
                w="$full"
                mt={'$1'}
                {...props.children.props}
              />
            );
          },
          ul: (props: any) => <UL mb={12} w="$full" {...props} />,
          ol: (props: any) => <OL mb={12} {...props} />,
          li: (props: any) => {
            return (
              <LI w="$full" {...props}>
                {props?.children}
              </LI>
            );
          },
          p: (props: any) => (
            <Text
              mb={2}
              lineHeight={24}
              marginTop={4}
              marginBottom={4}
              fontFamily="$body"
              sx={{
                color: '$textDark700',
                _dark: {
                  color: '$textDark300',
                },
              }}
              {...props}
            />
          ),
          a: (props: any) => {
            return (
              <GLink
                isExternal={
                  props.href.includes('ui.gluestack.io') ? false : true
                }
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
                {...props}
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
        <Box flex={1}>
          <LayoutContent
            //   display={isOpenSidebar ? 'none' : 'flex'}
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
            w="$full"
            // maxWidth={router.pathname === '/blogs' ? '$full' : 999}
          >
            {children}
          </LayoutContent>
        </Box>
      </MDXProvider>

      {/** Extra Space will be used for quick nav */}
      {/* <Box
        width={200}
        sx={{
          'display': 'none',
          '@xl': {
            display: 'flex',
          },
        }}
      /> */}
    </Box>
  );
});
