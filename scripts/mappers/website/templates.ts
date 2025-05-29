export const componentPreviewerTemplate = (
  imports: string,
  code: string,
  argTypes: string,
  reactLive: string
) => `import { ComponentPreviewer } from '@/components/custom/component-previewer';
${imports}

export default function Example() {
  return (
    <ComponentPreviewer
      code={\`${code}\`}
      argTypes={${argTypes}}
      reactLive={${reactLive}}
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
  description: string
) =>
  `
  ${title && `#### ${title}`}

  ${description && `${description}`}
  
  <CodePreviewer
  code={\`${code}\`}
  argTypes={${argTypes}}
  reactLive={${reactLive}}
/>`;

export const layoutTemplate = (frontMatter: Record<string, any>) => `
import React from 'react';
import { Metadata } from 'next';

 export const metadata: Metadata = {
  ${Object.entries(frontMatter)
    .map(([key, value]) => `  "${key}": ${JSON.stringify(value)}`)
    .join(",\n  ")}
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
}
`;
