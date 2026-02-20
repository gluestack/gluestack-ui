export const componentPreviewerTemplate = (
  imports: string,
  code: string,
  argTypes: string,
  reactLive: string,
  nativeOnly?: boolean
) => `import { ComponentPreviewer } from '@/components/custom/component-previewer';
${imports}

export default function Example() {
  return (
    <ComponentPreviewer
      code={\`${code}\`}
      argTypes={${argTypes}}
      reactLive={${reactLive}}
      ${nativeOnly ? 'nativeOnly' : ''}
    />
  );
}`;

export const pageContentTemplate = `
"use client";
import Docs from './index.mdx';
export default function Page() {
  return (
    <div>
      <Docs />
    </div>
  );
}`;

export const codePreviewerTemplate = (
  code: string,
  argTypes: string,
  reactLive: string,
  title: string,
  description: string,
  importMap: Record<string, string[]>,
  nativeOnly?: boolean
) =>
  `
  ${title && title.toLowerCase() !== 'basic' ? `#### ${title}` : ''}

  ${description && `${description}`}

  <CodePreviewer
  code={\`${code}\`}
  argTypes={${argTypes}}
  reactLive={${reactLive}}
  importMap={${JSON.stringify(importMap)}}
  ${nativeOnly ? 'nativeOnly' : ''}
/>`;

export const layoutTemplate = (frontMatter: Record<string, any>) => {
  const { title, description } = frontMatter;
  return `
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: ${JSON.stringify(title || '')},
  description: ${JSON.stringify(description || '')}
}

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}`;
};

export const createAllComponentsTemplate = (
  components: string[],
  componentMap: string,
  componentsNameList: string[]
) => {
  return `import React from 'react';;
import { Grid,GridItem } from '@/components/ui/grid';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';

${componentMap}

const componentsList = [${components}];
const componentsNameList = ${JSON.stringify(componentsNameList)};
export default function AllComponents() {
  return (
    <Grid
      className="gap-5"
      _extra={{
        className: 'sm:grid-cols-2 md:grid-cols-3 grid-cols-1 2xl:grid-cols-4',
      }}
    >
      {componentsNameList.map((componentName,index) => {
        const Component = componentsList[index];

        return (
          <GridItem
            _extra={{
              className: 'col-span-1',
            }}
            key={componentName}
          >
           <Box className="flex h-[300px] border border-border  items-center overflow-hidden justify-center rounded-lg bg-card">
              <Box className="flex-1 w-full flex items-center justify-center origin-center">
                <Component />
              </Box>
              <Box
                className="w-full py-2 px-4 bg-muted cursor-pointer"
                onClick={() => {
                  window.location.href = \`/ui/docs/components/\${componentName}\`;
                  }}
              >
                <Text className="text-left text-muted-foreground text-lg font-medium capitalize">
                  {componentName}
                </Text>
              </Box>
            </Box>
          </GridItem>
        );
      })}
    </Grid>
  );
}

  `;
};
