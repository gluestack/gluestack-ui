import { CodeBlock } from '@/components/custom/markdown/code-block';
import React from 'react';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import Link from 'next/link';
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

export const blogComponents = {
  h1: (propsComponents: any) => {
    return (
      <Heading
        size="3xl"
        className="text-[52px] mt-2 mb-5 leading-[64px]"
        {...propsComponents}
      />
    );
  },
  h2: (propsComponents: any) => {
    return (
      <Heading
        size="2xl"
        className="mb-1.5 pt-20 -mt-14"
        {...propsComponents}
      />
    );
  },
  h3: (propsComponents: any) => {
    return (
      <Heading size="xl" className="mb-1.5 pt-20 -mt-16" {...propsComponents} />
    );
  },
  h4: (propsComponents: any) => {
    return (
      <Heading size="lg" className="mb-1.5 pt-20 -mt-20" {...propsComponents} />
    );
  },
  h5: (propsComponents: any) => {
    return (
      <Heading size="md" className="mb-1.5 pt-20 -mt-20" {...propsComponents} />
    );
  },
  p: (propsComponents: any) => (
    <Text className="my-1 leading-6 font-body" {...propsComponents} />
  ),
  ul: (props: any) => <UL {...props} className="w-full mb-6 space-y-2" />,
  ol: (props: any) => <OL {...props} className="mb-6 space-y-2" />,
  li: (props: any) => {
    return (
      <LI {...props} className="w-full">
        {props?.children}
      </LI>
    );
  },
  a: (props: any) => {
    return (
      <Link
        isExternal={containsAny(props.href)}
        className="leading-6 font-body underline underline-offset-4 inline-flex"
        {...props}
      />
    );
  },
  pre: ({ children }: { children: React.ReactElement<CodeProps> }) => {
    const code = children?.props?.children || '';
    const language =
      children?.props?.className?.replace('language-', '') || 'jsx';
    return <CodeBlock code={code} language={language} />;
  },
  code: (props: any) => <InlineCode {...props} />,
  blockquote: (props: any) => <Note {...props} />,
};
