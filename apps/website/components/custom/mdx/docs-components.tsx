import { CodeBlock } from '@/components/custom/markdown/code-block';
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
import { Note } from '@/components/custom/markdown/note';
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
      className="font-semibold text-4xl text-typography-900 mt-8 mb-6 font-geist-sans tracking-tight"
      {...props}
    />
  ),
  h2: (props: any) => (
    <Heading
      size="2xl"
      className="text-2xl font-semibold text-typography-800 mt-8 mb-4 font-geist-sans"
      {...props}
    />
  ),
  h3: (props: any) => (
    <Heading
      size="xl"
      className="text-xl font-semibold text-typography-800 mt-6 mb-3 font-geist-sans"
      {...props}
    />
  ),
  h4: (props: any) => (
    <Heading
      size="lg"
      className="text-lg font-semibold text-typography-800 mt-5 mb-2 font-geist-sans"
      {...props}
    />
  ),
  h5: (props: any) => (
    <Heading
      size="md"
      className="text-md font-semibold text-typography-800 mt-4 mb-2 font-geist-sans"
      {...props}
    />
  ),
  p: (props: any) => (
    <Text className="block text-typography-700 font-geist-sans leading-relaxed [&:not(:first-child)]:mt-6 [&:not(:last-child)]:mb-6" {...props} />
  ),

  // Define paragraph styles
  ul: (props: any) => <UL {...props} className="w-full ml-4" />,
  ol: (props: any) => <OL {...props} className="" />,
  li: (props: any) => {
    return (
      <LI {...props} className="w-full leading-relaxed">
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
    return <CodeBlock code={code} language={language}/>;
  },
  code: (props: any) => {
    return <InlineCode {...props} />;
  },
  blockquote: (props: any) => {
    return <Note {...props} />;
  },
};
