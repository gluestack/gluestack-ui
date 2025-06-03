import CodeBlock from '@/components/custom/markdown/code-block';
import React from 'react';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Link } from '@/components/ui/link';
interface CodeProps {
  children: string;
  className?: string;
}
import { LI } from '@/components/custom/markdown/li';
import { InlineCode } from '@/components/docs-components/inline-code';
import { BlockQuote } from '@/components/custom/markdown/note/page';
import { OL } from '@/components/custom/markdown/ol';
import { UL } from '@/components/custom/markdown/ul';

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
export const docsComponents = {
  h1: (props: any) => (
    <Heading
      size="3xl"
      className="font-bold text-4xl text-typography-950 mt-2 mb-2.5 font-jakarta"
      {...props}
    />
  ),
  h2: (props: any) => (
    <Heading
      size="2xl"
      className="text-2xl font-bold text-typography-900 mt-3 mb-1.5 font-jakarta"
      {...props}
    />
  ),
  h3: (props: any) => (
    <Heading
      size="xl"
      className="text-xl font-bold text-typography-900 mt-3 mb-1.5 font-jakarta"
      {...props}
    />
  ),
  h4: (props: any) => (
    <Heading
      size="lg"
      className="text-lg font-bold text-typography-900 mt-3 mb-1.5 font-jakarta"
      {...props}
    />
  ),
  h5: (props: any) => (
    <Heading
      size="md"
      className="text-md font-bold text-typography-900 mt-2.5 mb-1.5 font-jakarta"
      {...props}
    />
  ),
  p: (props: any) => (
    <Text className="block mb-6 text-typography-800 font-inter" {...props} />
  ),
  // Define paragraph styles
  ul: (props: any) => <UL {...props} className="w-full mb-3" />,
  ol: (props: any) => <OL {...props} className="mb-3" />,
  li: (props: any) => {
    return (
      <LI {...props} className="w-full ">
        {props?.children}
      </LI>
    );
  },
  a: (props: any) => {
    return (
      <Link
        isExternal={containsAny(props.href)}
        className="leading-6 font-body text-typography-950 underline underline-offset-4 decoration-typography-950 inline-block"
        {...props}
      />
    );
  },
  // Define container styles
  wrapper: (props: any) => <div className="mx-auto py-8 " {...props} />,
  // Handle code blocks
  pre: ({ children }: { children: React.ReactElement<CodeProps> }) => {
    const code = children?.props?.children || '';
    const language =
      children?.props?.className?.replace('language-', '') || 'jsx';
    return <CodeBlock code={code} language={language} />;
  },
  code: (props: any) => {
    return <InlineCode {...props} />;
  },
  blockquote: (props: any) => {
    return <BlockQuote {...props} />;
  },
};
